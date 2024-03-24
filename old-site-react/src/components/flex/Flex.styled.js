import styled from "styled-components";

export const StyledFlex = styled.div`
  ${({ align, justify }) => `
        display: flex;
        align-items: ${align || "start"};
        justify-content: ${justify || "start"};
    `}
`;
