import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function Login() {
const { login } = useAuth();
const navigate = useNavigate();
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);
async function handleSubmit(e) {
e.preventDefault();
setError(null);
try {
await login({ username, password });
navigate("/");
} catch (err) {
setError(err.message);
}
}
return (
<div className="page">
<div className="form-card">
<h2>Log In</h2>
{error && <div className="error-box">{error}</div>}
<form onSubmit={handleSubmit}>
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
Log In
</button>
</div>
</form>
<p style={{ marginTop: "14px" }}>
No account? <Link to="/register">Register</Link>
</p>
</div>
</div>
);
}