
interface Colors {
    black: string,
    white: string,
    lightgrey: string,
    midgrey: string,
    darkgrey: string,
    blue: string,
    turquoise: string,
    purple: string,
    yellow: string,
}

interface Space {
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string,
}

interface FontSizes {
    sm: string,
    md: string,
    lg: string,
    xl: string,
    "2xl": string,
}

interface FontWeights {
    400: number,
    500: number,
    700: number,
}

type Breakpoints = string[];
  
export interface HireWireTheme {
    colors: Colors;
    space: Space;
    fontSizes: FontSizes;
    fontWeights: FontWeights;
    breakpoints: Breakpoints;
}
