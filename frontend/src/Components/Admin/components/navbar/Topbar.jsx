import React, { useState } from "react";
import { Box, IconButton, Menu, useTheme, MenuItem, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext} from "../../theme";
import { useNavigate } from "react-router-dom";

import { LightModeOutlined } from "@mui/icons-material";
import { DarkModeOutlined } from "@mui/icons-material";

import { PersonOutline } from "@mui/icons-material";


const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const navigate = useNavigate();
  
  const colorMode = useContext(ColorModeContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center",
      p: 3,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(129, 199, 132, 0.1)',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
    }}>
      <Box>
        <Typography variant="h5" sx={{ 
          fontWeight: 600,
          background: 'linear-gradient(135deg, #81c784 0%, #4caf50 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Health Haven Hospital
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Administrative Dashboard
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <IconButton 
          onClick={colorMode.toggleColorMode}
          sx={{
            backgroundColor: 'rgba(129, 199, 132, 0.1)',
            color: '#4caf50',
            '&:hover': {
              backgroundColor: 'rgba(129, 199, 132, 0.2)',
            }
          }}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>

        <IconButton 
          onClick={handleClick}
          sx={{
            backgroundColor: 'rgba(129, 199, 132, 0.1)',
            color: '#4caf50',
            '&:hover': {
              backgroundColor: 'rgba(129, 199, 132, 0.2)',
            }
          }}
        >
          <PersonOutline />
        </IconButton>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          PaperProps={{
            sx: {
              mt: 1,
              borderRadius: 2,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
              border: '1px solid rgba(129, 199, 132, 0.1)',
            }
          }}
        >
          <MenuItem
            onClick={() => {
              localStorage.clear();
              navigate("/");
              window.location.reload("true");
            }}
            sx={{
              color: '#f44336',
              '&:hover': {
                backgroundColor: 'rgba(244, 67, 54, 0.05)',
              }
            }}
          >
            <Typography variant="body2" fontWeight={500}>
              Logout
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Topbar;
