import { StudentService } from "../services/studentService.js";
export async function getStudents(req, res) {
res.json(await StudentService.getAllStudents(req.userId));
}
export async function getStudentByID(req, res) {
const student = await StudentService.getStudentById(req.params.id, req.userId);
if (!student) return res.status(404).json({ message: "not found" });
res.json(student);
}
export async function createStudent(req, res) {
const student = await StudentService.createStudent(req.body, req.userId);
res.status(201).json(student);
}
export async function updateStudent(req, res) {
const updated = await StudentService.updateStudent(req.params.id, req.body, req.userId);
if (!updated) return res.status(404).json({ message: "not found" });
res.json(updated);
}
export async function deleteStudent(req, res) {
const deleted = await StudentService.deleteStudent(req.params.id, req.userId);
if (!deleted) return res.status(404).json({ message: "not found" });
res.status(200).json({ message: "Student deleted", student: deleted });
}
