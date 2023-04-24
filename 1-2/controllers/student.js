const { student } = require("../models/student");
const { AppError } = require("../utils/types");

const addStudentController = async (req,res,next) => {
    throw new AppError ("bad request.", 400);
    const newStudent = await student.create(req.body);
    res.send(newStudent);
}
module.exports = { addStudentController }