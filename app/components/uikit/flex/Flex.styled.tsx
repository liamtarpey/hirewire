import styled from 'styled-components';
import { FlexProps } from './Flex.interface';

type StyleProperties =
    | 'display'
    | 'flex-direction'
    | 'justify-content'
    | 'align-items'
    | 'gap'
    | 'max-width';

type StyleValue = string | string[];

const getStyle = (styleProperty: StyleProperties, value: string) => `
    ${styleProperty}: ${value};
`;

const getMediaQueryStyle = (
    styleProperty: StyleProperties,
    value: string,
    breakpoint: any[number],
) => `
  @media (min-width: ${breakpoint}) {
    ${getStyle(styleProperty, value)}
  }
`;

const setStyles = (
    styleValue: StyleValue,
    styleProperty: StyleProperties,
    breakpoints: any,
): string => {
    if (Array.isArray(styleValue)) {
        return styleValue
            .map((value, index) => {
                const breakpoint = breakpoints[index - 1];
                return breakpoint
                    ? getMediaQueryStyle(styleProperty, value, breakpoint)
                    : getStyle(styleProperty, value);
            })
            .join('');
    }
    return getStyle(styleProperty, styleValue);
};

const setCenter = () => `
    justify-content: center;
    align-items: center;
`;

export const Flex = styled('div')<FlexProps>`
    ${({
        theme: { breakpoints },
        display = 'flex',
        direction = 'row',
        $justify = 'flex-start',
        $align = 'stretch',
        flexValue,
        $flexWrap,
        height,
        fullWidth,
        fullHeight,
        center,
        $gap,
        maxWidth,
    }) => `
        ${setStyles(display, 'display', breakpoints)}
        ${setStyles(direction, 'flex-direction', breakpoints)}
        ${setStyles($justify, 'justify-content', breakpoints)}
        ${setStyles($align, 'align-items', breakpoints)}
        ${$gap ? setStyles($gap, 'gap', breakpoints) : ''}
        ${maxWidth ? setStyles(maxWidth, 'max-width', breakpoints) : ''};
        ${center ? setCenter() : ''}
        ${flexValue ? `flex: ${flexValue};` : ''}
        ${$flexWrap ? `flex-wrap: ${$flexWrap};` : ''}
        ${fullWidth ? 'width: 100%;' : ''}
        ${fullHeight ? 'height: 100%;' : height || ''}
    `}
`;
