import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectToDatabase();

connection.on("error", (error) =>
  console.log("Erro na conexão com o banco de dados: ", error)
);

connection.once("open", () =>
  console.log("Conexão com o banco de dados realizada com sucesso!")
);

const app = express();
routes(app);

export default app;
