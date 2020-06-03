import React, { useState } from "react";
import "./TextCollapsed.scss";
export default function TextCollapsed({
  text = "",
  list = [],
  style = {},
  children,
}) {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`textCollapsed ${show ? "active" : ""}`}
      style={style}
      onClick={() => setShow(!show)}
    >
      {text}
      {children}
      {list.map((item, i) => (
        <div
          key={i + "colo" + item}
          style={{ display: show ? "block" : i === 0 ? "block" : "none" }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
