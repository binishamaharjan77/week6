// // models/studentModel.js
// import { DataTypes } from "sequelize";
// import { sequelize } from "../config/database.js";
// const students = [
//   { id: 1, name: "ram", course: "CY" },
//   { id: 2, name: "John", course: "CS" },
// ];

// export const StudentModel = {
//   getAll: () => students,

//   getById: (id) => students.find((s) => s.id === id),

//   create: (data) => {
//     const student = { id: students.length + 1, ...data };
//     students.push(student);
//     return student;
//   },

//   update: (id, data) => {
//     const student = students.find((s) => s.id === id);
//     if (!student) return null;
//     student.name = data.name;
//     student.course = data.course;
//     return student;
//   },
// };

// models/studentModel.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Student = sequelize.define(
  "Student",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    course: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "students",
    timestamps: true,
  },
);