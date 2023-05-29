import axios from "axios";

const apiEndPoint = "/api/v1/task";

export const fetchTasks = async () => {
  try {
    const response = await axios.get(apiEndPoint);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
