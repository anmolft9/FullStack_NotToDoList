import axios from "axios";

const apiEndPoint = "http://localhost:8000/api/v1/task";

export const fetchTasks = async () => {
  try {
    const { data } = await axios.get(apiEndPoint);
    // console.log(response);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

///post task
export const postTask = async (task) => {
  try {
    const { data } = await axios.post(apiEndPoint, task);
    // console.log(response);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

///patch task
export const updateData = async (obj) => {
  try {
    const { data } = await axios.patch(apiEndPoint, obj);
    // console.log(response);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
