import Book from "../models/Book.js";

class BookController {
  static async getBooks(req, res) {
    try {
      const books = await Book.find({});

      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na requisição dos livros.`,
      });
    }
  }

  static async getBookById(req, res) {
    try {
      const id = req.params.id;
      const book = await Book.findById(id);

      res.status(200).json(book);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do livro.` });
    }
  }

  static async createBook(req, res) {
    try {
      const newBook = await Book.create(req.body);

      res
        .status(201)
        .json({ message: "Livro criado com sucesso!", book: newBook });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar o livro.` });
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id;
      await Book.findByIdAndUpdate(id, req.body);

      res.status(200).json({ message: "Livro atualizado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na atualização do livro.` });
    }
  }

  static async deleteBook(req, res) {
    try {
      const id = req.params.id;
      await Book.findByIdAndDelete(id);

      res.status(200).json({ message: "Livro removido com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na remoção do livro.` });
    }
  }
}

export default BookController;
