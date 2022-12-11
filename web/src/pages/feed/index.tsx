import { useAuth } from "../../context/auth";
import Container from "./style";
import { useState, useEffect } from "react";
import ProfileFollow from "../../components/profile-follow";

const Feed = () => {
    const { user } = useAuth();

    const [status, setStatus] = useState<string>("");

    useEffect(() => {
        setStatus(user?.use_text_status ?? "");
    }, [user?.use_text_status]);

    return (
        <Container>
            <div className="block_feed">
                <div className="block">
                    <ProfileFollow />
                </div>

                <div className="block">
                    <div className="block_status">
                        <p className="text_status">My status now...</p>

                        <textarea
                            className="text_area_status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        ></textarea>

                        <div className="block_button">
                            <button type="button" className="button_status">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Feed;
