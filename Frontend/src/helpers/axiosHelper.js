import axios from "axios";

const apiEndPoint = "http://localhost:8000/api/v1/task";

export const fetchTasks = async () => {
  try {
    const response = await axios.get(apiEndPoint);
    console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
