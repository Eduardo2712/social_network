import Container from "./style";

type Props = {
    label: string;
    name: string;
    value: string;
    on_change: (e: unknown) => void;
    on_blur?: (e: unknown) => void;
    type?: string;
    errors: string | undefined;
};

const FormInput = (props: Props) => {
    return (
        <Container>
            <div className="block_input">
                <label className="label_input">{props.label}</label>

                <input
                    className="input"
                    type={props.type}
                    name={props.name}
                    value={props.value}
                    onChange={props.on_change}
                ></input>

                {props.errors && <p className="text_error">{props.errors}</p>}
            </div>
        </Container>
    );
};

export default FormInput;
