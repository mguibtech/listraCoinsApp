import {createTheme} from '@shopify/restyle'

const palette = {
    greenPrimary: "#18E1BD",
    purplePrimary: "#7B22D3",

    white: "#FFFFFF",

    grey50: "#F9F9F9",
    grey75: "#B9B9B9",
    grey100: "#9B9B9B",
    grey200: "#8D8D8D",
    grey900: "#313131",

    redError: "#EA3838",
    redErrorLight: "#FBECEC",
    greenSuccess: "#4abc86",
    greenSuccessLight: "#D8ffec",

    black: "#000000"
}

export const theme = createTheme({
    colors: { 
        ...palette,
        primary: palette.greenPrimary,
        primaryPurple: palette.purplePrimary,
        primaryContrast: palette.white,

        buttonPrimary: palette.purplePrimary,

        background: palette.grey50,
        backgrounContrast: palette.grey75,

        error: palette.redError,
        errorLight: palette.redErrorLight,

        success: palette.greenSuccess,
        successLight: palette.greenSuccessLight
    },
    spacing: {
        s4: 4,
        s8: 8,
        s10: 10,
        s16: 16,
        s24: 24,
        s32: 32,
        s48: 48,
        s64: 64,
        s96: 96,
        s128: 128,
        s192: 192,
        s256: 256,
        s384: 384,
        s512: 512,
        s640: 640,
        s768: 768,
      },
      borderRadii: {
        s8: 8,
        s12: 12,
        s16: 16,
      },
    
      textVariants: {
        defaults: {},
      },    
});

export type Theme = typeof theme;