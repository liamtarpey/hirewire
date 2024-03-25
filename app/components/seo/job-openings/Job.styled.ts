import styled from 'styled-components';

export const StyledJob = styled.a`
    ${({theme: {colors}}) => `
        border: 1px solid ${colors.midgrey};
        border-radius: 4px;
        padding: 20px;
        text-align: left;
        width: 250px;
        color: ${colors.black};
        text-decoration: none;

        h4 {
            margin: 12px 0 0 0;
        }

        p {
            margin: 7px 0 0 0;
        }

        .job-location {
            color: ${colors.darkgrey};
            margin-bottom: 16px;
        }

        &:hover {
            box-shadow: 1px 8px 20px ${colors.midgrey};
        }
    `}
`;
