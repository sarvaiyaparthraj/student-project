
import HttpError from "../middleware/HttpError.js";
import Student from "../model/student_model.js";

// Add Student
const add = async (req, res, next) => {
  try {
    const {
      name,
      grId,
      email,
      course,
      isActive,
      mobileNumber,
    } = req.body;

    const newStudent = new Student({
      name,
      grId,
      email,
      course,
      isActive,
      mobileNumber,
    });

    await newStudent.save();

    res.status(201).json({
      success: true,
      message: "Student data added successfully",
      newStudent,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

// Get All Students
const studentGetData = async (req, res, next) => {
  try {
    const students = await Student.find({});

    if (students.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No student data found",
        students: [],
      });
    }

    res.status(200).json({
      success: true,
      total: students.length,
      message: "Student data fetched successfully",
      students,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

// Get Student By ID
const studentDataById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const student = await Student.findById(id);

    if (!student) {
      return next(
        new HttpError("Student not found with this ID", 404)
      );
    }

    res.status(200).json({
      success: true,
      message: "Student found",
      student,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

// Update Student By ID
const updateStudentById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const student = await Student.findById(id);

    if (!student) {
      return next(
        new HttpError("Student not found with this ID", 404)
      );
    }

    const updates = Object.keys(req.body);

    const allowedFields = [
      "name",
      "email",
      "mobileNumber",
      "course",
      "isActive",
      "grId",
    ];

    const isValidUpdate = updates.every((field) =>
      allowedFields.includes(field)
    );

    if (!isValidUpdate || updates.length === 0) {
      return next(
        new HttpError("Invalid fields for update", 400)
      );
    }

    updates.forEach((field) => {
      student[field] = req.body[field];
    });

    await student.save();

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      student,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

// Delete Student By ID
const deleteStudentById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      return next(
        new HttpError("Student not found with this ID", 404)
      );
    }

    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

// Delete All Students
const deleteAllData = async (req, res, next) => {
  try {
    const deletedData = await Student.deleteMany({});

    res.status(200).json({
      success: true,
      message: "All student data deleted successfully",
      deletedCount: deletedData.deletedCount,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

export default {
  add,
  studentGetData,
  studentDataById,
  updateStudentById,
  deleteStudentById,
  deleteAllData,
};
