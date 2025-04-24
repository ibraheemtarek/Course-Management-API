import { Router } from "express";
import CoursesRoute from "./CoursesRoute";
const router = Router();

router.use("/courses", CoursesRoute);

export default router;
