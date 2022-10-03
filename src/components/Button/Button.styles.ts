import styled from "styled-components";

export const ButtonStyled = styled.button<{loading?: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 4.8rem;

    max-width: 33.5rem;
    max-height: 4.8rem;
    
    color: white;
    
    transition: 0.2s;
    
    border-radius: 0.8rem;
    background-color: ${props => props.loading ? 'var(--gray-900)' : ' var(--primary-red)'};

    pointer-events: ${props => props.loading ? 'none' : 'all'};
    
    a {
        color: white;
    }

    :hover {
        scale: 1.05;
    }
`