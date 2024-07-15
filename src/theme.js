import { createTheme } from "@mui/material";

export const theme = createTheme({
      palette: {
        primary: {
          main: '#ffac33',
          dark: '#212121'
        },
        secondary: {
          main: '#bdbdbd',
        }
      },
      typography: {
        allVariants: {
          color: '#212121'
        },
        fontFamily: 'Quicksand',
        h6: {
          fontFamily: 'Rosarivo',
        }
      },
    })