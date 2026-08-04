// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import StudentDetail from "./pages/StudentDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import {ProtectedRoute} from "./ProtectedRoute";
function App() {
return (
<BrowserRouter>
<AuthProvider>
<Toaster position="top-right" />
<NavBar />
<main className="main-content">
<Routes>
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route
path="/"
element={
<ProtectedRoute>
<Home />
</ProtectedRoute>
}
/>
<Route
path="/add"
element={
<ProtectedRoute>
<AddStudent />
</ProtectedRoute>
}
/>
<Route
path="/student/:id"
element={
<ProtectedRoute>
<StudentDetail />
</ProtectedRoute>
}
/>
</Routes>
</main>
</AuthProvider>
</BrowserRouter>
);
}
export default App;