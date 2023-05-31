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

  const addTask = (task, id) => {
    setTaskList([...taskList, task]);
  };
  console.log(taskList);
  // const getTaskFromDB = async () => {
  //   const data = await fetchTasks();
  //   data.status === "success" && setTaskList(data.result);
  // };

  const switchTask = (id, type) => {
    // console.log(id, type);
    const switchedArg = taskList.map((item) => {
      if (item.id === id) {
        item.type = type;
      }
      return item;
    });
    setTaskList(switchedArg);
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
