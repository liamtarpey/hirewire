import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ${({theme: {colors}}) => `
        html {
            box-sizing: border-box;
        }
        body {
            margin: 0;
        }
        *, *:before, *:after {
            box-sizing: inherit;
            line-height: 1.6;
        }

        // Links
        a {
            color: ${colors.purple};
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    `}
`;
