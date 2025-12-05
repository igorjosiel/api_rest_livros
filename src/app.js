import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import book from "./models/Book.js";

const connection = await connectToDatabase();

connection.on("error", (error) =>
  console.log("Erro na conexão com o banco de dados: ", error)
);

connection.once("open", () =>
  console.log("Conexão com o banco de dados realizada com sucesso!")
);

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", async (req, res) => {
  const books = await book.find({});

  res.status(200).json(books);
});

app.get("/livros/:id", (req, res) => {
  const index = searchBook(req.params.id);

  res.status(200).json(books[index]);
});

app.post("/livros", (req, res) => {
  books.push(req.body);

  res.status(201).send("Livro adicionado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
  const index = searchBook(req.params.id);
  books[index].titulo = req.body.titulo;

  res.status(200).json(books);
});

app.delete("/livros/:id", (req, res) => {
  const index = searchBook(req.params.id);
  books.splice(index, 1);

  res.status(200).send("Livro removido com sucesso!");
});

export default app;
