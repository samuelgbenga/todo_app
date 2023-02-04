import express from "express";
import {
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../controller/TodoController.js";

const todoRoutes = express.Router();

todoRoutes.get("/", getTodo);
todoRoutes.post("/addTodo", addTodo);
todoRoutes.post("/updateTodo/:id", updateTodo);
todoRoutes.post("/deleteTodo", deleteTodo);

export default todoRoutes;
