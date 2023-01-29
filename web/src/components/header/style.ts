import styled from "styled-components";

const Container = styled.div`
    .header {
        height: 2.5rem;
        background-color: var(--color-primary);
        padding: 0.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .header_options {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
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
