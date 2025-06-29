import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const DashboardPage: React.FC = () => {
	const { logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate("/");
	};

	return (
		<div>
			<h2>Dashboard</h2>
			<p>Welcome to your dashboard!</p>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};

export default DashboardPage;
