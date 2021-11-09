import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Box, Divider, Drawer, IconButton, List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Sections from "../../assets/nav-drawer";

const buttonProps = {
  size: "large",
  edge: "start",
  color: "inherit",
  "aria-label": "menu",
  sx: { mr: 2 },
};

export default function DrawerComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setIsOpen(open);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ fontWeight: "heavy", p: 2, pb: 0 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Shop
        </Typography>
      </Box>
      <List>
        {Sections.map(({ text, icon }, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <img
                src={icon}
                alt={text}
                style={{ width: "40px", padding: "3px 15px 3px 3px" }}
              />
            </ListItemIcon>
            <ListItemText primary={text} sx={{ pl: 1 }} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ mb: 2 }} />

      <Box sx={{ fontWeight: "heavy", p: 1, pl: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Help {"&"} Settings
        </Typography>
      </Box>
      <List>
        {[
          "Your Account",
          "English",
          "UnitedStates",
          "Customer Service",
          "Sign Out",
        ].map((text, index) => (
          <ListItem button key={text} sx={{ height: "62px" }}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton {...buttonProps} onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        {list("left")}
      </Drawer>
    </div>
  );
}
