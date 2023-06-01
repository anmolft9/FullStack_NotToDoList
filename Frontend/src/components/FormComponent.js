import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
// import { v4 as uuidv4 } from "uuid";

const initialState = {
  task: "",
  hours: "",
  type: "entry",
};

export const FormComponent = ({ addTask }) => {
  const [form, setForm] = useState(initialState);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    addTask({ ...form });
  };

  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <div className="inputForm mt-5">
          <Row>
            <Col>
              <Form.Control
                size="lg"
                type="text"
                name="task"
                placeholder="Task"
                onChange={handleOnChange}
              />
            </Col>
            <Col>
              <Row>
                <Col>
                  <Form.Control
                    size="lg"
                    type="number"
                    name="hours"
                    placeholder="hours"
                    onChange={handleOnChange}
                  />
                </Col>
                <Col>
                  <Button size="lg" variant="success" type="submit">
                    Add
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Form>
    </>
  );
};
