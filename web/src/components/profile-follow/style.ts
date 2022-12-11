import styled from "styled-components";

const Container = styled.div`
    .block_image_user {
        height: 22rem;
        width: 16rem;
        background-image: linear-gradient(
            to top,
            var(--color-container) 0,
            var(--color-container) 80%,
            var(--color-primary) 20%
        );
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 1rem;
        gap: 1rem;
    }

    .user_image {
        border-radius: 50%;
        border: 0.3rem solid var(--color-container) !important;
    }

    .text_name {
        color: var(--color-text-black);
        font-size: 1.2rem;
        font-weight: 800;
    }

    .block_follow {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;
        border-top: 0.1rem solid var(--color-border);
        width: 100%;
        padding-top: 0.7rem;
    }

    .text_follow {
        color: var(--color-text-black);
        font-size: 1.1rem;
        font-weight: 600;
    }
`;

export default Container;
