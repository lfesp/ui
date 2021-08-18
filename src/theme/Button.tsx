import { defaultTheme } from "evergreen-ui"
const defTheme:any = defaultTheme

const Button = {
    ...defTheme.components.Button,
    baseStyle: {
      paddingX: 12,
      paddingY: 8,
      borderRadius: 5,
    },
    appearances: {
        primary: {
        color: 'white',
        backgroundColor: '#6459ab',
        _hover: {
          backgroundColor: '#595099',
        },
        _active: {
          backgroundColor: '#4b418a',
        },
        _focus: {
          boxShadow: '0 0 0 2px #E7E4F9',
        },
      },
    }
}


export default Button;