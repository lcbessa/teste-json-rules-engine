// src/index.js
import express from "express";
import { processRules } from "./controllers/RulesController.js";

const app = express();
app.use(express.json());

app.post("/rules", processRules);

const PORT = 7000;
console.log(`Servidor rodando no link http://localhost:${PORT}`);
app.listen(PORT);
