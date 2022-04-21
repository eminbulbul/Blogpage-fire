import * as React from "react";
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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Navbar.css";
import { useNavigate } from "react-router";

const pages = ["<M.Emin/>"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Container className="nav-container" maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            onClick={() => {
              handleCloseUserMenu();
              navigate("/");
            }}
            variant="h6"
            noWrap
            component="div"
            sx={{
              cursor: "pointer",
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* ortadaki yazi kismi */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                onClick={() => {
                  handleCloseUserMenu();
                  navigate("/");
                }}
                className="middleText"
                sx={{
                  my: 2,
                  color: "#F5DEB1",
                  display: "block",
                  m: "auto",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                }}
              >
                <span className="middleSpan">────</span>
                {page}
                <span className="middleSpan">Blog</span>
                <span className="middleSpan">────</span>
              </Button>
            ))}
          </Box>

          {/* profil iconu kismi */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Profile Settings">
              <AccountCircleIcon onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="AccountCircle" src={AccountCircleIcon} />
              </AccountCircleIcon>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* Login register kismi burada  */}
              <MenuItem
                onClick={() => {
                  handleCloseUserMenu();
                  navigate("/login");
                }}
              >
                <Typography textAlign="center">Login</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseUserMenu();
                  navigate("/register");
                }}
              >
                <Typography textAlign="center">Register</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
