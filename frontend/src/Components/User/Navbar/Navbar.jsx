import { React, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  Fade,
  Zoom,
} from "@mui/material";
import {
  Person as PersonIcon,
  Home as HomeIcon,
  LocalHospital as HospitalIcon,
  People as PeopleIcon,
  MedicalServices as ServicesIcon,
  DirectionsCar as AmbulanceIcon,
  ContactPhone as ContactIcon,
  Info as InfoIcon,
} from "@mui/icons-material";
import Drawor from "./Drawor";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../slices/Loginslice";
import logo from "../assets/logo.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [loginMenuAnchor, setLoginMenuAnchor] = useState(null);
  const open = Boolean(anchorEl);
  const loginMenuOpen = Boolean(loginMenuAnchor);

  const item = localStorage.getItem("jwt");
  const is_admin = localStorage.getItem("is_admin");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLoginMenuClick = (event) => {
    setLoginMenuAnchor(event.currentTarget);
  };

  const handleLoginMenuClose = () => {
    setLoginMenuAnchor(null);
  };

  const handlelog = () => {
    dispatch(logout());
    navigate("/");
    handleClose();
  };

  const navItems = [
    { label: "Home", path: "/", icon: <HomeIcon sx={{ fontSize: 20 }} /> },
    { label: "About", path: "/about", icon: <InfoIcon sx={{ fontSize: 20 }} /> },
    { label: "Doctors", path: "/doctor", icon: <PeopleIcon sx={{ fontSize: 20 }} /> },
    { label: "Services", path: "/services", icon: <ServicesIcon sx={{ fontSize: 20 }} /> },
    { label: "Ambulance", path: "/ambulance-booking", icon: <AmbulanceIcon sx={{ fontSize: 20 }} /> },
    { label: "Contact", path: "/contact", icon: <ContactIcon sx={{ fontSize: 20 }} /> },
  ];

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
        color: '#1a1a1a'
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            component={Link}
            to="/"
            sx={{ 
              p: 0,
              mr: 2,
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease'
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <img
                style={{
                  borderRadius: "50%",
                  width: 50,
                  height: 50,
                  objectFit: 'cover',
                  border: '3px solid rgba(46, 125, 90, 0.2)'
                }}
                src={logo}
                alt="Health Haven Hospital"
              />
              {!isMatch && (
                <Box>                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #2e7d5a 0%, #4caf50 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontSize: '1.25rem'
                    }}
                  >
                    Health Haven
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: '#6b7280',
                      fontSize: '0.75rem',
                      display: 'block',
                      lineHeight: 1
                    }}
                  >
                    Hospital
                  </Typography>
                </Box>
              )}
            </Box>
          </IconButton>
        </Box>

        {/* Desktop Navigation */}
        {!isMatch ? (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  startIcon={item.icon}
                  sx={{
                    color: '#4b5563',
                    fontWeight: 500,
                    textTransform: 'none',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    transition: 'all 0.3s ease',                    '&:hover': {
                      background: 'rgba(46, 125, 90, 0.1)',
                      color: '#2e7d5a',
                      transform: 'translateY(-2px)'
                    },
                    '&.active': {
                      background: 'rgba(46, 125, 90, 0.15)',
                      color: '#2e7d5a'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* User Actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {item && is_admin === "false" ? (
                <Fade in={true}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Tooltip 
                      title={`Welcome, ${localStorage.getItem("user") || 'User'}`}
                      arrow
                    >
                      <IconButton
                        onClick={handleClick}                        sx={{
                          background: 'linear-gradient(135deg, #2e7d5a 0%, #4caf50 100%)',
                          color: 'white',
                          '&:hover': {
                            transform: 'scale(1.1)',
                            boxShadow: '0 8px 25px rgba(46, 125, 90, 0.3)'
                          },
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <Avatar sx={{ width: 32, height: 32 }}>
                          <PersonIcon />
                        </Avatar>
                      </IconButton>
                    </Tooltip>

                    <Menu
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      TransitionComponent={Zoom}
                      PaperProps={{
                        sx: {
                          background: 'rgba(255, 255, 255, 0.95)',
                          backdropFilter: 'blur(20px)',
                          borderRadius: 3,
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                          minWidth: 200
                        }
                      }}
                    >                      <MenuItem 
                        component={NavLink} 
                        to="/appointment"
                        onClick={handleClose}
                        sx={{
                          py: 1.5,
                          '&:hover': {
                            background: 'rgba(46, 125, 90, 0.1)'
                          }
                        }}
                      >
                        <HospitalIcon sx={{ mr: 2, fontSize: 20 }} />
                        My Appointments
                      </MenuItem>
                      <MenuItem 
                        component={NavLink} 
                        to="/userprofile"
                        onClick={handleClose}
                        sx={{
                          py: 1.5,
                          '&:hover': {
                            background: 'rgba(46, 125, 90, 0.1)'
                          }
                        }}
                      >
                        <PersonIcon sx={{ mr: 2, fontSize: 20 }} />
                        Profile
                      </MenuItem>
                      <MenuItem 
                        onClick={handlelog}
                        sx={{
                          py: 1.5,
                          color: '#ef4444',
                          '&:hover': {
                            background: 'rgba(239, 68, 68, 0.1)'
                          }
                        }}
                      >
                        Logout
                      </MenuItem>
                    </Menu>
                  </Box>
                </Fade>
              ) : (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Button
                    onClick={handleLoginMenuClick}
                    variant="outlined"                    sx={{
                      borderColor: '#2e7d5a',
                      color: '#2e7d5a',
                      textTransform: 'none',
                      fontWeight: 600,
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      '&:hover': {
                        borderColor: '#4caf50',
                        background: 'rgba(46, 125, 90, 0.1)',
                        transform: 'translateY(-2px)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Login
                  </Button>

                  <Menu
                    anchorEl={loginMenuAnchor}
                    open={loginMenuOpen}
                    onClose={handleLoginMenuClose}
                    TransitionComponent={Zoom}
                    PaperProps={{
                      sx: {
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: 3,
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                        minWidth: 180
                      }
                    }}
                  >                    <MenuItem 
                      component={NavLink} 
                      to="/login" 
                      onClick={handleLoginMenuClose}
                      sx={{
                        py: 1.5,
                        '&:hover': {
                          background: 'rgba(46, 125, 90, 0.1)'
                        }
                      }}
                    >
                      <PersonIcon sx={{ mr: 2, fontSize: 20 }} />
                      Login as Patient
                    </MenuItem>
                    <MenuItem 
                      component={NavLink} 
                      to="/doctorlogin" 
                      onClick={handleLoginMenuClose}
                      sx={{
                        py: 1.5,
                        '&:hover': {
                          background: 'rgba(46, 125, 90, 0.1)'
                        }
                      }}
                    >
                      <HospitalIcon sx={{ mr: 2, fontSize: 20 }} />
                      Login as Doctor
                    </MenuItem>
                  </Menu>

                  <Button
                    variant="contained"
                    component={Link}
                    to="/SignUp"                    sx={{
                      background: 'linear-gradient(135deg, #2e7d5a 0%, #4caf50 100%)',
                      color: 'white',
                      textTransform: 'none',
                      fontWeight: 600,
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      boxShadow: '0 4px 15px 0 rgba(46, 125, 90, 0.3)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px 0 rgba(46, 125, 90, 0.4)',
                        background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Sign Up
                  </Button>
                </Box>
              )}
            </Box>
          </>
        ) : (
          /* Mobile Navigation */
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {item && is_admin === "false" && (
              <Tooltip title={`Welcome, ${localStorage.getItem("user") || 'User'}`}>
                <IconButton
                  onClick={handleClick}                  sx={{
                    background: 'linear-gradient(135deg, #2e7d5a 0%, #4caf50 100%)',
                    color: 'white',
                    '&:hover': {
                      transform: 'scale(1.1)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Avatar sx={{ width: 28, height: 28 }}>
                    <PersonIcon sx={{ fontSize: 18 }} />
                  </Avatar>
                </IconButton>
              </Tooltip>
            )}
            <Drawor />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
