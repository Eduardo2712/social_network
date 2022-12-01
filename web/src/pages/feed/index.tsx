import { useAuth } from "../../context/auth";
import Container from "./style";
import { useState, useEffect } from "react";

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
                <div className="block_user">
                    <div className="block_color_user"></div>
                </div>
            </div>
        </Container>
    );
};

export default Feed;
