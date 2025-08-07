import { useDispatch, useSelector } from "react-redux";
import styles from "./ToDoContainer.module.css";
import { completeTodo, deleteTodo } from "../features/todoSlice";

function ToDoContainer() {
  const { todos } = useSelector((store) => store.todo);
  const dispatch = useDispatch();
 

  //   Delete Todo
  function handleDelteTodo(id) {
    dispatch(deleteTodo(id));
  }

  return (
    <ul className={styles.todoconatiner}>
      {todos.map((todo) => (
        <li className={styles.todoItem} key={crypto.randomUUID()}>
          <label
            className={
              todo.isCompleted ? styles.completed : styles.notCompleted
            }
          >
            {todo.todo}
          </label>
          <button
            onClick={() => {
              dispatch(completeTodo(todo.id));
              console.log(todos);
            }}
          >
            Complete
          </button>

          <button onClick={() => handleDelteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoContainer;
