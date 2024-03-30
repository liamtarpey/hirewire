
interface Colors {
    black: "#222222",
    white: "#FFFFFF",
    lightgrey: "#f9f9f9",
    midgrey: "#e8e8e8",
    darkgrey: "rgb(66, 84, 102)",
    blue: "#004AAD",
    turquoise: "#5CE1E6",
    purple: "#635E87",
    yellow: "#CFCAA8",
}

interface Space {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
}

interface FontSizes {
    sm: "14px",
    md: "16px",
    lg: "24px",
    xl: "48px",
    "2xl": "64px",
}

interface FontWeights {
    400: 400,
    500: 500,
    700: 700,
}

type Breakpoints =['31.25rem', '50rem', '75rem'];
  
export interface HireWireTheme {
    colors: Colors;
    space: Space;
    fontSizes: FontSizes;
    fontWeights: FontWeights;
    breakpoints: Breakpoints;
}
