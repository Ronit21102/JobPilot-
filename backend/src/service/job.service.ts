import Job from "../models/job.model";

export const createJob = async (jobData: any) => {
  try {
    const job = await Job.create(jobData); 
    return job;
 } catch (error) {
    console.error("Error creating job:", error);
    throw new Error(
      error instanceof Error ? error.message : "Internal Server Error"
    );
  }
}

export const getAllJobsService = async () => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    return jobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw new Error(
      error instanceof Error ? error.message : "Internal Server Error"
    );
  }
}