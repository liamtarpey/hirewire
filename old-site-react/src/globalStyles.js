import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${({ theme: { colors, fontSizes, fontWeights } }) => `
        h1, h2, h3, h4, h5, h6 {
            color: ${colors.black};
            font-weight: ${fontWeights["700"]};
        }

        h1 {
            font-size: ${fontSizes.xl};
        }

        h2 {
            font-size: ${fontSizes.lg};
        }

        h3, h4, h5, h6 {
            font-size: ${fontSizes.md}
        }
    `}
`;

export default GlobalStyle;
