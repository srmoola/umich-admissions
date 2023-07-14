import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CalculateIcon from "@mui/icons-material/Calculate";
import { logout } from "../features/signin";
import { auth } from "../firebase";
import { useState } from "react";

function NavBar() {
  const [openMenu, setopenMenu] = useState<boolean>(false);
  return (
    <AppBar sx={{ backgroundColor: "#FFCB05" }} position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CalculateIcon
            sx={{
              display: { xs: "none", md: "flex", color: "#00274C" },
              mr: 1,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".0.5rem",
              color: "#00274C",
              textDecoration: "none",
            }}
          >
            UMich Admissions Calculator
          </Typography>
          <Button
            sx={{
              display: { xs: "none", xl: "block", lg: "block", md: "block" },
            }}
            onClick={logout}
          >
            LogOut
          </Button>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={() => setopenMenu(!openMenu)} size="large">
              <MenuIcon sx={{ color: "#00274C" }} />
            </IconButton>
            <Menu
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={openMenu}
              onClick={() => setopenMenu(!openMenu)}
            >
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </Box>
          <CalculateIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              color: "#00274C",
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".05rem",
              color: "#00274C",
              textDecoration: "none",
            }}
          >
            UMich Admissions
          </Typography>

          <Box sx={{ flexGrow: 0, ml: "auto" }}>
            <Avatar src={auth.currentUser?.photoURL || ""} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
