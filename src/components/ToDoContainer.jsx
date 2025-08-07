import { useDispatch, useSelector } from "react-redux";
import styles from "./ToDoContainer.module.css";
import { completeTodo } from "../features/todoSlice";

function ToDoContainer() {
  const { todos } = useSelector((store) => store.todo);
  const dispatch = useDispatch();
  //   function handleComplete(status) {
  //     dispatch(completeTodo(status));
  //     console.log(todos);
  //   }

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
        </li>
      ))}
    </ul>
  );
}

export default ToDoContainer;
