import { Formik } from "formik";
import Container from "./styles";
import * as Yup from "yup";
import FormInput from "../../components/form-input";

const Register = () => {
    type Form = {
        email: string;
        password: string;
        password_confirmation: string;
    };

    const initialValues = {
        email: "",
        password: "",
        password_confirmation: ""
    };

    const schema = Yup.object().shape({
        email: Yup.string()
            .email("Preencha com um e-mail válido")
            .required("Preencha esse campo!"),
        password: Yup.string()
            .min(8, "Senha deve conter no mínimo 8 caracteres")
            .required("Preencha esse campo!"),
        password_confirmation: Yup.string()
            .min(8, "Senha deve conter no mínimo 8 caracteres")
            .oneOf([Yup.ref("password"), null], "As senhas devem ser iguais")
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
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </Container>
    );
};

export default Register;
