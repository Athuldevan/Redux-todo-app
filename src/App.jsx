import Form from "./components/Form";
import styles from "./App.module.css";
import ToDoContainer from "./components/ToDoContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "./features/todoSlice";
import PostComponent from "./components/PostComponent";

function App() {
  return (
    <>
      {/* {status === "loading" && <p>LOADING THE DATA</p>}
      <div className={styles.app}>
        <Form />
      </div>
      <ToDoContainer /> */}

      <PostComponent/>
    </>
  );
}

export default App;
