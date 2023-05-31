import "./App.css";
import { Container } from "react-bootstrap";
import { FormComponent } from "./components/FormComponent.js";
import { List } from "./components/List";
import { useEffect, useState } from "react";
import { fetchTasks } from "./helpers/axiosHelper.js";

function App() {
  const [taskList, setTaskList] = useState([]);

  // useEffect(() => {
  //   getTaskFromDB();
  // }, []);

  const addTask = (task) => {
    setTaskList([...taskList, task]);
  };
  // console.log(taskList);
  // const getTaskFromDB = async () => {
  //   const data = await fetchTasks();
  //   data.status === "success" && setTaskList(data.result);
  // };

  const switchTask = (type, _id) => {
    console.log(type, _id);
  };

  return (
    <div className="App">
      <Container>
        <div className="mt-5 text-center">
          <h1>Not To Do List</h1>
        </div>

        <FormComponent addTask={addTask} />
        <List taskList={taskList} switchTask={switchTask} />
      </Container>
    </div>
  );
}

export default App;
