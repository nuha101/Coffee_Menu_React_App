import React from "react";

export default function Menu(props) {
  return (
    <div>
      <ul>
        <li>
          {props.name}... <span>{props.price}</span>
        </li>
      </ul>
    </div>
  );
}
