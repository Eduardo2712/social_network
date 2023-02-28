import axios from "axios";
import { Address, User } from "../types";

export const updateStatus = (props: { status: string }) => {
    return axios.post(`${process.env.NEXT_PUBLIC_URL_API}/user/update`, props, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
};

export const createUser = ({
    ...props
}: Omit<User, "photo" | "post" | "created_at" | "updated_at"> &
    Omit<Address, "created_at" | "updated_at">) => {
    return axios.post(`${process.env.NEXT_PUBLIC_URL_API}/user`, props, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
};
