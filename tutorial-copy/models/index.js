import { Student } from "./studentModel.js";
import { User } from "./userModel.js";

User.hasMany(Student, { foreignKey: "userId" });
Student.belongsTo(User, { foreignKey: "userId" });

export { Student, User };
