import { Formik } from "formik";
import * as Yup from "yup";
import FormInput from "../../components/form-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { getCEP, maskCEP, maskPhone } from "../../utils/utils";
import { useState } from "react";
import { useRouter } from "next/router";
import ContainerBlock from "../../components/container-block";

const Register = () => {
    type Form = {
        email: string;
        password: string;
        password_confirmation: string;
        use_name: string;
        use_username: string;
        use_phone: string;
        use_date_birth: string;
        add_cep: string;
        add_street: string;
        add_number: string;
        add_district: string;
        add_complement: string;
        add_city: string;
        add_state: string;
    };

    const [step, setStep] = useState(0);

    const router = useRouter();

    const initialValues = {
        email: "",
        password: "",
        password_confirmation: "",
        use_name: "",
        use_username: "",
        use_phone: "",
        use_date_birth: "",
        add_cep: "",
        add_street: "",
        add_number: "",
        add_district: "",
        add_complement: "",
        add_city: "",
        add_state: ""
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
            .oneOf([Yup.ref("password"), null], "Passwords must be the same!")
            .required("Fill in this field!"),
        use_name: Yup.string().required("Fill in this field!"),
        use_username: Yup.string().required("Fill in this field!"),
        use_phone: Yup.string().required("Fill in this field!"),
        use_date_birth: Yup.date().required("Fill in this field!"),
        add_cep: Yup.string().required("Fill in this field!"),
        add_street: Yup.string().required("Fill in this field!"),
        add_number: Yup.string().required("Fill in this field!"),
        add_district: Yup.string().required("Fill in this field!"),
        add_complement: Yup.string(),
        add_city: Yup.string().required("Fill in this field!"),
        add_state: Yup.string().required("Fill in this field!")
    });

    const onSubmit = async (values: Form) => {
        if (step === 0) {
            return setStep((bef) => bef + 1);
        }
    };

    const searchCEP = async (
        cep: string,
        setFieldValue: (
            field: string,
            value: any,
            shouldValidate?: boolean | undefined
        ) => void
    ) => {
        const format_cep = cep.replaceAll("-", "");

        if (format_cep.length !== 8) {
            return;
        }

        try {
            const response = await getCEP(format_cep);

            if (response.data.erro) {
                console.log(response.data.erro);
            }
        } catch (e) {
            if (typeof e === "string") {
                console.error(e.toUpperCase());
            } else if (e instanceof Error) {
                console.error(e.message);
            }
        }
    };

    return (
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
                setFieldValue,
                isSubmitting
            }) => (
                <form onSubmit={handleSubmit}>
                    <ContainerBlock>
                        <p className="title">
                            {step === 0
                                ? "Personal information"
                                : "Address information"}
                        </p>

                        {step === 0 ? (
                            <>
                                <div className="block_form">
                                    <FormInput
                                        label="Name *"
                                        name="use_name"
                                        value={values.use_name}
                                        type={"text"}
                                        on_change={handleChange}
                                        on_blur={handleBlur}
                                        errors={errors.use_name}
                                        touched={touched.use_name}
                                    />

                                    <FormInput
                                        label="Username *"
                                        name="use_username"
                                        value={values.use_username}
                                        type={"text"}
                                        on_change={handleChange}
                                        on_blur={handleBlur}
                                        errors={errors.use_username}
                                        touched={touched.use_username}
                                    />
                                </div>

                                <div className="block_form">
                                    <FormInput
                                        label="Phone number *"
                                        name="use_phone"
                                        value={values.use_phone}
                                        type={"text"}
                                        on_change={(e) =>
                                            handleChange(maskPhone(e))
                                        }
                                        on_blur={(e) =>
                                            handleBlur(maskPhone(e))
                                        }
                                        errors={errors.use_phone}
                                        touched={touched.use_phone}
                                    />

                                    <FormInput
                                        label="E-mail *"
                                        name="email"
                                        value={values.email}
                                        type={"text"}
                                        on_change={handleChange}
                                        on_blur={handleBlur}
                                        errors={errors.email}
                                        touched={touched.email}
                                    />
                                </div>

                                <div className="block_form">
                                    <FormInput
                                        label="Password *"
                                        name="password"
                                        value={values.password}
                                        type={"password"}
                                        on_change={handleChange}
                                        on_blur={handleBlur}
                                        errors={errors.password}
                                        touched={touched.password}
                                    />

                                    <FormInput
                                        label="Password confirmation *"
                                        name="password_confirmation"
                                        value={values.password_confirmation}
                                        type={"password"}
                                        on_change={handleChange}
                                        on_blur={handleBlur}
                                        errors={errors.password_confirmation}
                                        touched={touched.password_confirmation}
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
                                        touched={touched.use_date_birth}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="block_form">
                                    <FormInput
                                        label="CEP *"
                                        name="add_cep"
                                        value={values.add_cep}
                                        type={"text"}
                                        on_change={(e) =>
                                            handleChange(maskCEP(e))
                                        }
                                        on_blur={(e) =>
                                            searchCEP(
                                                maskCEP(e).target.value,
                                                setFieldValue
                                            )
                                        }
                                        errors={errors.add_cep}
                                        touched={touched.add_cep}
                                    />

                                    <FormInput
                                        label="Street *"
                                        name="add_street"
                                        value={values.add_street}
                                        type={"text"}
                                        on_change={handleChange}
                                        on_blur={handleBlur}
                                        errors={errors.add_street}
                                        touched={touched.add_street}
                                    />
                                </div>

                                <div className="block_form">
                                    <FormInput
                                        label="Number *"
                                        name="add_number"
                                        value={values.add_number}
                                        type={"text"}
                                        on_change={handleChange}
                                        on_blur={handleBlur}
                                        errors={errors.add_number}
                                        touched={touched.add_number}
                                    />

                                    <FormInput
                                        label="Complement"
                                        name="add_complement"
                                        value={values.add_complement}
                                        type={"text"}
                                        on_change={handleChange}
                                        on_blur={handleBlur}
                                        errors={errors.add_complement}
                                        touched={touched.add_complement}
                                    />
                                </div>

                                <div className="block_form">
                                    <FormInput
                                        label="District *"
                                        name="add_district"
                                        value={values.add_district}
                                        type={"text"}
                                        on_change={handleChange}
                                        on_blur={handleBlur}
                                        errors={errors.add_district}
                                        touched={touched.add_district}
                                    />

                                    <FormInput
                                        label="City *"
                                        name="add_city"
                                        value={values.add_city}
                                        type={"text"}
                                        on_change={handleChange}
                                        on_blur={handleBlur}
                                        errors={errors.add_city}
                                        touched={touched.add_city}
                                    />
                                </div>

                                <div className="block_form">
                                    <FormInput
                                        label="State *"
                                        name="add_state"
                                        value={values.add_state}
                                        type={"text"}
                                        on_change={handleChange}
                                        on_blur={handleBlur}
                                        errors={errors.add_state}
                                        touched={touched.add_state}
                                    />
                                </div>
                            </>
                        )}
                    </ContainerBlock>

                    <ContainerBlock>
                        <div className="block_buttons">
                            <button
                                type="button"
                                className="button_return"
                                onClick={() => {
                                    step === 0
                                        ? router.push("/login")
                                        : setStep((bef) => bef - 1);
                                }}
                            >
                                <FontAwesomeIcon
                                    title="Return"
                                    icon={faLeftLong}
                                />
                                Return
                            </button>

                            <button
                                className="button_submit"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {step === 0 ? "Next" : "Submit"}

                                <FontAwesomeIcon
                                    title="Submit"
                                    icon={faRightLong}
                                />
                            </button>
                        </div>
                    </ContainerBlock>
                </form>
            )}
        </Formik>
    );
};

export default Register;
