import { useAuth } from "../../context/auth";
import Container from "./style";
import { useState, useEffect } from "react";
import Image from "next/image";

const Feed = () => {
    const { user } = useAuth();

    const [status, setStatus] = useState<string>("");

    useEffect(() => {
        if (user) {
            setStatus(user.use_text_status ?? "");
        }
    }, [user]);

    return (
        <Container>
            <div className="block_feed">
                <div className="block_image_user">
                    <Image
                        src={user?.files.fil_path || ""}
                        className="user_image"
                        width={120}
                        height={120}
                        alt="User photo"
                    />

                    <p className="text_name">{user?.use_name}</p>
                </div>
            </div>
        </Container>
    );
};

export default Feed;
