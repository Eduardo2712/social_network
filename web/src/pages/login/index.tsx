import { Formik } from "formik";
import { ErrorMessage, Field, Form } from "formik";
import { NextPage } from "next";
import Container from "./style";
import * as Yup from "yup";
import Link from "next/link";
import { auth } from "../../requests/userRequest";
import { User } from "../../types";
import { useRouter } from "next/router";

const Login: NextPage = () => {
    const router = useRouter();

    const schema = Yup.object().shape({
        use_email: Yup.string()
            .email("Fill in a valid e-mail!")
            .required("Fill in this field!"),
        use_password: Yup.string()
            .min(6, "Password must be at least 6 characters long!")
            .required("Fill in this field!")
    });

    const onSubmit = async (
        values: Pick<User, "use_email" | "use_password">
    ) => {
        try {
            const response = await auth(values);

            if (response.data.user && response.data.token) {
                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        ...response.data.user,
                        token: response.data.token
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
                        use_email: "",
                        use_password: ""
                    }}
                >
                    {({ handleChange, handleSubmit }) => (
                        <Form method="post">
                            <div className="block_form">
                                <div className="block_input_form">
                                    <span className="text_form">E-mail</span>

                                    <Field
                                        className="input_form"
                                        id="use_email"
                                        name="use_email"
                                        onChange={handleChange}
                                        onKeyUp={(e: any) =>
                                            e.key === "Enter" && handleSubmit
                                        }
                                    ></Field>

                                    <p className="text_error">
                                        <ErrorMessage name="use_email" />
                                    </p>
                                </div>

                                <div className="block_input_form">
                                    <span className="text_form">Password</span>

                                    <Field
                                        className="input_form"
                                        id="use_password"
                                        name="use_password"
                                        type="password"
                                        onChange={handleChange}
                                        onKeyUp={(e: any) =>
                                            e.key === "Enter" && handleSubmit
                                        }
                                    ></Field>

                                    <p className="text_error">
                                        <ErrorMessage name="use_password" />
                                    </p>
                                </div>

                                <div className="text_register">
                                    <Link href={"/"}>
                                        {
                                            "Don't have an account? Sign up is free"
                                        }
                                    </Link>
                                </div>
                            </div>

                            <div className="block_buttons">
                                <button className="button_enter" type="submit">
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
