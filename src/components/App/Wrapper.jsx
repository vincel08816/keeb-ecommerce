import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, NavLink, Switch } from "react-router-dom";
import { UserProvider } from "../../contexts-hooks/UserContext";

const theme = createTheme({});

const mainStyle = { display: "flex", justifyContent: "center" };

const buttonProps = {
  size: "large",
  edge: "start",
  color: "inherit",
  "aria-label": "menu",
  sx: { mr: 2 },
};

const BaseView = ({ children }) => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton {...buttonProps}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Keeb
          </Typography>
          <Button color="inherit">
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              Login
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
      <main style={mainStyle}>{children}</main>
    </Box>
  );
};

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
