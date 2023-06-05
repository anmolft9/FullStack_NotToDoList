import React from "react";
import { Button, Form, Table } from "react-bootstrap";

export const TaskList = ({
  list = [],
  arrow,
  switchTask,
  name,
  handleOnCheck,
  ids,
}) => {
  return (
    <div className="mt-5">
      <h5 className="m-4 text-center">Entry List</h5>
      <Table>
        <thead>
          <tr>
            <th>
              <Form.Check
                type="checkbox"
                label=""
                value={name}
                onChange={handleOnCheck}
              />
            </th>
            <th>Task</th>
            <th>Hours</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, i) => {
            return (
              <tr>
                <td>
                  <Form.Check
                    type="checkbox"
                    label=""
                    value={item._id}
                    checked={ids.includes(item._id)}
                    onChange={handleOnCheck}
                  />
                </td>
                <td>{item.task}</td>
                <td>{item.hours}</td>
                <td>
                  {arrow === "right" ? (
                    <Button
                      onClick={() => switchTask(item._id, "bad")}
                      variant="success"
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => switchTask(item._id, "entry")}
                      variant="danger"
                    >
                      <i className="fa-solid fa-arrow-left"></i>
                    </Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
