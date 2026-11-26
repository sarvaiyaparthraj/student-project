
import express from "express";

import studentController from "../controller/student.controller.js";

const Router = express.Router();

Router.post("/add", studentController.add);

Router.get("/studentData", studentController.studentGetData);

Router.delete("/allDelete", studentController.deleteAllData);

Router.get("/:id", studentController.studentDataById);

Router.delete("/:id", studentController.deleteStudentById);

Router.put("/:id", studentController.updateStudentById);

export default Router;
