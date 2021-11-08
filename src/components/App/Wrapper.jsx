import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { UserProvider } from "../../contexts-hooks/UserContext";
import BaseView from "./BaseView";

const theme = createTheme({});

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <UserProvider>
      <Router>
        <BaseView>
          <Switch>{children}</Switch>
        </BaseView>
      </Router>
    </UserProvider>
  </ThemeProvider>
);

export default Wrapper;
