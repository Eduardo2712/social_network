import styled from "styled-components";

const Container = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem;

    .loading {
        border: 0.6rem solid var(--color-background-image);
        border-top: 0.6rem solid var(--color-primary);
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default Container;
