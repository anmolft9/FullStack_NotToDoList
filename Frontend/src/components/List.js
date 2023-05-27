import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { TaskList } from "./TaskList";

export const List = ({ taskList }) => {
  return (
    <Container>
      <div classname="List mt-5">
        <Row>
          <Col>
            <TaskList name="entry" title="entryList" taskList={taskList} />
          </Col>
          <Col>
            <TaskList name="bad" title="entryList" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};
