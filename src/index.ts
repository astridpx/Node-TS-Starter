import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();

app.use(express.json());

app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is Up and Running at port ${port}`);
});
