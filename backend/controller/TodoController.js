import { todoModel } from "../models/TodoModels.js";

export const getTodo = (req, res) => {
  todoModel
    .find()
    .then((data) => {
      res.status(200).json(data);
      return console.log("todos fetched");
    })
    .catch((err) => {
      return console.log(err);
    });
  //   res.json({ message: "hello world" });
  //   return console.log("it works");
};

// add to do handler
export const addTodo = (req, res, next) => {
  const { todo } = req.body;
  let newTodo;
  try {
    newTodo = new todoModel({ todo });
  } catch (err) {
    console.log(err);
  }
  newTodo
    .save()
    .then((data) => {
      return console.log("item saved");
    })
    .catch((err) => console.log(err));

  // todoModel
  //   .create({ todo })
  //   .then((data) => {
  //     console.log("created Successfully");
  //   })
  //   .catch((err) => console.log(err));
  //getTodo(req, res);
  //   res.json({ message: "hello world" });
  //   return console.log("it works");
  next();
};

// update to do handler
export const updateTodo = (req, res, next) => {
  const { todo } = req.body;
  const todo_id = req.params.id;
  todoModel
    .findByIdAndUpdate(todo_id, { todo })
    .then((data) => {
      return console.log("update successul");
    })
    .catch((err) => console.log(err));
  //getTodo(req, res);
  //   res.json({ message: "hello world" });
  //   return console.log("it works");
  next();
};

// delete to do handler
export const deleteTodo = async (req, res) => {
  const { _id } = req.body;
  // todoModel
  //   .findByIdAndDelete(_id)
  //   .then((data) => {
  //     if (typeof data == null) {
  //       return res.status(404).json({ message: "post does not exist" });
  //     }
  //   })
  //   .catch((err) => console.log(err));

  let postExist;
  try {
    postExist = await todoModel.findByIdAndDelete(_id);
  } catch (err) {
    return console.log(err);
  }

  if (!postExist) {
    console.log(_id);
    console.log("post does not exist");
    return res.status(404).json({ message: "post does not exist" });
  }

  return res.status(200).json({ message: "deleted" });
  //getTodo(req, res);
  //   res.json({ message: "hello world" });
  //   return console.log("it works");
};
