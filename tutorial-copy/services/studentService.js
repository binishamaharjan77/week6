import { Student } from "../models/studentModel.js";
export const StudentService = {
  getAllStudents: (userId) => Student.findAll({ where: { userId } }),
  getStudentById: async (id, userId) => {
    const student = await Student.findByPk(id);
    if (!student || student.userId !== userId) return null;
    return student;
  },
  createStudent: (data, userId) =>
    Student.create({ name: data.name, course: data.course, userId }),
  updateStudent: async (id, data, userId) => {
    const student = await Student.findByPk(id);
    if (!student || student.userId !== userId) return null;
    if (data.name !== undefined) student.name = data.name;
    if (data.course !== undefined) student.course = data.course;
    await student.save();
    return student;
  },
  deleteStudent: async (id, userId) => {
    const student = await Student.findByPk(id);
    if (!student || student.userId !== userId) return null;
    await student.destroy();
    return student;
  },
};
