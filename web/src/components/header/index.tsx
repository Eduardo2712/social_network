import {
    faBell,
    faGear,
    faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useAuth } from "../../context/auth";
import Container from "./style";

const Header = () => {
    const { logout, user } = useAuth();
    const [search, setSearch] = useState("");

    return (
        <Container>
            <div className="header">
                <div>
                    <input
                        type={"text"}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search..."
                        className="input_search"
                    ></input>
                    <button type="button" className="button_search">
                        Search
                    </button>
                </div>

                <div className="header_options">
                    {user && (
                        <p className="text_header">{`Hello, ${
                            user.use_name.split(" ")[0]
                        }`}</p>
                    )}

                    <FontAwesomeIcon
                        className="icon_header"
                        title="Notifications"
                        icon={faBell}
                    />

                    <FontAwesomeIcon
                        className="icon_header"
                        title="Options"
                        icon={faGear}
                    />

                    <FontAwesomeIcon
                        className="icon_header"
                        title="Logout"
                        icon={faRightFromBracket}
                        onClick={logout}
                    />
                </div>
            </div>
        </Container>
    );
};

export default Header;
