import React from "react";
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { HomeOutlined, Message } from "@mui/icons-material";
import { HelpOutlined } from "@mui/icons-material";
import { MenuOutlined } from "@mui/icons-material";

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: '#ffffff',
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography sx={{ color: '#ffffff' }}>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar1 = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `linear-gradient(135deg, #2e7d5a 0%, #4caf50 100%) !important`,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "8px 35px 8px 20px !important",
          margin: "4px 8px !important",
          borderRadius: "12px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#ffffff !important",
          backgroundColor: "rgba(255, 255, 255, 0.1) !important",
        },
        "& .pro-menu-item.active": {
          color: "#ffffff !important",
          backgroundColor: "rgba(255, 255, 255, 0.2) !important",
        },
        minHeight: "100vh",
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: '#ffffff',
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 700 }}>
                  Admin Panel
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined sx={{ color: '#ffffff' }} />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Patients"
              to="/Users"
              icon={<HelpOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Enquiries"
              to="/Enquery"
              icon={<Message />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Ambulance Service"
              to="/ambulance"
              icon={<Message />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Add Doctor"
              to="/AddDoctor"
              icon={<Message />}
              selected={selected}
              setSelected={setSelected}
            />
            
            <Item
              title="Chat"
              to="/chat"
              icon={<Message />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar1;
