import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    height: 5rem;
    width: 100%;
    max-width: 30rem;

    .label_input {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--color-text-black);
        width: 100%;
        max-width: 30rem;
    }

    .input {
        padding: 0.4rem;
        border-radius: 0.5rem;
        border: 0;
        font-size: 1.2rem;
        width: 100%;
        max-width: 30rem;
        background-color: var(--color-background);
        color: var(--color-text-black);
    }

    .input:focus {
        outline: var(--color-primary) solid 0.15rem;
    }

    .text_error {
        font-size: 1rem;
        font-weight: 600;
        color: var(--color-error);
        width: 100%;
        max-width: 30rem;
    }
`;

export default Container;
