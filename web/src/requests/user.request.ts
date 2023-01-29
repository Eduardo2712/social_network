import axios from "axios";

export const updateStatus = (props: { status: string }) => {
    return axios.post(`${process.env.NEXT_PUBLIC_URL_API}/user/update`, props, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
};
