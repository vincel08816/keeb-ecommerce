import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import DrawerComponent from "./DrawerComponent";

const rightBoxStyle = { flexDirection: "row-reverse" };
const iconSx = { width: 30, height: 30 };
const buttonSx = { width: 50, height: 50 };

export default function BaseView({ children }) {
  return (
    <BaseStyle>
      <AppBar position="static">
        <Toolbar>
          <DrawerComponent />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button sx={{ fontSize: "20px" }}>
              <Link to="/">Keeb</Link>
            </Button>
          </Typography>
          <Box sx={{ rightBoxStyle }}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <IconButton color="inherit" sx={buttonSx}>
                <PersonIcon sx={iconSx} />
              </IconButton>
            </Link>
            <Link to="/cart" style={{}}>
              <IconButton color="inherit" sx={buttonSx}>
                <ShoppingCartIcon sx={iconSx} />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <main style={{ display: "flex", justifyContent: "center" }}>
        {children}
      </main>
    </BaseStyle>
  );
}

const BaseStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
`;
