import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Index: NextPage = () => {
    const router = useRouter();

    useEffect(() => {
        router.push("/login");
    }, [router]);

    return <></>;
};

export default Index;
