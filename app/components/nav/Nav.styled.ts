import styled from "styled-components";

export const StyledNav = styled.nav`
  ${({ theme: { colors } }) => `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${colors.white};
    border-bottom: 4px solid ${colors.yellow};
    img {
      display: block;
      width: 150px;
      padding-right: 20px;
    }
  `}
`;

export const StyledLogo = styled.a`
  display: block;
  width: 170px;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
  // max-width: 230px;
  // img {
  //   display: block;
  //   width: 100%;
  //   height: auto;
  // }
`;
