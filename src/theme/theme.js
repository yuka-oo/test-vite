import { createTheme } from '@mui/material/styles'
import { alpha } from "@mui/material";

const customTheme = createTheme({
    palette: {
      primary:{
        main: alpha('#FAFAFA', 0.1),
        contrastText: '#E95504',
      },
      text: {
         primary: '#333333' 
      },
      background: {
          default: '#FAFAFA'
      }
    }
  });

export default customTheme;