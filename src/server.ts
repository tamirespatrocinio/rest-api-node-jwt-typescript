import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import AppError from "./errors/AppError";
import "express-async-errors";
//Seguir as ordens das dependências
import "./db";
import routes from "./routes";


const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.log(err);

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

app.listen(process.env.PORT || 3333, async () => {
  console.log("🚀 Server started on port 3333!");
});
