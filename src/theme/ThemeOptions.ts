import { BreakpointsOptions, PaletteOptions, ThemeOptions, createTheme } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';

const theme = createTheme({});

const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

const palette: PaletteOptions = {
  mode: 'light',
  text: {
    primary: 'rgba(0,0,0,0.87)',
    secondary: 'rgba(0,0,0,0.6)',
    disabled: 'rgba(0,0,0,0.38)',
  },
  primary: {
    main: '#21ce99',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#094074',
  },
  tertiary: theme.palette.augmentColor({
    color: {
      main: '#473E72',
      contrastText: '#fff',
    },
    name: 'tertiary',
  }),
  quaternary: theme.palette.augmentColor({
    color: {
      main: '#F58F29',
      contrastText: '#fff',
    },
    name: 'quaternary',
  }),
  error: {
    main: '#D83A2C',
  },
  warning: {
    main: '#F1B90C',
  },
  info: {
    main: '#0288d1',
  },
  success: {
    main: '#21CE99',
  },
  divider: 'rgba(0,0,0,0.12)',
  background: {
    default: '#fff',
    paper: '#fff',
  },
};

const typography: TypographyOptions = {
  fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
  fontSize: 12,
  htmlFontSize: 12,
  h1: {
    fontSize: '96px',
    lineHeight: '1.2',
  },
  h2: {
    fontSize: '48px',
    lineHeight: '1.2',
  },
  h3: {
    fontSize: '36px',
    lineHeight: '1.2',
  },
  h4: {
    fontSize: '24px',
    lineHeight: '1.2',
  },
  h5: {
    fontSize: '20px',
    lineHeight: '1.2',
  },
  h6: {
    fontSize: '18px',
    lineHeight: '1.2',
  },
  body1: {
    fontSize: '16px',
    fontWeight: '500',
  },
  body2: {
    fontSize: '1rem',
    fontWeight: '400',
  },
  subtitle1: {
    fontSize: '0.8rem',
  },
  subtitle2: {},
};
const themeOptions: ThemeOptions = {
  breakpoints,
  palette,
  typography,

  components: {
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: ({ ownerState }) => {
          return {
            ...(ownerState.variant === 'contained' &&
              ownerState.color === 'primary' && {
                color: '#fff !important',
              }),
            borderRadius: '12px',
            fontWeight: 500,
            textTransform: 'none',
          };
        },
      },
    },
  },
};

export default createTheme(themeOptions);
