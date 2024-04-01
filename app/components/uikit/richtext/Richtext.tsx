import { StyledRichtext } from './Richtext.styled';

export const RichText = ({ children }: { children: React.ReactNode }) => {
    return <StyledRichtext>{children}</StyledRichtext>;
};
