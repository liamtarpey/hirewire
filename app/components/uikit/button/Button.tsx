import React from 'react';
import { StyledA, StyledButton } from './Button.styled';

export const Button = ({
    children,
    onClick,
    href,
}: {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
}) => {
    if (href) return <StyledA href={href}>{children}</StyledA>;
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
