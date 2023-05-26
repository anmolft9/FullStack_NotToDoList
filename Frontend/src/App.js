import "./App.css";
import { Container } from "react-bootstrap";
import { FormComponent } from "./components/FormComponent.js";
import { List } from "./components/List";

function App() {
  const addTask = (task) => {
    console.log(task);
  };
  return (
    <div className="App">
      <Container>
        <div className="mt-5 text-center">
          <h1>Not To Do List</h1>
        </div>

        <FormComponent addTask={addTask} />
        <List />
      </Container>
    </div>
  );
}

export default App;
