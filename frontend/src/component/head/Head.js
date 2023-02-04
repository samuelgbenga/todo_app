import React from "react";
import "./style.css";
import { IoReorderFourOutline } from "react-icons/io5";
import { GiAlarmClock } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
function Head({ text, setText, addTodo, setTodos, isUpdating, updateTodo }) {
  const handleOnclick = () => {
    if (isUpdating) {
      updateTodo();
    } else {
      addTodo(text, setText, setTodos);
    }
  };
  return (
    <div className="head">
      <div className="date">
        <IoReorderFourOutline className="fourdash" />

        <div>2 Feb</div>
        <div>
          <GiAlarmClock className="alarmClock" />
        </div>
      </div>
      <div className="todoInput">
        <input
          type="text"
          placeholder="hello..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <span className="icon" onClick={() => handleOnclick()}>
          <AiOutlinePlus className="plusIcon" />
        </span>
      </div>
    </div>
  );
}

export default Head;
