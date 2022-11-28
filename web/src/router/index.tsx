import { Router } from "next/router";
import { useAuth } from "../context/auth";

export type Props = {
    router: Router;
    children: any;
};

const ProtectedRoute = (props: Props) => {
    const PUBLIC_ROUTES = ["/login"];
    const { auth } = useAuth();

    if (
        !auth &&
        !PUBLIC_ROUTES.includes(props.router.pathname) &&
        !localStorage.getItem("user")
    ) {
        props.router.push("/login");
        return null;
    }

    if (
        auth &&
        props.router.pathname === "/login" &&
        localStorage.getItem("user")
    ) {
        props.router.push("/feed");
        return null;
    }

    return props.children;
};

export default ProtectedRoute;
