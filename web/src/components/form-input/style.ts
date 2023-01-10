import styled from "styled-components";

const Container = styled.div`
    .block_input {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .label_input {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--color-primary);
    }

    .input {
        padding: 0.2rem;
        border-radius: 0.5rem;
        border: 0;
        font-size: 1.2rem;
    }

    .text_error {
        font-size: 1rem;
        font-weight: 700;
        color: var(--color-error);
    }
`;

export default Container;
