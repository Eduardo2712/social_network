import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../../context/auth";
import Container from "./style";

const ProfileFollow = () => {
    const { user } = useAuth();

    return (
        <Container>
            <div className="block_image_user">
                <Image
                    src={user?.photo?.fil_path ?? ""}
                    className="user_image"
                    width={120}
                    height={120}
                    alt="User photo"
                />

                <p className="text_name">{user?.use_name}</p>

                <div className="block_follow">
                    <p className="text_follow">Followers</p>

                    <p className="text_follow">{0}</p>
                </div>

                <div className="block_follow">
                    <p className="text_follow">Following</p>

                    <p className="text_follow">{0}</p>
                </div>

                <div className="block_follow">
                    <Link href={"/profile"}>My profile</Link>
                </div>
            </div>
        </Container>
    );
};

export default ProfileFollow;
