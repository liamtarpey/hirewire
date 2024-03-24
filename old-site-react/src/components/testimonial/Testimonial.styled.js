import styled from "styled-components";

export const StyledTestimonial = styled.blockquote`
  ${({ theme: { colors } }) => `
        position: relative;
        border: 6px solid ${colors.purple};
        padding: 60px;
        min-width: 300px;
        border-radius: 5px;
        align-self: stretch;
        display: flex;
        justify-content: center;
        flex-direction: column;
        // quotes: "“" "”" "‘" "’";

        strong {
            margin-bottom: 4px;
        }

        &:before {
            content: "“";
            position: absolute;
            top: 30px;
            left: 10px;
            background-color: ${colors.lightgrey};
            color: ${colors.yellow};
            font-size: 200px;
        }
    `}
`;
