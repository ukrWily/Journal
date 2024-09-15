import { useState } from "react";
import "./Button.css";
//
function Button() {
  const [text, setText] = useState("Save");
  const clicked = () => {
    setText((t) => t + "!");
  };
  return (
    <button className="button accent" onClick={clicked}>
      {text}
    </button>
  );
}
export default Button;
