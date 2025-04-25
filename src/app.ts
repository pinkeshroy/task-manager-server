import express from "express";
import dotenv from "dotenv";
import { logger } from "./middleware/logger.middleware";
import authRoutes from "./routes/auth.routes";
import taskRoutes from "./routes/task.routes";
import { errorHandler } from "./middleware/error.middleware";

dotenv.config();

const app = express();

app.use(express.json());
app.use(logger);

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Task Manager API is live!",
    endpoints: {
      auth: "/api/auth",
      jobs: "/api/task",
    },
    docs: "Refer to the README.md or API docs for more details.",
  });
});

app.use((_req, res) => res.status(404).json({ message: "Not found" }));

app.use(errorHandler);

export default app;
