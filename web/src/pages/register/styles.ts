import styled from "styled-components";

const Container = styled.div`
    .block_form {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem 2rem;
        padding: 1rem 2rem;
    }

    .block_buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
        gap: 1rem 2rem;
    }

    @media only screen and (max-width: 1055px) {
        .block_form {
            justify-content: center;
        }
    }

    @media only screen and (max-width: 400px) {
        .block_buttons {
            flex-direction: column;
        }
    }
`;

export default Container;
