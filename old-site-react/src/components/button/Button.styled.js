import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: transparent;
  border-width: 0;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
  padding: 0;
  min-width: 200px;
  text-transform: uppercase;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 3px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s;

  ${({ theme: { colors } }) => `
    background-color: ${colors.purple};
    color: ${colors.white};
  `}

  &:hover {
    box-shadow: 0 0 4px rgba(11, 11, 11, 0.1);
    transform: translate3d(1px, -1px, 0);
  }
`;
