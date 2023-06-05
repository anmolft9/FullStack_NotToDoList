import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { TaskList } from "./TaskList";

export const List = ({ taskList, switchTask, handleOnCheck, ids, total }) => {
  const entryList = taskList.filter(({ type }) => type === "entry");
  const badList = taskList.filter(({ type }) => type === "bad");

  const totalBadHours = badList.reduce((acc, item) => acc + +item.hours, 0);
  // console.log(entryList, badList);
  return (
    <Container>
      <div classname="List mt-5">
        <Row>
          <Col>
            <TaskList
              name="entry"
              title="entryList"
              list={entryList}
              arrow="right"
              switchTask={switchTask}
              handleOnCheck={handleOnCheck}
              ids={ids}
            />
          </Col>
          <Col>
            <TaskList
              name="bad"
              title="badList"
              list={badList}
              switchTask={switchTask}
              handleOnCheck={handleOnCheck}
              ids={ids}
            />
            <div>You could have saved : {totalBadHours} hours</div>
          </Col>
          <div className="mt-5 text-end">Total time:{total} hrs</div>
        </Row>
      </div>
    </Container>
  );
};
