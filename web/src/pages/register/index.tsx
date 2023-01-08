import { Formik } from "formik";
import Container from "./styles";
import * as Yup from "yup";

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
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password && errors.password}
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
