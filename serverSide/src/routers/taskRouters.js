import express from "express";

const router = express.Router();

import {
  insertTask,
  getTask,
  getSingleTask,
  deleteTask,
  updateTask,
} from "../model/TaskModel.js";

router.get("/:_id?", async (req, res, next) => {
  //   console.log("get");
  const { _id } = req.params;

  const result = _id ? await getSingleTask(_id) : await getTask();

  try {
    res.json({
      status: "success",
      message: "get route",
      result,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const insertData = await insertTask(req.body);

  try {
    res.json({
      status: "success",
      message: "post route",
      insertData,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.patch("/", async (req, res, next) => {
  try {
    const { _id, type } = req.body;
    // console.log(_id);
    const result = await updateTask(_id, type);
    res.json({
      status: "success",
      message: "patch route",
      result,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    const { _id } = req.body;
    console.log(_id);

    const result = _id ? await deleteTask(_id) : console.log("Id Not Found");

    res.json({
      status: "success",
      message: "delete route",
      result,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

export default router;
