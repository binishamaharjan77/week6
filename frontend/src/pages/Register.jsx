// src/pages/Register.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function Register() {
const { register } = useAuth();
const navigate = useNavigate();

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);
async function handleSubmit(e) {
e.preventDefault();
setError(null);
try {
await register({ firstName, lastName, username, password });
navigate("/");
} catch (err) {
setError(err.message);
}
}
return (
<div className="page">
<div className="form-card">
<h2>Register</h2>
{error && <div className="error-box">{error}</div>}
<form onSubmit={handleSubmit}>
<label htmlFor="firstName">First Name</label>
<input
id="firstName"
value={firstName}
onChange={(e) => setFirstName(e.target.value)}
required
/>
<label htmlFor="lastName">Last Name</label>
<input
id="lastName"
value={lastName}
onChange={(e) => setLastName(e.target.value)}
required
/>
<label htmlFor="username">Username</label>
<input
id="username"
value={username}
onChange={(e) => setUsername(e.target.value)}
required
/>
<label htmlFor="password">Password</label>
<input
id="password"
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
/>
<div className="form-actions">
<button type="submit" className="btn btn-primary">
Register
</button>
</div>
</form>
<p style={{ marginTop: "14px" }}>
Already have an account? <Link to="/login">Log In</Link>
</p>
</div>
</div>
);
}