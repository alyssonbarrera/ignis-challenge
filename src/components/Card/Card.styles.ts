import styled from "styled-components";

export const CardContainer = styled.div<{focus: boolean}>`
    display: flex;
    flex-direction: column;

    background-color: var(--gray-900);
    border-radius: 0.8rem;
    
    max-width: ${props => props.focus ? '33.6rem' : '15.13rem'};
    min-height: 33.1rem;

    color: white;
    
    transition-duration: 0.5s;
`

export const CardHeader = styled.header`
    min-height: 23.12rem;
`

export const CardImage = styled.img`
    width: 100%;
    border-radius: 0.8rem;
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 0.5rem;

    padding-inline: 0.6rem 1.4rem;
    transform: translate3d(0, -1rem, 0);
`

export const CardStatus = styled.div`
    transform: translate3d(0.5rem, -2rem, 0);

    width: 4rem;
    height: 4rem;

    border-radius: 100%;

    .progress span {
        color: white;
    }
`

export const CardStatusPercentage = styled.p`
    font-weight: 700;
    z-index: 1;
`

export const CardTitle = styled.h3`
    color: white;
    font-size: 1.4rem;
    font-weight: 700;

    margin-top: 0.8rem;
`

export const CardDescription = styled.p`
    color: var(--gray-500);
    font-size: 1rem;
    line-height: 1.6rem;
`

export const CardFooter = styled.footer`
    margin-top: 1.9rem;
    display: flex;
    justify-content: flex-end;

    padding-bottom: 0.967rem;
    margin-right: 1.4rem;
`

export const CardParagraph = styled.p`
    font-size: 1rem;

    filter: brightness(0.9);
    cursor: pointer;
`