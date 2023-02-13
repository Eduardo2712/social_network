import { Formik } from "formik";
import Container from "./styles";
import * as Yup from "yup";
import FormInput from "../../components/form-input";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { maskPhone } from "../../utils/utils";

const Register = () => {
    type Form = {
        email: string;
        password: string;
        password_confirmation: string;
        use_name: string;
        use_phone: string;
        use_date_birth: string;
    };

    const initialValues = {
        email: "",
        password: "",
        password_confirmation: "",
        use_name: "",
        use_phone: "",
        use_date_birth: ""
    };

    const schema = Yup.object().shape({
        email: Yup.string()
            .email("Fill in with a valid e-mail!")
            .required("Fill in this field!"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters long!")
            .required("Fill in this field!"),
        password_confirmation: Yup.string()
            .min(8, "Password must be at least 8 characters long!")
            .oneOf([Yup.ref("password"), null], "Passwords must be the same!"),
        use_name: Yup.string().required("Fill in this field!"),
        use_phone: Yup.string().required("Fill in this field!"),
        use_date_birth: Yup.date().required("Fill in this field!")
    });

    const onSubmit = async (values: Form) => {};

    return (
        <Container>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={onSubmit}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="block_form">
                            <FormInput
                                label="Name *"
                                name="use_name"
                                value={values.use_name}
                                type={"text"}
                                on_change={handleChange}
                                on_blur={handleBlur}
                                errors={errors.use_name}
                            />

                            <FormInput
                                label="Phone number *"
                                name="use_phone"
                                value={values.use_phone}
                                type={"text"}
                                on_change={(e) => handleChange(maskPhone(e))}
                                on_blur={(e) => handleBlur(maskPhone(e))}
                                errors={errors.use_phone}
                            />
                        </div>

                        <div className="block_form">
                            <FormInput
                                label="E-mail *"
                                name="email"
                                value={values.email}
                                type={"text"}
                                on_change={handleChange}
                                on_blur={handleBlur}
                                errors={errors.email}
                            />

                            <FormInput
                                label="Password *"
                                name="password"
                                value={values.password}
                                type={"password"}
                                on_change={handleChange}
                                on_blur={handleBlur}
                                errors={errors.password}
                            />
                        </div>

                        <div className="block_form">
                            <FormInput
                                label="Date of birth *"
                                name="use_date_birth"
                                value={values.use_date_birth}
                                type={"date"}
                                on_change={handleChange}
                                on_blur={handleBlur}
                                errors={errors.use_date_birth}
                            />
                        </div>

                        <div className="block_buttons">
                            <div className="button_return">
                                <FontAwesomeIcon
                                    title="Return"
                                    icon={faLeftLong}
                                />
                                <Link href={"/login"}>Return</Link>
                            </div>

                            <button
                                className="button_submit"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Submit
                                <FontAwesomeIcon
                                    title="Submit"
                                    icon={faRightLong}
                                />
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </Container>
    );
};

export default Register;
