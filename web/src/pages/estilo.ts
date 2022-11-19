import styled from "styled-components";

const Container = styled.div`
    .bloco_produtos {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 1rem 1.5rem;
        margin-bottom: 2.5rem;
        margin-top: 2rem;
        width: 100%;
    }

    .texto_aviso {
        font-size: 1.2rem;
        text-transform: uppercase;
        color: var(--cor-texto-escuro);
        text-align: center;
        padding: 5rem 0rem;
    }
`;

export default Container;
