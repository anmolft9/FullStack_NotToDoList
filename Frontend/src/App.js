import "./App.css";
import { Container } from "react-bootstrap";
import { FormComponent } from "./components/FormComponent.js";
import { List } from "./components/List";
import { useEffect, useState } from "react";
import { fetchTasks } from "./helpers/axiosHelper";

function App() {
  const [taskList, setTaskList] = useState([]);
  // const addTask = (task) => {
  //   setTaskList([...taskList, task]);
  // };

  useEffect(() => {
    getTaskFromDB();
  }, []);

  const getTaskFromDB = async () => {
    const data = await fetchTasks();
    data.status === "success" && setTaskList(data.result);
  };
  console.log(taskList);
  return (
    <div className="App">
      <Container>
        <div className="mt-5 text-center">
          <h1>Not To Do List</h1>
        </div>

        <FormComponent />
        <List taskList={taskList} />
      </Container>
    </div>
  );
}

export default App;
