import { useState } from "react";
import "./JournalForm.css";
import Button from "../Button/Button.jsx";

const JournalForm = () => {
  const [inputData, setInputData] = useState("");

  const inputChange = (event) => {
    setInputData(event.target.value);
    console.log(inputData);
  };

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
  };
  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" value={inputData} onChange={inputChange} />
      <textarea name="post"></textarea>
      <Button
        text="Save"
        onClick={() => {
          console.log("Pressed");
        }}
      />
    </form>
  );
};
export default JournalForm;
