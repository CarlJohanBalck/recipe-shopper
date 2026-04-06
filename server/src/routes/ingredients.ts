import { Router } from "express";
import pool from "../db.js";
import type { RowDataPacket } from "mysql2";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT i.id, i.name, c.name AS category
       FROM ingredient i
       LEFT JOIN category c ON i.category_id = c.id
       ORDER BY i.name`
    );
    res.json({
      ingredients: rows.map((i) => ({
        id: i.id,
        name: i.name,
        category: i.category ?? null,
      })),
    });
  } catch (err) {
    console.error("GET /api/ingredients error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
