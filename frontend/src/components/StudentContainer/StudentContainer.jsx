// // src/components/StudentContainer/StudentContainer.jsx
// import { useState, useEffect } from "react";
// import toast from "react-hot-toast";
// import { getStudents } from "../../services/studentService";
// import StudentItem from "../StudentItem/StudentItem";

// function StudentContainer({ containerTitle }) {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadStudents = async () => {
//       setLoading(true);
//       try {
//         const data = await getStudents();
//         setStudents(data);
//       } catch (err) {
//         toast.error("Could not load students");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadStudents();
//   }, []);

//   if (loading) {
//     return <p className="status-text">Loading students...</p>;
//   }

//   return (
//     <div className="page">
//       <h2>{containerTitle}</h2>
//       <ul className="student-list">
//         {students.map((student) => (
//           <StudentItem key={student.id} student={student} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default StudentContainer;

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext"; // NEW
import { getStudents } from "../../services/studentService";
import StudentItem from "../StudentItem/StudentItem";
function StudentContainer({ containerTitle }) {
const { token } = useAuth(); // NEW
const [students, setStudents] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
const loadStudents = async () => {
setLoading(true);
try {
const data = await getStudents(token); // token added
setStudents(data);
} catch (err) {
toast.error("Could not load students");
} finally {
setLoading(false);
}
};
loadStudents();
}, [token]); // token added to dependency array
if (loading) {
return <p className="status-text">Loading students...</p>;
}
return (
<div className="page">
<h2>{containerTitle}</h2>
<ul className="student-list">
{students.map((student) => (
<StudentItem key={student.id} student={student} />
))}
</ul>
</div>
);
}
export default StudentContainer;