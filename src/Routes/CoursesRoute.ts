import { Router } from "express";
import CoursesController from "../Controller/CoursesController";
const router = Router();

router.get("/", CoursesController.getAllCourses);
router.get("/:id", CoursesController.getCourseById);
router.post("/", CoursesController.createCourse);
router.put("/:id", CoursesController.updateCourse);
router.delete("/:id", CoursesController.deleteCourse);

export default router;
