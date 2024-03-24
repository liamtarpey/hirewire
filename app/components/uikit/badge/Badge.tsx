import { StyledBadge } from './Badge.styled';

export const Badge = ({ children }: { children: React.ReactNode }) => {
    return <StyledBadge>{children}</StyledBadge>;
};
