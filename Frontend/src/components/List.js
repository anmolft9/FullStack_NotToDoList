import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { TaskList } from "./TaskList";

export const List = ({ taskList, switchTask }) => {
  const entryList = taskList.filter(({ type }) => type === "entry");
  const badList = taskList.filter(({ type }) => type === "bad");
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
            />
          </Col>
          <Col>
            <TaskList name="bad" title="badList" list={badList} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};
