import { Request, Response } from "express";
import Course, { ICourse } from "../models/Course";

class CoursesController {
  static createCourse = async (req: Request, res: Response): Promise<any> => {
    try {
      const newCourse: ICourse = new Course(req.body);
      const savedCourse = await newCourse.save();
      res.status(201).json(savedCourse);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  };

  static getAllCourses = async (req: Request, res: Response): Promise<void> => {
    try {
      const courses = await Course.find();
      res.status(200).json(courses);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  };

  static getCourseById = async (req: Request, res: Response): Promise<void> => {
    try {
      const course = await Course.findById(req.params.id);
      if (!course) {
        res.status(404).json({ message: "Course not found" });
        return;
      }
      res.status(200).json(course);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  };

  static updateCourse = async (req: Request, res: Response): Promise<void> => {
    try {
      const updatedCourse = await Course.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!updatedCourse) {
        res.status(404).json({ message: "Course not found" });
        return;
      }
      res.status(200).json(updatedCourse);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  };

  static deleteCourse = async (req: Request, res: Response): Promise<void> => {
    try {
      const deletedCourse = await Course.findByIdAndDelete(req.params.id);
      if (!deletedCourse) {
        res.status(404).json({ message: "Course not found" });
        return;
      }
      res.status(200).json({ message: "Course deleted successfully" });
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  };
}

export default CoursesController;
