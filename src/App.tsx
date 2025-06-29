import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import DashboardPage from "./components/Dashboard/DashboardPage";
import { AuthProvider, useAuth } from "./context/AuthContext"; // adjust path as needed

const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({
	element,
}) => {
	const { isLoggedIn } = useAuth();
	return isLoggedIn ? element : <Navigate to='/login' replace />;
};

const App: React.FC = () => {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path='/' element={<Navigate to='/login' replace />} />
					<Route path='/login' element={<LoginPage />} />
					<Route
						path='/dashboard'
						element={<ProtectedRoute element={<DashboardPage />} />}
					/>
				</Routes>
			</Router>
		</AuthProvider>
	);
};

export default App;
