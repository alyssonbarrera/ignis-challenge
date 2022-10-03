import styled from "styled-components";

export const FilmsHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.8rem;

    padding-top: 1.2rem;
    padding-bottom: 4rem;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

export const FilmsImage = styled.img`
    width: 1.5rem;
    height: 1.5rem;

    cursor: pointer;

    @media (min-width: 768px) {
        margin-right: 2.8rem;
    }
`

export const FilmsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 33.5rem;

    @media (min-width: 768px) {
        max-width: 100%;
        justify-content: space-between;
    }
`

export const FilmsTitle = styled.h1`
    width: 100%;
    color: var(--gray-500);
    font-weight: 700;

    @media (min-width: 768px) {
        margin: 0;
    }
`

export const FilmsSpan = styled.span`
    color: white;
`

export const FilmsMain = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FilmsSectionTitle = styled.h2`    
    width: 100%;
    max-width: 33.5rem;
    
    margin-bottom: 2.8rem;

    font-weight: 700;

    @media (min-width: 768px) {
        max-width: 100%;
    }
`

export const FilmsSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.6rem;
    width: 100%;
    max-width: 33.5rem;

    @media (min-width: 768px) {
        max-width: 100%;
        justify-content: flex-start;
    }
`

export const FilmsFooter = styled.footer`
    display: flex;
    justify-content: center;
    
    margin-block: 9.261rem 7.8rem;
`