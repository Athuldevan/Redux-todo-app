import Form from "./components/Form";
import styles from "./App.module.css";
import ToDoContainer from "./components/ToDoContainer";
function App() {
  return (
    <>
      <div className={styles.app}>
        <Form />
      </div>
      <ToDoContainer />
    </>
  );
}

export default App;
