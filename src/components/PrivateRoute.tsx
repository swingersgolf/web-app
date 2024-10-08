import { useAuth } from "@contexts/AuthContext";
import { ComponentType } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
	Component: ComponentType;
}

const PrivateRoute = ({ Component }: PrivateRouteProps) => {
	const { token } = useAuth();
	return token ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
