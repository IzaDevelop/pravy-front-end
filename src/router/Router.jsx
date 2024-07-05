import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { Loading } from "../components/Loading";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { useEffect } from "react";

import { Login } from "../pages/public/Login";
import { Home } from "../pages/private/Home";
import { About } from "../pages/private/About";
import { Contact } from "../pages/private/Contact";

export function Router() {
    const { loadingScreen } = useAppContext();

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            {!loadingScreen ?
                <Routes>
                    <Route path="*" element={<Navigate replace to="/" />} />

                    <Route element={<PublicRoute />}>
                        <Route path="/login" element={<Login />} />
                    </Route>

                    <Route element={<PrivateRoute />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Route>
                </Routes>
                :
                <Loading mode={true} />
            }
        </>
    )
}