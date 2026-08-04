import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // NEW
function NavBar() {
const { user, logout } = useAuth(); // NEW
const navigate = useNavigate(); // NEW
async function handleLogout() {
await logout();
navigate("/login");
}
return (
<nav className="navbar">
<div className="navbar-brand">Course Management System</div>
<div className="navbar-links">
<NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
Students
</NavLink>
<NavLink to="/add" className={({ isActive }) => (isActive ? "active" : "")}>
Add Student
</NavLink>
{user && (
<>
<span style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
Welcome, {user.fullName}
</span>
<button onClick={handleLogout} className="btn btn-secondary">
Log Out
</button>
</>
)}
</div>
</nav>
);
}
export default NavBar;