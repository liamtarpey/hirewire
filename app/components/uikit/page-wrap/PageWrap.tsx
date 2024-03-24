import { StyledPageWrap } from './PageWrap.styled';

export const PageWrap = ({
    children,
    limit,
}: {
    children: React.ReactNode;
    limit?: 'sm' | 'md' | 'lg' | undefined;
}) => {
    return <StyledPageWrap limit={limit}>{children}</StyledPageWrap>;
};
