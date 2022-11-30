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
            <div className="block_status">
                <textarea
                    className="text_area_status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                ></textarea>
            </div>
        </Container>
    );
};

export default Feed;
