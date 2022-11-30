import {
    faBell,
    faGear,
    faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../context/auth";
import Container from "./style";

const Header = () => {
    const { logout, user } = useAuth();

    return (
        <Container>
            <div className="header">
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
                    onClick={() => logout()}
                />
            </div>
        </Container>
    );
};

export default Header;
