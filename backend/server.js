import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import TodoRoutes from "./routes/TodoRoutes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 4000;

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MongoDB_Connect_Url)
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

app.use("/todo", TodoRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
