import "./JournalForm.css";
import Button from "../Button/Button.jsx";
import { useState } from "react";

const JournalForm = ({ onSubmit }) => {
  const [formValidState, setFormValidState] = useState({
    title: true,
    post: true,
    date: true
  });

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    let isFormValid = true;
    if (!formProps.title?.trim().length) {
      setFormValidState({...StaticRange, title: false})
      isFormValid = false;
    } else {
      setFormValidState({...StaticRange, title: true})
    }
    if (!formProps.post?.trim().length) {
      setFormValidState({...StaticRange, post: false})
      isFormValid = false;
    } else {
      setFormValidState({...StaticRange, post: true})
    }
    if (!formProps.date.trim().length) {
      setFormValidState({...StaticRange, date: false})
      isFormValid = false;
    } else {
      setFormValidState({...StaticRange, date: true})
    }
    if (!isFormValid) {
      return;
    }
    onSubmit(formProps);
  };
  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input type="text" name="title" style={{border: formValidState.title ? undefined : '1px solid red'}} />
      <input type="date" name="date" style={{border: formValidState.text ? undefined : '1px solid red'}} />
      <input type="text" name="tag" style={{border: formValidState.date ? undefined : '1px solid red'}} />
      <textarea name="post"></textarea>
      <Button
        text="Save"
      />
    </form>
  );
};
export default JournalForm;
