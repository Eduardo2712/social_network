import styled from "styled-components";

const Container = styled.div`
    .block_status {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 0.5rem;
    }

    .text_area_status {
        min-width: 10rem;
        max-width: 30rem;
        min-height: 6rem;
        max-height: 6rem;
        margin: 0.5rem;
    }

    .block_feed {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .block_image_user {
        height: 27rem;
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
`;

export default Container;
