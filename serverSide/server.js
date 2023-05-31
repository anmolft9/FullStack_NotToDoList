import express from "express";
import helmet from "helmet";
import cors from "cors";
const app = express();

const PORT = 8000;

//middle wares
app.use(express.json());
app.use(helmet());
app.use(cors());

//Database connection
import { dbConnection } from "./src/config/dbConfig.js";
dbConnection();

//other end points
import taskRouter from "./src/routers/taskRouters.js";
app.use("/api/v1/task", taskRouter);

//root end point
app.use("/", (req, res) => {
  res.json({
    status: "success",
    message: "you have reached not to do api",
  });
});

app.use((error, req, res, next) => {
  console.log(error, "error");
  const status = error.status || 500;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
  // writing file system to log error
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Server is running on port http://localhost:${PORT}`);
});
