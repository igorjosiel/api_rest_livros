import { Author } from "../models/Author.js";

class AuthorController {
  static async getAuthors(req, res) {
    try {
      const authors = await Author.find({});

      res.status(200).json(authors);
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - falha na requisição dos autores.`,
      });
    }
  }

  static async getAuthorById(req, res) {
    try {
      const id = req.params.id;
      const author = await Author.findById(id);

      res.status(200).json(author);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição do autor.` });
    }
  }

  static async createAuthor(req, res) {
    try {
      const newAuthor = await Author.create(req.body);

      res
        .status(201)
        .json({ message: "Autor criado com sucesso!", author: newAuthor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar o autor.` });
    }
  }

  static async updateAuthor(req, res) {
    try {
      const id = req.params.id;
      await Author.findByIdAndUpdate(id, req.body);

      res.status(200).json({ message: "Autor atualizado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na atualização do autor.` });
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id;
      await Author.findByIdAndDelete(id);

      res.status(200).json({ message: "Autor removido com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na remoção do autor.` });
    }
  }
}

export default AuthorController;
