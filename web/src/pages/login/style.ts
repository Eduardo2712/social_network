import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .container_login {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 30rem;
        background-color: var(--color-black);
        border-radius: 0.5rem;
        width: 30rem;
    }

    .text_login {
        color: var(--color-primary);
        font-weight: 900;
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }

    .block_form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .block_input_form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .text_form {
        color: var(--color-text-clear);
        font-size: 1.1rem;
        font-weight: 600;
    }

    .input_form {
        border-radius: 0.5rem;
        border: 0.1rem solid var(--color-text-clear);
        font-size: 1.1rem;
        width: 20rem;
        padding: 0.4rem;
    }

    .text_error {
        color: var(--color-error);
        margin-top: 0.2rem;
        font-size: 0.9rem;
        font-weight: 600;
        height: 1rem;
    }

    .block_buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 1.5rem;
    }

    .button_enter {
        color: var(--color-text-clear);
        background-color: var(--color-primary);
        border-radius: 0.5rem;
        font-size: 1.5rem;
        width: 7rem;
        height: 3rem;
        font-weight: 800;
    }

    .text_register > a {
        color: var(--color-text-clear);
        font-weight: 600;
        text-decoration: none;
    }

    .text_register > a:hover {
        color: var(--color-primary);
    }
`;

export default Container;
