import React from "react";
import { Grid, Typography, Box, Container, Card, CardContent, Fade, Grow } from "@mui/material";
import {
  LocalHospital,
  MedicalServices,
  People,
  Warning,
  Star,
  TrendingUp
} from "@mui/icons-material";
import Screen from "./Slider";
import Gallery from "./Gallery";

const Homepage = () => {
  const features = [
    {
      icon: <LocalHospital sx={{ fontSize: 40, color: '#667eea' }} />,
      title: "Expert Medical Care",
      description: "World-class healthcare services with experienced professionals"
    },
    {
      icon: <MedicalServices sx={{ fontSize: 40, color: '#667eea' }} />,
      title: "Advanced Equipment",
      description: "State-of-the-art medical technology for accurate diagnosis"
    },
    {
      icon: <People sx={{ fontSize: 40, color: '#667eea' }} />,
      title: "Qualified Doctors",
      description: "Highly skilled and experienced medical professionals"
    },
    {
      icon: <Warning sx={{ fontSize: 40, color: '#667eea' }} />,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency medical services"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Patients", icon: <People sx={{ color: '#667eea' }} /> },
    { number: "50+", label: "Expert Doctors", icon: <LocalHospital sx={{ color: '#667eea' }} /> },
    { number: "98%", label: "Success Rate", icon: <TrendingUp sx={{ color: '#667eea' }} /> },
    { number: "4.9", label: "Patient Rating", icon: <Star sx={{ color: '#667eea' }} /> }
  ];

  return (
    <Box sx={{ 
      background: 'transparent',
      minHeight: '100vh',
      overflow: 'hidden'
    }}>
      {/* Hero Section */}
      <Box sx={{ 
        position: 'relative',
        mb: 8,
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
      }}>
        <Screen />
      </Box>

      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
        {/* Welcome Section */}
        <Fade in={true} timeout={1000}>
          <Box sx={{ 
            textAlign: 'center', 
            mb: 8,
            py: 6,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            borderRadius: 4,
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
          }}>
            <Typography 
              variant="h2" 
              className="modern-heading-1"
              sx={{ 
                mb: 3,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Welcome to Health Haven Hospital
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#6b7280',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.8,
                fontSize: '1.1rem'
              }}
            >
              "I am at an age where I just want to be fit and healthy. Our bodies are our 
              responsibility! So start caring for your body and it will care for you. Eat clean, 
              live well, and trust our expert medical team to guide you on your health journey."
            </Typography>
          </Box>
        </Fade>

        {/* Features Section */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            className="modern-heading-2"
            sx={{ 
              textAlign: 'center', 
              mb: 6,
              color: '#1a1a1a'
            }}
          >
            Why Choose Health Plus?
          </Typography>
          
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Grow in={true} timeout={1000 + index * 200}>
                  <Card 
                    className="modern-card"
                    sx={{ 
                      height: '100%',
                      textAlign: 'center',
                      p: 3,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-12px)',
                        boxShadow: '0 32px 64px -12px rgba(0, 0, 0, 0.25)'
                      }
                    }}
                  >
                    <CardContent sx={{ p: 0 }}>
                      <Box sx={{ 
                        mb: 3,
                        p: 2,
                        borderRadius: 3,
                        background: 'rgba(102, 126, 234, 0.1)',
                        display: 'inline-block'
                      }}>
                        {feature.icon}
                      </Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          mb: 2, 
                          fontWeight: 600,
                          color: '#1a1a1a'
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#6b7280',
                          lineHeight: 1.6
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Stats Section */}
        <Fade in={true} timeout={1500}>
          <Box sx={{ 
            mb: 8,
            py: 6,
            px: 4,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: 4,
            color: 'white',
            textAlign: 'center'
          }}>
            <Typography 
              variant="h3" 
              sx={{ 
                mb: 6,
                fontWeight: 700,
                color: 'white'
              }}
            >
              Our Impact in Numbers
            </Typography>
            
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    gap: 2
                  }}>
                    <Box sx={{ 
                      p: 2,
                      borderRadius: 3,
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)'
                    }}>
                      {stat.icon}
                    </Box>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        fontWeight: 800,
                        fontSize: { xs: '2rem', md: '3rem' },
                        lineHeight: 1
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 500,
                        opacity: 0.9
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>

        {/* Gallery Section */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            className="modern-heading-2"
            sx={{ 
              textAlign: 'center', 
              mb: 6,
              color: '#1a1a1a'
            }}
          >
            Our Medical Gallery
          </Typography>
          
          <Box sx={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            borderRadius: 4,
            p: 4,
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
          }}>
            <Gallery />
          </Box>
        </Box>

        {/* Call to Action */}
        <Fade in={true} timeout={2000}>
          <Box sx={{ 
            textAlign: 'center',
            py: 8,
            px: 4,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            borderRadius: 4,
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            mb: 4
          }}>
            <Typography 
              variant="h4" 
              sx={{ 
                mb: 3,
                fontWeight: 700,
                color: '#1a1a1a'
              }}
            >
              Ready to Take Care of Your Health?
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 4,
                color: '#6b7280',
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              Book an appointment with our expert doctors and start your journey to better health today.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                className="modern-btn"
                onClick={() => window.location.href = '/doctor'}
                style={{
                  fontSize: '1.1rem',
                  padding: '12px 32px'
                }}
              >
                Find a Doctor
              </button>
              <button 
                className="modern-btn"
                onClick={() => window.location.href = '/services'}
                style={{
                  fontSize: '1.1rem',
                  padding: '12px 32px',
                  background: 'transparent',
                  color: '#667eea',
                  border: '2px solid #667eea'
                }}
              >
                Our Services
              </button>
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Homepage;
