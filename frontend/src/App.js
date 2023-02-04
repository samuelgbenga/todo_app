import Head from "./component/head/Head";
import Middle from "./component/middle/Middle";
import List from "./component/list/List";
import {
  getTodo,
  addTodo,
  deleteTodo,
  updateTodo,
} from "./utils/HandlesApi.js";
import "./style.css";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    try {
      getTodo(setTodos);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const setUpdateFunc = (todoId, text) => {
    setTodoId(todoId);
    setText(text);
    setIsUpdating(true);
  };

  return (
    <div className="container">
      <div className="app">
        <Head
          text={text}
          setText={setText}
          addTodo={addTodo}
          setTodos={setTodos}
          setIsUpdating={setIsUpdating}
          isUpdating={isUpdating}
          updateTodo={() =>
            updateTodo(todoId, text, setText, setTodos, setIsUpdating)
          }
        />
        <Middle />
        <div className="listContainer">
          {todos &&
            todos.map((todo) => (
              <List
                key={todo._id}
                todo={todo.todo}
                deleteTodo={() => deleteTodo(todo._id, setTodos)}
                setTodoId={setTodoId}
                setUpdate={() => setUpdateFunc(todo._id, todo.todo)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
