import express from "express";

const app = express();
app.use(express.json());

const books = [
  { id: 1, titulo: "O Senhor dos Anéis" },
  { id: 2, titulo: "1984" },
  { id: 3, titulo: "O Pequeno Príncipe" },
];

function searchBook(id) {
  return books.findIndex((book) => {
    return book.id === Number(id);
  });
}

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) => {
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

export default app;
