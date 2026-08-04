// src/components/StudentItem/StudentItem.jsx
import { Link } from "react-router-dom";

function StudentItem({ student }) {
  return (
    <li className="student-item">
      <Link to={`/student/${student.id}`} className="student-name">
        {student.name}
      </Link>
      <span className="course-badge">{student.course}</span>
    </li>
  );
}

export default StudentItem;