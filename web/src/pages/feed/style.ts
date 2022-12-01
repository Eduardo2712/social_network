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

    .bloco_user {
        width: 17rem;
        padding: 2rem;
    }

    .block_color_user {
        height: 4rem;
        width: 17rem;
        background-color: var(--color-primary);
    }
`;

export default Container;
