import { Formik } from "formik";
import { ErrorMessage, Field, Form } from "formik";
import { NextPage } from "next";
import Container from "./style";
import * as Yup from "yup";
import Link from "next/link";

const Login: NextPage = () => {
    const schema = Yup.object().shape({
        email: Yup.string()
            .email("Fill in a valid e-mail!")
            .required("Fill in this field!"),
        password: Yup.string().required("Fill in this field!")
    });

    const onSubmit = async () => {
        return null;
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
                    {({ handleChange }) => (
                        <Form method="post">
                            <div className="block_form">
                                <div className="block_input_form">
                                    <span className="text_form">E-mail</span>

                                    <Field
                                        className="input_form"
                                        id="email"
                                        name="email"
                                        onChange={handleChange}
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
                                    ></Field>

                                    <p className="text_error">
                                        <ErrorMessage name="password" />
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
