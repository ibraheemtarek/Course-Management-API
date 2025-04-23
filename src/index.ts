import express from "express";
import "dotenv/config";
import cors from "cors";
import { connectDB } from "./dbconfig/dataSource";

const app = express();

app.use(cors());
app.use(express.json());
connectDB();

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is working on port: ${process.env.PORT || 3000}`);
});
