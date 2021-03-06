import { createTheme } from '@mui/material'
import { Shadows } from '@mui/material/styles/shadows'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    nav: true
    active: true
    input: true
  }
}

const colors = {
  footerwhite: 'rgba(255,255,255,0.52)',
  footerice: 'rgba(218, 228, 233, 0.52)',
  input: 'rgba(255,255,255,0.50)',
  inputactive: 'rgba(255,255,255,0.70)',
  white: '#fff',
  ice: '#DAE4E9',
  shadow: '#202020',
  gray: '#151616',
  black: '#101010',
  wine: '#3C0000',
  red: '#7E0000',
}

const fonts = {
  text: "'Righteous', cursive",
  custom: "'Sedgwick Ave Display', cursive;",
}

const tempTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1015,
      xl: 1200,
    },
  },
})

const theme = createTheme(tempTheme, {
  ...tempTheme,
  components: {
    MuiSpeedDial: {
      styleOverrides: {
        root: {
          '& .MuiSpeedDial-fab:hover': {
            backgroundColor: colors.red,
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: colors.wine,
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1', // h1
          h2: 'h2', // h2
          h3: 'h2', // h1
          h4: 'h2', // h4
          h5: 'h2', // h2
          h6: 'h2', // h3
          subtitle1: 'span',
          subtitle2: 'span',
        },
      },
    },
    MuiImageListItem: {
      styleOverrides: {
        root: {
          display: 'flex',
          breakInside: 'avoid',
          margin: 0,
          marginBottom: '10px',
          '& img': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: colors.inputactive,
          },
          '& label': {
            color: colors.input,
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: colors.red,
            borderWidth: '2px',
          },
          '& .MuiInput-underline:hover': {
            borderBottomColor: colors.wine,
            borderWidth: '2px',
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: colors.wine,
            borderWidth: '2px',
          },
          marginTop: '24px',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: colors.white,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: colors.white,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecorationThickness: '3px',
          textDecorationColor: colors.white,
          textUnderlineOffset: '3px',
          cursor: 'pointer',
          '&:hover': {
            textDecorationThickness: '3px',
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          '& .MuiGrid-item': {},
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'nav' },
          style: {
            backgroundColor: colors.wine,
            padding: '0px',
            width: '100%',
            fontWeight: 'bold',
          },
        },
        {
          props: { variant: 'active' },
          style: {
            backgroundColor: colors.red,
            padding: '0px',
            width: '100%',
            fontWeight: 'bold',
          },
        },
        {
          props: { variant: 'input' },
          style: {
            backgroundColor: colors.red,
            fontWeight: 'bold',
            marginBottom: '8px',
            marginTop: '32px',
            minWidth: '72px',
            width: '10%',
            maxWidth: '80px',
            height: '2rem',
          },
        },
      ],
      styleOverrides: {
        root: {
          '&:hover': { backgroundColor: `${colors.red} !important` },
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    background: {
      paper: colors.black,
      default: colors.black,
    },
    primary: {
      main: colors.white,
      textContrast: colors.white,
    },
    action: {
      disabled: colors.ice,
      disabledBackground: colors.red,
      disabledOpacity: 1,
    },
  },
  shape: {
    borderRadius: 0,
  },
  shadows: [...Array(25).fill('none')] as Shadows,
  typography: {
    fontFamily: fonts.text,
    h1: {
      fontFamily: fonts.custom,
      fontSize: '2rem', // 1.2rem
      color: colors.white,
      letterSpacing: '0.04rem',
      textTransform: 'uppercase',
      [tempTheme.breakpoints.up('sm')]: {
        color: colors.ice,
        fontSize: '2.11rem',
      },
    },
    h2: {
      fontFamily: fonts.custom,
      fontSize: '2.25rem',
      color: colors.white,
      letterSpacing: '0.04rem',
      textTransform: 'uppercase',
      [tempTheme.breakpoints.up('sm')]: {
        color: colors.ice,
      },
    },
    h3: {
      fontFamily: fonts.custom,
      fontSize: '1.5rem',
      color: colors.white,
      letterSpacing: '0.04rem',
      textTransform: 'capitalize',
      [tempTheme.breakpoints.up('sm')]: {
        color: colors.ice,
      },
    },
    h4: {
      fontFamily: fonts.text,
      fontSize: '0.875rem',
      color: colors.white,
      textTransform: 'uppercase',
      [tempTheme.breakpoints.up('sm')]: {
        color: colors.ice,
        fontSize: '1rem',
      },
    },
    h5: {
      fontFamily: fonts.text,
      fontSize: '1rem',
      color: colors.white,
      letterSpacing: '0.04rem',
      [tempTheme.breakpoints.up('sm')]: {
        color: colors.ice,
      },
    },
    h6: {
      fontFamily: fonts.text,
      fontSize: '0.875rem',
      color: colors.white,
      letterSpacing: '0.04rem',
      [tempTheme.breakpoints.up('sm')]: {
        color: colors.ice,
        fontSize: '1rem',
      },
    },
    body1: {
      fontFamily: fonts.text,
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: colors.white,
      letterSpacing: '0.04rem',
      [tempTheme.breakpoints.up('sm')]: {
        color: colors.ice,
      },
    },
    body2: {
      fontFamily: fonts.text,
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: colors.white,
      letterSpacing: '0.04rem',
      [tempTheme.breakpoints.up('sm')]: {
        color: colors.ice,
      },
    },
    subtitle1: {
      fontFamily: fonts.text,
      fontSize: '0.75rem',
      lineHeight: 1,
      color: colors.footerwhite,
      letterSpacing: '0.04rem',
      [tempTheme.breakpoints.up('sm')]: {
        color: colors.footerice,
        fontSize: '0.875rem',
        lineHeight: 1,
      },
    },
  },
})

export default theme
