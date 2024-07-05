import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export function PublicRoute() {
    const { tokenLoggedUser } = useAppContext();

    if (tokenLoggedUser)
        return <Navigate to="/" replace />;

    return <Outlet />;
}