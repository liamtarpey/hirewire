import React, { forwardRef } from 'react';
import { FlexProps } from './Flex.interface';
import * as S from './Flex.styled';

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
    ({ children, ...props }: FlexProps, ref) => {
        return (
            <S.Flex ref={ref} {...props}>
                {children}
            </S.Flex>
        );
    },
);

Flex.displayName = 'Flex';
