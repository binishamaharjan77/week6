// // src/pages/StudentDetail.jsx
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import toast from "react-hot-toast";
// import { getStudentById } from "../services/studentService";

// function StudentDetail() {
//   const { id } = useParams();
//   const [student, setStudent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadStudent = async () => {
//       setLoading(true);
//       try {
//         const found = await getStudentById(id);
//         setStudent(found);
//       } catch (err) {
//         toast.error("Could not load student details");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadStudent();
//   }, [id]);

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   if (!student) {
//     return <h2>Student not found</h2>;
//   }

//   return (
//     <div className="page">
//       <h2>{student.name}</h2>
//       <p>Course: {student.course}</p>
//     </div>
//   );
// }

// export default StudentDetail;


import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext"; // NEW
import { getStudentById } from "../services/studentService";
function StudentDetail() {
const { id } = useParams();
const { token } = useAuth(); // NEW
const [student, setStudent] = useState(null);
const [loading, setLoading] = useState(true);
useEffect(() => {
const loadStudent = async () => {
setLoading(true);
try {
const found = await getStudentById(id, token); // token added
setStudent(found);
} catch (err) {
toast.error("Could not load student details");
} finally {
setLoading(false);
}
};
loadStudent();
}, [id, token]); // token added to dependency array
if (loading) {
return <h2>Loading...</h2>;
}
if (!student) {
return <h2>Student not found</h2>;
}
return (
<div className="page">
<h2>{student.name}</h2>
<p>Course: {student.course}</p>
</div>
);
}
export default StudentDetail;
