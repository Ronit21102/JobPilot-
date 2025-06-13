import { Request, Response } from "express";
import { createJob ,getAllJobsService} from "../service/job.service";

export const saveJob = async (req: Request, res: Response) => {
  try {
    const job = createJob(req.body);
    res.status(201).json({ job });
  } catch (error) {
    console.error("Error saving job:", error);
    res
      .status(500)
      .json({
        message:
          error instanceof Error ? error.message : "Internal Server Error",
      });
  }
};

export const getAllJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await getAllJobsService();
    res.status(200).json({ jobs });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res
      .status(500)
      .json({
        message:
          error instanceof Error ? error.message : "Internal Server Error",
      });
  }
}