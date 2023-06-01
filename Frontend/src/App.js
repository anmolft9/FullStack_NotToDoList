import "./App.css";
import { Button, Container } from "react-bootstrap";
import { FormComponent } from "./components/FormComponent.js";
import { List } from "./components/List";
import { useEffect, useState } from "react";
import { fetchTasks, postTask, updateData } from "./helpers/axiosHelper.js";

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
      taskList.forEach((item) => {
        if (item.type === value) {
          toDeleteIds.push(item.id);
        }
      });
      if (checked) {
        // const entryIds = taskList.filter((item) => {
        //   if (item.type === "entry") {
        //     return item.id;
        //   }
        // });
        // setIds([...ids, ...entryIds]);
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

      // console.log(removeIds);
      setIds(removeIds);
    }
  };
  // console.log(ids);

  const handleOnDelete = () => {
    const afterDelete = taskList.filter((item) => !ids.includes(item.id));
    console.log(afterDelete);
    setTaskList(afterDelete);
    setIds([]);
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
