import { Router } from "express";
import pool from "../db.js";
import type { RowDataPacket } from "mysql2";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { recipeIds } = req.body as { recipeIds: number[] };

    if (!Array.isArray(recipeIds) || recipeIds.length === 0) {
      res.json({ categories: [] });
      return;
    }

    const placeholders = recipeIds.map(() => "?").join(",");

    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT i.name, COALESCE(c.name, 'övrigt') AS category,
              COALESCE(c.sort, 999) AS category_sort,
              u.name AS unit, SUM(ri.amount) AS total_amount
       FROM recipe_ingredient ri
       JOIN ingredient i ON ri.ingredient_id = i.id
       JOIN unit u ON ri.unit_id = u.id
       LEFT JOIN category c ON i.category_id = c.id
       WHERE ri.recipe_id IN (${placeholders})
       GROUP BY i.id, u.id
       ORDER BY category_sort, category, i.name`,
      recipeIds
    );

    const categoryMap = new Map<
      string,
      { name: string; total_amount: number; unit: string | null }[]
    >();

    for (const row of rows) {
      const cat = row.category as string;
      if (!categoryMap.has(cat)) {
        categoryMap.set(cat, []);
      }
      categoryMap.get(cat)!.push({
        name: row.name,
        total_amount: Number(row.total_amount),
        unit: row.unit,
      });
    }

    const categories = Array.from(categoryMap.entries()).map(
      ([category, items]) => ({ category, items })
    );

    res.json({ categories });
  } catch (err) {
    console.error("POST /api/shopping-list error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
