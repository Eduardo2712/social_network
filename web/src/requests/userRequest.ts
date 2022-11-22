import axios from "axios";
import { User } from "../types";

export const auth = (props: Pick<User, "use_email" | "use_password">) => {
    axios.post(`${process.env.NEXT_PUBLIC_URL_API}/auth`, props, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
};
