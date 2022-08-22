import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../../styles/layout.module.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

import logo from "../../assets/layout/logo.svg";
import { fadeIn } from "../../animation/variants";

export default function Navbar({ toggleDrawer, setOpenModal }: any) {
  // const isMobile = useMediaQuery("(max-width:425px)");
  const isTablet = useMediaQuery("(max-width:860px)");

  return (
    <AppBar
      position="static"
      style={{
        boxShadow: "none",
        border: "none",
        background: "transparent",
      }}
    >
      <Toolbar className={styles.toolbar}>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <motion.img
            variants={fadeIn()}
            initial="initial"
            animate="animate"
            src={logo}
            alt="logo"
            // width="100px"
            style={{ maxWidth: "80px" }}
          />
        </Link>

        {!isTablet ? (
          <>
            <div style={{ flexGrow: 1 }}></div>
            <motion.div
              variants={fadeIn()}
              initial="initial"
              animate="animate"
              style={{ display: "flex", alignItems: "center" }}
            >
              <CustomLink to="/" title="Home" />
              <CustomLink to="/about-us" title="About us" />
              <CustomLink to="/team" title="Team" />
              <CustomLink to="/contact" title="Contact" />
              <CustomLink to="/whitepaper" title="Whitepaper" />
              <CustomLink to="/presale" title="Presale" />
            </motion.div>
          </>
        ) : (
          <>
            <div style={{ flexGrow: 1 }}></div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ p: 0 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon style={{ color: "#fff" }} />
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

const CustomLink = ({ to, title }: any) => (
  <NavLink
    className={({ isActive }) =>
      isActive ? styles.navItemActive : styles.navItem
    }
    to={to}
    end
  >
    <Button color="inherit">
      {title}
      {title === "Careers" && <div className={styles.no}>5</div>}
    </Button>
  </NavLink>
);
