import * as React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/layout.module.css";
import {
  Box,
  // Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import TeamIcon from "@mui/icons-material/Group";
import ContactIcon from "@mui/icons-material/ContactMail";
import WhitepaperIcon from "@mui/icons-material/StickyNote2";
import PresaleIcon from "@mui/icons-material/Loyalty";

export default function MainDrawer({ toggleDrawer, openDrawer }: any) {
  return (
    <Drawer
      // anchor="left"
      anchor="right"
      open={openDrawer}
      onClose={toggleDrawer(false)}
    >
      <Box
        sx={{
          width: 250,
          overflow: "hidden",
          // background: "#2e3435",
          background: "#000",
          height: "100%",
        }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <NavItem icon={<HomeIcon />} title="Home" link="/" />
          <NavItem icon={<InfoIcon />} title="About us" link="/about-us" />
          <NavItem icon={<TeamIcon />} title="Team" link="/team" />
          <NavItem icon={<ContactIcon />} title="Contact" link="/contact" />
          <NavItem
            icon={<WhitepaperIcon />}
            title="Whitepaper"
            link="/whitepaper"
          />
          <NavItem icon={<PresaleIcon />} title="Presale" link="/presale" />
        </List>
      </Box>
    </Drawer>
  );
}

const NavItem = ({ icon, title, link }: any) => (
  <ListItem button style={{ marginLeft: "20px" }}>
    <ListItemIcon style={{ color: "#ffffffde" }}>{icon}</ListItemIcon>
    <ListItemText>
      {link ? (
        <Link
          to={link}
          style={{
            color: "#ffffffde",
            // background: "#2e3435",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          {title}
        </Link>
      ) : (
        title
      )}
    </ListItemText>
  </ListItem>
);
