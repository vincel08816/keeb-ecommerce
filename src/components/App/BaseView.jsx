import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";

const rightBoxStyle = { flexDirection: "row-reverse" };
const iconSx = { width: 30, height: 30 };
const buttonSx = { width: 50, height: 50 };

export default function BaseView({ children }) {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <DrawerComponent />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Keeb
          </Typography>
          <Box sx={{ rightBoxStyle }}>
            <IconButton color="inherit" sx={buttonSx}>
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <PersonIcon sx={iconSx} />
              </NavLink>
            </IconButton>
            <IconButton color="inherit" sx={buttonSx}>
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <ShoppingCartIcon sx={iconSx} />
              </NavLink>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <main style={{ display: "flex", justifyContent: "center" }}>
        {children}
      </main>
    </Box>
  );
}
