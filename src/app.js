import express from "express";

const app = express();

const livros = [
  { id: 1, titulo: "O Senhor dos Anéis" },
  { id: 2, titulo: "1984" },
  { id: 3, titulo: "O Pequeno Príncipe" },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

export default app;
