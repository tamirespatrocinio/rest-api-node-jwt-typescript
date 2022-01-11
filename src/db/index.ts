import moongose from "mongoose";
import { config } from "dotenv";

config();

moongose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/test");

const db = moongose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function callback() {
  console.log("DB Connect");
});
