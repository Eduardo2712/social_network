import styled from "styled-components";

const Container = styled.div`
    .header {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        height: 2.5rem;
        background-color: var(--color-primary);
        gap: 1rem;
        padding: 0.5rem;
    }

    .icon_header {
        font-size: 1.4rem;
        color: var(--color-text-clear);
        cursor: pointer;
    }

    .text_header {
        color: var(--color-text-clear);
        font-weight: 700;
    }

    @media only screen and (max-width: 400px) {
        .text_header {
            display: none;
        }
    }
`;

export default Container;
