import styled from "styled-components";

export const StyledPageWrap = styled.div`
  ${({ theme: { space } }) => `
        padding: ${space.lg};
        max-width: 47.5rem;
        margin: 0 auto;
    `}
`;
