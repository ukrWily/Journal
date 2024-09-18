import { useState } from "react";
import "./JournalForm.css";
import Button from "../Button/Button.jsx";

const JournalForm = () => {
  const [inputData, setInputData] = useState("");

  const inputChange = (event) => {
    setInputData(event.target.value);
    console.log(inputData);
  };
  return (
    <form className="journal-form">
      <input type="date" />
      <input type="text" value={inputData} onChange={inputChange} />
      <textarea></textarea>
      <Button text="Save" />
    </form>
  );
};
export default JournalForm;
