'use client';

import {HireWireTheme} from './theme.styled';

const colors = {
    black: "#222222",
    white: "#FFFFFF",
    lightgrey: "#f9f9f9",
    midgrey: "#e8e8e8",
    darkgrey: "rgb(66, 84, 102)",
    blue: "#004AAD",
    turquoise: "#5CE1E6",
    purple: "#635E87",
    yellow: "#CFCAA8",
};

const space = {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
};

const fontSizes = {
    sm: "14px",
    md: "16px",
    lg: "24px",
    xl: "48px",
    "2xl": "64px",
};

const fontWeights = {
    400: 400,
    500: 500,
    700: 700,
};

const breakpoints = ['31.25rem', '50rem', '75rem'] as const;

const tokens = {
    colors,
    space,
    fontSizes,
    fontWeights,
    // radii,
    // sizes,
    // fonts,
    // lineHeights,
    // borders,
    // shadows,
    // zIndices,
    breakpoints,
} as const;

export const theme: HireWireTheme = {
    ...tokens,
} as const;

  