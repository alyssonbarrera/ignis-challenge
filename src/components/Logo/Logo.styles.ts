import styled from "styled-components";

export const LogoImage = styled.img<{position: string}>`
    width: 12.5rem;
    
    margin-inline: ${({position}) => position === 'center' ? 'auto' : '0'};

    cursor: pointer;
`