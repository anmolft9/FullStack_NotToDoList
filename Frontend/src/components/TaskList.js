import React from "react";
import { Table } from "react-bootstrap";

export const TaskList = ({ taskList }) => {
  return (
    <div className="mt-5">
      <h5 className="m-4 text-center">Entry List</h5>
      <Table>
        <thead>
          <tr>
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
                  <td>{item.task}</td>
                  <td>{item.hours}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};
