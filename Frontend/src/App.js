import "./App.css";
import { Container } from "react-bootstrap";
import { FormComponent } from "./components/FormComponent.js";
import { List } from "./components/List";
import { useEffect, useState } from "react";
import { fetchTasks } from "./helpers/axiosHelper.js";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [ids, setIds] = useState([]);

  // useEffect(() => {
  //   getTaskFromDB();
  // }, []);

  const addTask = (task, id) => {
    setTaskList([...taskList, task]);
  };
  // console.log(taskList);
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

  const handleOnCheck = (e) => {
    const { checked, value } = e.target;
    // console.log(checked, value);

    if (value === "entry" || value === "bad") {
      let toDeleteIds = [];
      taskList.forEach((item) => {
        if (item.type === value) {
          toDeleteIds.push(item.id);
        }
      });
      if (checked) {
        setIds([...ids, ...toDeleteIds]);
      } else {
        const tempArgs = ids.filter((id) => !toDeleteIds.includes(id));
        setIds(tempArgs);
      }
      return;
    }
    if (checked) {
      setIds([...ids, value]);
    } else {
      const removeIds = ids.filter((item) => item !== value);

      console.log(removeIds);
    }
  };
  console.log(ids);

  ///individual selections

  return (
    <div className="App">
      <Container>
        <div className="mt-5 text-center">
          <h1>Not To Do List</h1>
        </div>

        <FormComponent addTask={addTask} />
        <List
          taskList={taskList}
          switchTask={switchTask}
          handleOnCheck={handleOnCheck}
        />
      </Container>
    </div>
  );
}

export default App;
