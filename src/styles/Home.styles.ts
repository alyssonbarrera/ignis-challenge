import styled from 'styled-components';

export const HomeHeader = styled.header`
    display: flex;
    justify-content: center;

    padding-top: 2rem;

    @media (min-width: 768px) {
        justify-content: flex-start;

        padding-left: 4rem;
        padding-block: 4rem 2rem;
    }
`

export const HomeMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    color: white;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        padding-inline: 4rem;
    }
`

export const HomeText = styled.div`
    margin-top: 6.2rem;

    @media (min-width: 768px) {
        margin-top: 0;
    }
`

export const HomeTitle = styled.h1`
    margin-bottom: 0.4rem;
    
    font-weight: 700;
    font-size: 2.4rem;

    @media (min-width: 768px) {
        font-size: 4rem;
    }
`

export const HomeParagraph = styled.p`
    color: var(--gray-500);
    font-size: 1.2rem;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 2rem;
        text-align: left;
    }
`

export const HomeImageContainer = styled.div`
    position: relative;
    margin-block: 1rem 6.9rem;

    max-width: 33.5rem;

    ::after {
        content: '';

        display: block;

        position: absolute;
        top: 0;
        left: 13.4rem;

        width: 20.6rem;
        height: 20.6rem;

        border-radius: 100%;
        background-color: var(--primary-red);

        filter: blur(9.8rem);
        opacity: 0.6;
        z-index: -1;
    }
    ::before {
        content: '';

        display: block;

        position: absolute;
        bottom: 0;
        left: 2.8rem;
        
        width: 20.6rem;
        height: 20.6rem;
        
        background-color: var(--blue-600);
        border-radius: 100%;
        
        filter: blur(8.2rem);

        opacity: 0.7;
        z-index: -1;
    }

    @media (min-width: 768px) {
        margin-block: 0;
    }

`

export const HomePearsonImage = styled.img`
    width: 100%;
    height: 100%;
`

export const HomeFooter = styled.footer`
    display: flex;
    justify-content: center;
    
    @media (min-width: 768px) {
        justify-content: flex-start;
        padding-left: 4rem;

        transform: translate3d(0, -5rem, 0);
    }
`