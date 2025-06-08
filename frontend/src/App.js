import { Grid, ThemeProvider, createTheme, Box } from "@mui/material";
import Navbar from "./Components/User/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/User/Footer/Footer";
import Report from "./Components/User/pages/Report";

import "./App.css";
import LoginForm from "./Components/User/Login/Login";
import SignUpForm from "./Components/User/Login/Signin";
import Screen from "./Components/User/pages/homecontent/Homepage";
import Contact from "./Components/User/pages/Contact";
import Services from "./Components/User/pages/Services";
import About from "./Components/User/pages/About/About";
import Doctor from "./Components/User/pages/Doctor/Doctor";
import PrivateRoutes from "./Privateroutes";
import Form from "./Components/User/pages/Doctor/Form";
import Doctorlogin from "./Components/User/Login/Doctorlogin";

import { useState} from "react";
import Dashboard from "./Components/Admin/Dashboard";
import PagenotFound from "./Components/User/pages/PagenotFound";
import Appointment from "./Components/User/pages/Doctor/Appointment";
import Room from "./Components/User/pages/Doctor/Room";
import DDashboard from "./Components/Doctor/Dashboard";
import UserProfile from "./Components/User/pages/userProfile";

import AmbulanceBooking from "./Components/User/pages/Ambulance";
import { Toaster } from "react-hot-toast";

// Modern theme configuration
const modernTheme = createTheme({
  palette: {
    primary: {
      main: '#81c784',
      light: '#aed581',
      dark: '#4caf50',
      contrastText: '#fff',
    },
    secondary: {
      main: '#66bb6a',
      light: '#9ccc65',
      dark: '#388e3c',
      contrastText: '#fff',
    },
    background: {
      default: 'transparent',
      paper: 'rgba(255, 255, 255, 0.9)',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#4a5568',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #81c784 0%, #aed581 100%)',
          boxShadow: '0 4px 15px 0 rgba(129, 199, 132, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #66bb6a 0%, #9ccc65 100%)',
            boxShadow: '0 8px 25px 0 rgba(129, 199, 132, 0.6)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          borderRadius: 20,
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 12,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '& fieldset': {
              borderColor: 'rgba(129, 199, 132, 0.3)',
              borderWidth: 2,
            },
            '&:hover fieldset': {
              borderColor: 'rgba(129, 199, 132, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#81c784',
              boxShadow: '0 0 0 3px rgba(129, 199, 132, 0.1)',
            },
          },
        },
      },
    },
  },
});

function App() {
  const [is_admin] = useState(localStorage.getItem("is_admin"));
  const [is_doctor] = useState(localStorage.getItem("is_doctor"));

  return (
    <ThemeProvider theme={modernTheme}>
      <div className="app-container">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(129, 199, 132, 0.2)',
              borderRadius: '12px',
              color: '#1a1a1a',
              fontSize: '14px',
              fontWeight: '500',
            },
            success: {
              iconTheme: {
                primary: '#81c784',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#f44336',
                secondary: '#fff',
              },
            },
          }}
        />
        <Grid container sx={{ minHeight: '100vh' }}>
          {is_doctor ? (
            <Grid item xs={12}>
              <DDashboard />
            </Grid>
          ) : is_admin === 'true' ? (
            <Grid item xs={12}>
              <Dashboard />
            </Grid>
          ) : (
            <>
              <Grid item xs={12}>
                <div className="modern-navbar">
                  <Navbar />
                </div>
              </Grid>
              <Grid item xs={12} sx={{ flex: 1 }}>
                <div className="modern-content animate-fade-in">
                  <Routes>
                    <Route path="/" element={<Screen />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/SignUp" element={<SignUpForm />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/doctor" element={<Doctor />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/doctorlogin" element={<Doctorlogin />} />
                    
                    {/* scope of private routes */}
                    <Route element={<PrivateRoutes />}>
                      <Route path="/form/:id" element={<Form />} />
                      <Route path="/appointment" element={<Appointment />} />
                      <Route path="/room/:roomID" element={<Room />} />
                      <Route path="/ambulance-booking" element={<AmbulanceBooking />} />
                      <Route path="/report/:id" element={<Report />} />
                      <Route path="/userprofile" element={<UserProfile />} />
                    </Route>
                    {/* scope of private routes */}
                    
                    <Route path="*" element={<PagenotFound />} />
                  </Routes>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="modern-footer">
                  <Footer />
                </div>
              </Grid>
            </>
          )}
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
