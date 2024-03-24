import styled from "styled-components";

export const StyledNav = styled.nav`
  ${({ theme: { colors } }) => `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${colors.white};
    // border-bottom: 1px solid ${colors.black};

    img {
      display: block;
      width: 40px;
      margin-right: 12px;
    }
  `}
`;

export const StyledLogo = styled.a`
  display: block;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
  // max-width: 230px;

  // img {
  //   display: block;
  //   width: 100%;
  //   height: auto;
  // }
`;
