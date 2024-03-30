import React from 'react';

type DisplayType = 'flex' | 'inline-flex';
type DirectionType = 'column' | 'column-reverse' | 'row' | 'row-reverse';

type JustifyType =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit'
    | 'stretch'
    | 'start';

type AlignType =
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit';

type FlexValueType = number | string;

type HeightType = 'initial' | 'auto';

type FlexWrapType = 'nowrap' | 'wrap' | 'wrap-reverse';

export interface FlexProps {
    /** React Children */
    children: React.ReactNode;
    /** display */
    display?: DisplayType | DisplayType[];
    /** flex-direction */
    direction?: DirectionType | DirectionType[];
    /** justify-content */
    $justify?: JustifyType | JustifyType[];
    /** align-items */
    $align?: AlignType | AlignType[];
    /** flex */
    flexValue?: FlexValueType;
    /** full width */
    fullWidth?: boolean;
    /** full height */
    fullHeight?: boolean;
    /** height */
    height?: HeightType;
    /** flex-wrap */
    flexwrap?: FlexWrapType;
    /** center align */
    center?: boolean;
    /** gap */
    gap?: string | string[];
    /** max-width */
    maxWidth?: string | string[];
    /** onClick handler */
    onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
}
