import { Document, model, Schema, Model } from "mongoose";

export interface ICourse extends Document {
  title: string;
  description: string;
  image?: string;
  startDate?: Date;
  endDate?: Date;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

const CourseSchema = new Schema<ICourse>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    image: {
      type: String,
      default: "",
    },
    startDate: Date,
    endDate: Date,
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
  },
  {
    timestamps: true,
  }
);

const Course: Model<ICourse> = model<ICourse>("Course", CourseSchema);

export default Course;
