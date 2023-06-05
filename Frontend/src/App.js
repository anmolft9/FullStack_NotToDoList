import "./App.css";
import { Alert, Button, Container } from "react-bootstrap";
import { FormComponent } from "./components/FormComponent.js";
import { List } from "./components/List";
import { useEffect, useState } from "react";
import {
  deleteData,
  fetchTasks,
  postTask,
  updateData,
} from "./helpers/axiosHelper.js";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    getTaskFromDB();
  }, []);

  // console.log(taskList);
  const getTaskFromDB = async () => {
    const data = await fetchTasks();
    data.status === "success" && setTaskList(data.result);
  };

  ////post task
  const addTask = async (task) => {
    const result = await postTask(task);

    result.status === "success" && getTaskFromDB();
  };

  ///update/switchzå
  const switchTask = async (_id, type) => {
    const result = await updateData({ _id, type });
    result.status === "success" && getTaskFromDB();
  };

  const handleOnCheck = (e) => {
    const { checked, value } = e.target;
    // console.log(checked, value);

    if (value === "entry" || value === "bad") {
      let toDeleteIds = [];

      ///multiple selections
      taskList.forEach((item) => {
        //to select multiple same typed task? if "entry" then all the entry typed task's ids are collected
        if (item.type === value) {
          toDeleteIds.push(item._id);
        }
      });
      ////////////////////////////////////////////////////////////////
      if (checked) {
        setIds([...ids, ...toDeleteIds]);
      } else {
        const tempArgs = ids.filter((id) => !toDeleteIds.includes(id));
        setIds(tempArgs);
      }
      return;
    }
    ///individual selecions
    if (checked) {
      setIds([...ids, value]);
    } else {
      const removeIds = ids.filter((item) => item !== value);

      // console.log(removeIds);
      setIds(removeIds);
    }
  };
  // console.log(ids);

  const handleOnDelete = async () => {
    const result = await deleteData(ids);

    if (result.status === "success") {
      console.log("deleted");
      getTaskFromDB();

      setIds([]);
    }
  };

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
          ids={ids}
        />

        <div>
          {ids.length > 0 && (
            <Button onClick={handleOnDelete} variant="info">
              Delete
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
}

export default App;
