import styled from "styled-components";

export const StyledNav = styled.nav`
  ${({ theme: { colors } }) => `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${colors.white};
    border-bottom: 4px solid ${colors.yellow};
    z-index: 9999999;
    img {
      display: block;
      width: 150px;
      margin-right: 20px;
    }
  `}
`;

export const StyledLogo = styled.div`
  display: block;
  width: 170px;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
`;
