import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export function PrivateRoute() {
    const { tokenLoggedUser } = useAppContext();

    if (!tokenLoggedUser)
        return <Navigate to="/login" replace />;

    return <Outlet />;
}