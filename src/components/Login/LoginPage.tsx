import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const { login } = useAuth();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (username === "sam" && password === "sam") {
			login();
			navigate("/dashboard");
		} else {
			alert("Invalid credentials");
		}
	};

	return (
		<div className='login-container'>
			<div className='login-card'>
				<h2>Login</h2>
				<form onSubmit={handleSubmit}>
					<div className='login-form-group'>
						<label>Username:</label>
						<input
							type='text'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className='login-form-group'>
						<label>Password:</label>
						<input
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button type='submit' className='login-button'>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
