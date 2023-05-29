import React from "react";
import { Button, Form, Table } from "react-bootstrap";

export const TaskList = ({ taskList }) => {
  return (
    <div className="mt-5">
      <h5 className="m-4 text-center">Entry List</h5>
      <Table>
        <thead>
          <tr>
            <th>
              <Form.Check type="checkbox" label="" />
            </th>
            <th>Task</th>
            <th>Hours</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {taskList &&
            taskList.map((item, i) => {
              return (
                <tr>
                  <td>
                    <Form.Check type="checkbox" label="" />
                  </td>
                  <td>{item.task}</td>
                  <td>{item.hours}</td>
                  <td>
                    <Button variant="success">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};
