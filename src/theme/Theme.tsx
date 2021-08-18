import { ThemeProvider, defaultTheme } from "evergreen-ui"
import Button from "./Button"
import "./index.css"

function Everpurple(props) {
    let defTheme:any = defaultTheme

    const everPurple = {
      ...defTheme,
      components: {
        ...defTheme.components,
        Button,
        },
      }
  
    return (
      <ThemeProvider value={everPurple}>
          {props.children}
      </ThemeProvider>
    )
}

export default Everpurple