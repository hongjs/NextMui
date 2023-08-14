export declare module '@mui/material/styles' {
  interface Palette {
    tertiary?: Palette['tertiary'];
    quaternary?: Palette['quaternary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['tertiary'];
    quaternary?: PaletteOptions['quaternary'];
  }
}

export declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    quaternary: true;
  }
}

export declare module '@mui/material/Typography' {
  interface TypographyPropsColorOverrides {
    tertiary: true;
    quaternary: true;
  }
}
