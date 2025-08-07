import styles from "./Form.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import { useState } from "react";

function Form() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      addTodo({
        id: crypto.randomUUID(),
        todo: input,
        isCompleted: false,
      })
    );
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter your  Todo"
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
