import TaskSchema from "./TaskSchema.js";

export const insertTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};
export const getTask = () => {
  return TaskSchema.find();
};
export const getSingleTask = (_id) => {
  return TaskSchema.findById(_id);
};
export const deleteTask = (_id) => {
  return TaskSchema.findByIdAndDelete(_id);
};
export const updateTask = (_id, type) => {
  return TaskSchema.findByIdAndUpdate(_id, { type }, { new: true });
};
