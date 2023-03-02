import { useLocation } from "react-router-dom";

export const currentPath = () => {
	const location = useLocation();
	return location.pathname.split("/")[1];
}