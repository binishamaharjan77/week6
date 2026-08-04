// // src/components/Form/Form.jsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { createStudent } from "../../services/studentService";

// function Form() {
//   const [name, setName] = useState("");
//   const [course, setCourse] = useState("");
//   const [submitting, setSubmitting] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     try {
//       await createStudent({ name, course });
//       toast.success("Student saved successfully");
//       navigate("/");
//     } catch (err) {
//       toast.error("Could not save student");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="page">
//       <div className="form-card">
//         <h2>Add Student</h2>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name</label>
//           <input id="name" value={name} onChange={(e) => setName(e.target.value)} required />

//           <label htmlFor="course">Course</label>
//           <input id="course" value={course} onChange={(e) => setCourse(e.target.value)} required />

//           <div className="form-actions">
//             <button type="submit" className="btn btn-primary" disabled={submitting}>
//               {submitting ? "Saving..." : "Save Student"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Form;


// src/components/Form/Form.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext"; // NEW
import { createStudent } from "../../services/studentService";
function Form() {
const { token } = useAuth(); // NEW
const [name, setName] = useState("");
const [course, setCourse] = useState("");
const [submitting, setSubmitting] = useState(false);
const navigate = useNavigate();
const handleSubmit = async (e) => {
e.preventDefault();
setSubmitting(true);
try {
await createStudent({ name, course }, token); // token added
toast.success("Student saved successfully");
navigate("/");
} catch (err) {
toast.error("Could not save student");
} finally {
setSubmitting(false);
}
};
return (
<div className="page">
<div className="form-card">
<h2>Add Student</h2>
<form onSubmit={handleSubmit}>
<label htmlFor="name">Name</label>
<input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
<label htmlFor="course">Course</label>
<input id="course" value={course} onChange={(e) => setCourse(e.target.value)} required />
<div className="form-actions">
<button type="submit" className="btn btn-primary" disabled={submitting}>
{submitting ? "Saving..." : "Save Student"}
</button>
</div>
</form>
</div>
</div>
);
}
export default Form;