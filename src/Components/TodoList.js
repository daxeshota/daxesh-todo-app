import React, { useState } from "react";

import "../App.css";

const Todolist = (props) => {
  const [line, setline] = useState(false);

  const cutline = (e) => {
    line ? setline(false) : setline(true);
  };

  return (
    <>
      <div className="todolist container w-25  bg-success bg-gradient rounded px-5 my-3 ">
        <li className="rounded p-2 m-2 h3 my-2" style={{ textDecoration: line ? "line-through" : "none" }}>
          {props.text}
        </li>

        <input type="checkbox" onClick={() => cutline(props.id)} />

        <button
          className="rounded px-3 m-2 bg-primary bg-gradient text-white"
          onClick={() => {
            props.onedit(props.id);
          }}
        >
          Edit
        </button>

        <button
          className="rounded px-3 m-2 bg-danger bg-gradient text-white"
          onClick={() => {
            props.ondelet(props.id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Todolist;
