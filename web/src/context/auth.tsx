import { createContext, useEffect, useState } from "react";
import { ContextLogin, User } from "../types";
import { RoutesProps } from "react-router";
import { useRouter } from "next/router";
import { auth } from "../requests/userRequest";

export const AuthContext = createContext<ContextLogin | null>(null);

export const AuthProvider = ({ children }: RoutesProps) => {
    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState<boolean>(true);

    const router = useRouter();

    useEffect(() => {
        const userRecovery = localStorage.getItem("user") || null;

        if (userRecovery) {
            setUser(JSON.parse(userRecovery));
            router.push("/feed");
        }

        setLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const data: Pick<User, "use_email" | "use_password"> = {
                use_email: email,
                use_password: password
            };

            const response = await auth(data);

            if (!response.data.error) {
                setUser(response.data.user);

                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.user)
                );
            }

            return response.data;
        } catch (error) {
            console.error(`Error ${error}`);
        }
    };

    const logout = () => {
        localStorage.removeItem("user");

        setUser(undefined);

        router.push("/");
    };

    return (
        <AuthContext.Provider
            value={{
                auth: Boolean(user),
                user,
                login,
                logout,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
