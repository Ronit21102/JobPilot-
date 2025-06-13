import mongoose, { Document } from "mongoose";

export interface IJob extends Document {
  title: string;
  company: string;
  location: string;
  description: string;
  link: string;
  platform: string;
  matchScore?: number;
  status?: "pending" | "applied" | "skipped" | "failed";
  createdAt?: Date;
  updatedAt?: Date;
}

const jobSchema = new mongoose.Schema<IJob>(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    platform: { type: String, required: true },
    matchScore: { type: Number },
    status: { type: String, default: "pending" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },    
  { timestamps: true }
);

const Job = mongoose.model<IJob>("Job", jobSchema);
export default Job;