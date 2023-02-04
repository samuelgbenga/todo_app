import React from "react";
import "./style.css";
import { AiFillCheckSquare } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
export default function List({ todo, deleteTodo, setUpdate }) {
  return (
    <div className="list">
      <div className="listContain">
        <div className="checkTodo">
          <span className="checkbox">
            <AiFillCheckSquare className="check" />
          </span>
          <div className="todo">{todo}</div>

          <FaEdit className="editTodo" onClick={setUpdate} />
        </div>
        <div className="deadline">
          <RiDeleteBin6Line onClick={deleteTodo} className="deletIcon" />{" "}
          10hr:15mins
        </div>
      </div>
    </div>
  );
}
