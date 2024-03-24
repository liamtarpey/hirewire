import styled from 'styled-components';

export const StyledBadge = styled.div`
    ${({theme: {colors, fontSizes}}) => `
        background: ${colors.turquoise};
        color: ${colors.white};
        display: block;
        width: 50px;
        border-radius: 20px;
        font-size: 10px;
        text-align: center;
        padding: 4px;
        text-transform: uppercase;
    `}
`;
