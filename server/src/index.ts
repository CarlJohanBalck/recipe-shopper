import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import recipesRouter from "./routes/recipes.js";
import shoppingListRouter from "./routes/shopping-list.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/recipes", recipesRouter);
app.use("/api/shopping-list", shoppingListRouter);

const staticDir = path.join(__dirname, "../../public");
app.use(express.static(staticDir));
app.get("*", (_req, res) => {
  res.sendFile(path.join(staticDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
