import { Formik } from "formik";
import { ErrorMessage, Field, Form } from "formik";
import { NextPage } from "next";
import Container from "./style";
import * as Yup from "yup";
import Link from "next/link";
import { auth } from "../../requests/userRequest";
import { User } from "../../types";
import { useRouter } from "next/router";
import { useState } from "react";

const Login: NextPage = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const router = useRouter();

    const schema = Yup.object().shape({
        email: Yup.string()
            .email("Fill in a valid e-mail!")
            .required("Fill in this field!"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters long!")
            .required("Fill in this field!")
    });

    const onSubmit = async (values: Pick<User, "email" | "password">) => {
        try {
            setLoading(true);

            const response = await auth(values);

            if (response.data.user && response.data.access_token) {
                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        ...response.data.user,
                        token: response.data.access_token
                    })
                );

                router.push("/feed");
            }
        } catch (error) {
            if (typeof error === "string") {
                console.error(error);
            } else if (error instanceof Error) {
                console.error(error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <div className="container_login">
                <p className="text_login">Login</p>

                <Formik
                    onSubmit={onSubmit}
                    validateOnMount
                    validationSchema={schema}
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                >
                    {({ handleChange, handleSubmit }) => (
                        <Form method="post">
                            <div className="block_form">
                                <div className="block_input_form">
                                    <span className="text_form">E-mail</span>

                                    <Field
                                        className="input_form"
                                        id="email"
                                        name="email"
                                        onChange={handleChange}
                                        onKeyUp={(e: any) =>
                                            e.key === "Enter" && handleSubmit
                                        }
                                    ></Field>

                                    <p className="text_error">
                                        <ErrorMessage name="email" />
                                    </p>
                                </div>

                                <div className="block_input_form">
                                    <span className="text_form">Password</span>

                                    <Field
                                        className="input_form"
                                        id="password"
                                        name="password"
                                        type="password"
                                        onChange={handleChange}
                                        onKeyUp={(e: { key: string }) =>
                                            e.key === "Enter" && handleSubmit
                                        }
                                    ></Field>

                                    <p className="text_error">
                                        <ErrorMessage name="password" />
                                    </p>
                                </div>

                                <div className="text_register">
                                    <Link href={"/register"}>
                                        {
                                            "Do not have an account? Sign up is free"
                                        }
                                    </Link>
                                </div>
                            </div>

                            <div className="block_buttons">
                                <button
                                    className="button_enter"
                                    type="submit"
                                    disabled={loading}
                                >
                                    Enter
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    );
};

export default Login;
