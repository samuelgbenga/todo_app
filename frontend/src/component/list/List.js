import React from "react";
import "./style.css";
import { AiFillCheckSquare } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { BiDotsVertical } from "react-icons/bi";
export default function List() {
  return (
    <div className="list">
      <div className="listContain">
        <div className="checkTodo">
          <span className="checkbox">
            <AiFillCheckSquare className="check" />
          </span>
          <div className="todo">Todo bla bla bla</div>
          <span className="editTodo">
            <FaEdit />
          </span>
        </div>
        <div className="deadline">
          <BiDotsVertical className="threeDots" /> 10hr:15mins
        </div>
      </div>
    </div>
  );
}
