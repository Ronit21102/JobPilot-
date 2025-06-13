import express from "express";
import cors from "cors";
import jobRoutes from "./routes/job.routes";

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to the Job API");
});
app.use("/api/jobs", jobRoutes);

export default app;
