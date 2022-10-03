import styled from "styled-components";

export const LoginHeader = styled.header`
    display: flex;
    flex-direction: column;

    padding-top: 1.2rem;
    
    @media (min-width: 768px) {
        max-width: 37.5rem;
        margin-inline: auto;
    }
`

export const LoginImage = styled.img`
    width: 1.5rem;
    height: 1.5rem;

    margin-bottom: 2.6rem;
    margin-left: 2rem;

    cursor: pointer;
`

export const LoginMain = styled.main`
    margin-top: 4.5rem;
    flex-basis: 100%;
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 0.8rem;
`

export const LoginFooter = styled.footer<{error: boolean}>`
    display: flex;
    justify-content: center;

    margin-top: ${props => props.error ? '0.8rem' : '4.8rem'};
`