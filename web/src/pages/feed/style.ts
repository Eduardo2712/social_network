import styled from "styled-components";

const Container = styled.div`
    .block_feed {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .block_status {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: var(--color-container);
        padding: 1rem;
    }

    .text_area_status,
    .text_area_status:focus {
        width: 30rem;
        height: 5rem;
        margin: 0.5rem;
        border: 0.1rem solid var(--color-border);
        border-radius: 0.5rem;
        resize: none;
        color: var(--color-text-black);
        font-size: 0.95rem;
        padding: 0.5rem;
        outline: none;
    }

    .block {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .user_image {
        border-radius: 50%;
        border: 0.3rem solid var(--color-container) !important;
    }

    .text_status {
        color: var(--color-text-black);
        font-size: 1.1rem;
        font-weight: 600;
    }

    .button_status {
        font-size: 1rem;
        font-weight: 700;
        color: var(--color-text-clear);
        border: 0;
        padding: 0.4rem;
        width: 7rem;
        border-radius: 0.3rem;
        background-color: var(--color-secondary);
    }

    .block_button {
        display: flex;
        justify-content: flex-end;
    }
`;

export default Container;
