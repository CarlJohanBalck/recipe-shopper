import { Router } from "express";
import pool from "../db.js";
import type { RowDataPacket } from "mysql2";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const search = req.query.search as string | undefined;
    const helg = req.query.helg as string | undefined;
    const page = Math.max(1, Number(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, Number(req.query.limit) || 20));
    const offset = (page - 1) * limit;

    let where = "WHERE 1=1";
    const params: (string | number)[] = [];

    if (search) {
      where += " AND r.name LIKE ?";
      params.push(`%${search}%`);
    }
    if (helg === "0" || helg === "1") {
      where += " AND r.helg = ?";
      params.push(Number(helg));
    }

    const countSql = `SELECT COUNT(DISTINCT r.id) as total FROM recipe r ${where}`;
    const [countRows] = await pool.query<RowDataPacket[]>(countSql, params);
    const total = countRows[0].total as number;

    const sql = `
      SELECT r.id, r.name, r.image_url, r.helg,
             COALESCE(CAST(SUM(ri.price) AS SIGNED), 0) AS total_price
      FROM recipe r
      LEFT JOIN recipe_ingredient ri ON r.id = ri.recipe_id
      ${where}
      GROUP BY r.id
      ORDER BY r.name
      LIMIT ? OFFSET ?
    `;
    const [rows] = await pool.query<RowDataPacket[]>(sql, [
      ...params,
      limit,
      offset,
    ]);

    res.json({
      recipes: rows.map((r) => ({
        id: r.id,
        name: r.name,
        image_url: r.image_url,
        helg: Boolean(r.helg),
        total_price: Number(r.total_price),
      })),
      total,
    });
  } catch (err) {
    console.error("GET /api/recipes error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/suggestions", async (req, res) => {
  try {
    const raw = req.query.ingredientIds as string | undefined;
    if (!raw) {
      res.json({ recipes: [] });
      return;
    }
    const ids = raw.split(",").map(Number).filter((n) => !isNaN(n) && n > 0);
    if (ids.length === 0) {
      res.json({ recipes: [] });
      return;
    }
    const placeholders = ids.map(() => "?").join(",");
    const sql = `
      SELECT r.id, r.name, r.image_url, r.helg,
             COALESCE(CAST(SUM(ri.price) AS SIGNED), 0) AS total_price,
             COUNT(DISTINCT CASE WHEN ri.ingredient_id IN (${placeholders}) THEN ri.ingredient_id END) AS match_count
      FROM recipe r
      LEFT JOIN recipe_ingredient ri ON r.id = ri.recipe_id
      GROUP BY r.id
      HAVING match_count > 0
      ORDER BY match_count DESC, r.name
      LIMIT 30
    `;
    const [rows] = await pool.query<RowDataPacket[]>(sql, ids);
    res.json({
      recipes: rows.map((r) => ({
        id: r.id,
        name: r.name,
        image_url: r.image_url,
        helg: Boolean(r.helg),
        total_price: Number(r.total_price),
        match_count: Number(r.match_count),
      })),
    });
  } catch (err) {
    console.error("GET /api/recipes/suggestions error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const [recipeRows] = await pool.query<RowDataPacket[]>(
      "SELECT id, name, url, helg, image_url, instructions FROM recipe WHERE id = ?",
      [id]
    );
    if (recipeRows.length === 0) {
      res.status(404).json({ error: "Recipe not found" });
      return;
    }

    const recipe = recipeRows[0];

    const [ingredients] = await pool.query<RowDataPacket[]>(
      `SELECT ri.ingredient_id, i.name, ri.amount, u.name AS unit, c.name AS category
       FROM recipe_ingredient ri
       JOIN ingredient i ON ri.ingredient_id = i.id
       JOIN unit u ON ri.unit_id = u.id
       LEFT JOIN category c ON i.category_id = c.id
       WHERE ri.recipe_id = ?
       ORDER BY c.sort, i.name`,
      [id]
    );

    res.json({
      id: recipe.id,
      name: recipe.name,
      url: recipe.url,
      helg: Boolean(recipe.helg),
      image_url: recipe.image_url,
      instructions: recipe.instructions,
      total_price: 0,
      ingredients: ingredients.map((i) => ({
        ingredient_id: i.ingredient_id,
        name: i.name,
        amount: Number(i.amount),
        unit: i.unit,
        category: i.category,
      })),
    });
  } catch (err) {
    console.error("GET /api/recipes/:id error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
