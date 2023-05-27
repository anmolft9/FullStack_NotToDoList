import "./App.css";
import { Container } from "react-bootstrap";
import { FormComponent } from "./components/FormComponent.js";
import { List } from "./components/List";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  const addTask = (task) => {
    setTaskList([...taskList, task]);
  };
  console.log(taskList);
  return (
    <div className="App">
      <Container>
        <div className="mt-5 text-center">
          <h1>Not To Do List</h1>
        </div>

        <FormComponent addTask={addTask} />
        <List taskList={taskList} />
      </Container>
    </div>
  );
}

export default App;
