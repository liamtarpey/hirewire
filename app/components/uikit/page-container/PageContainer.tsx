import { StyledPageContainer } from './PageContainer.styled';

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
    return <StyledPageContainer>{children}</StyledPageContainer>;
};
