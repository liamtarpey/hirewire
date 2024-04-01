import React, { FunctionComponent } from 'react';
import { StyledLoader } from './Loader.styled';

export const Loader: FunctionComponent<{
    standalone?: boolean;
}> = ({ standalone = false, ...props }) => {
    return (
        <StyledLoader standalone={standalone} {...props}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </StyledLoader>
    );
};
