import styled from "styled-components";
import { FieldError } from "react-hook-form"

export const InputLabel = styled.label`
    display: flex;
    flex-direction: column;
    
    gap: 0.8rem;
    
    width: 100%;
    max-width: 33.5rem;

    font-size: 1.6rem;
    color: white;

    position: relative;
`

export const InputStyled = styled.input<{variant: string, error: FieldError}>`
    width: 100%;
    height: 4.8rem;

    padding-left: ${props => props.variant === 'search' ? '2.4rem' : '1.2rem'};
    
    background-color: var(--gray-900);
    border-radius: ${props => props.variant === 'search' ? '10rem' : '0.8rem'};
    border: 1px solid ${props => props.error ? 'var(--primary-red)' : 'none'};
    
    color: var(--gray-500);
    letter-spacing: ${props => props.variant === 'password' ? '0.5rem' : 'normal'};
    font-weight: ${props => props.variant === 'password' ? '700' : 'normal'};

    transition: filter 0.2s ease-in-out;

    ::placeholder {
        color: var(--gray-600);
    }

    :focus {
        border: ${props => props.variant !== 'search' && '1px solid var(--blue-600)'};
        filter: ${props => props.variant === 'search' && 'brightness(1.4)'};
    }
`

export const InputIcon = styled.img<{variant?: string}>`
    position: absolute;
    right: 0;

    transform: ${props => props.variant === 'search' ? 'translateY(50%)' : 'translate3d(-1rem, 185%, 0)'};
    
    margin-right: ${props => props.variant === 'search' ? '2.4rem' : '0'};

    cursor: ${props => props.variant === 'password' ? 'pointer' : 'default'};
`

export const InputError = styled.p`
    color: var(--primary-red);
    font-size: 1.2rem;
`