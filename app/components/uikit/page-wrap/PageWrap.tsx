import { StyledPageWrap } from './PageWrap.styled';

export const PageWrap = ({
    children,
    limit,
}: {
    children: React.ReactNode;
    limit?: 'sm' | 'md' | 'lg';
}) => {
    return <StyledPageWrap limit={limit}>{children}</StyledPageWrap>;
};
