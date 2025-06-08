import * as React from "react";
import { 
  Box, 
  Grid, 
  Typography, 
  Card, 
  CardContent, 
  IconButton,
  Avatar,
  Chip,
  Container,
  Paper,
  Fade,
  Grow
} from "@mui/material";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";
import { 
  Delete as DeleteIcon,
  Person as PersonIcon,
  MedicalServices as MedicalIcon,
  Group as GroupIcon,
  TrendingUp as TrendingIcon,
  CalendarToday as CalendarIcon
} from "@mui/icons-material";
import axios from "axios";
import { useEffect } from "react";

const StatsCard = ({ title, value, icon, color, change }) => (
  <Grow in={true} timeout={1000}>
    <Card className="modern-card modern-stats-card">
      <CardContent sx={{ p: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 500, mb: 1 }}>
              {title}
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700, color: color, mb: 1 }}>
              {value}
            </Typography>
            {change && (
              <Chip 
                label={change} 
                size="small" 
                sx={{ 
                  backgroundColor: 'rgba(129, 199, 132, 0.1)',
                  color: '#81c784',
                  fontWeight: 600
                }}
              />
            )}
          </Box>
          <Avatar sx={{ 
            backgroundColor: `${color}20`,
            color: color,
            width: 56,
            height: 56
          }}>
            {icon}
          </Avatar>
        </Box>
      </CardContent>
    </Card>
  </Grow>
);

const columns = [
  { 
    field: "name", 
    headerName: "Doctor Name", 
    width: 200,
    renderCell: (params) => (
      <Box display="flex" alignItems="center" gap={2}>
        <Avatar sx={{ backgroundColor: '#81c784', width: 32, height: 32 }}>
          <PersonIcon fontSize="small" />
        </Avatar>
        <Typography variant="body2" fontWeight={600}>
          {params.value}
        </Typography>
      </Box>
    )
  },
  {
    field: "expertise",
    headerName: "Specialization",
    width: 400,
    renderCell: (params) => {
      const expertise = params.value || [];
      return (
        <Box display="flex" gap={1} flexWrap="wrap">
          {expertise.slice(0, 3).map((exp, index) => (
            <Chip 
              key={index}
              label={exp} 
              size="small"
              sx={{ 
                backgroundColor: 'rgba(129, 199, 132, 0.1)',
                color: '#4caf50',
                fontWeight: 500
              }}
            />
          ))}
          {expertise.length > 3 && (
            <Chip 
              label={`+${expertise.length - 3}`} 
              size="small"
              variant="outlined"
            />
          )}
        </Box>
      );
    },
  },
  {
    field: "date",
    headerName: "Available Times",
    width: 250,
    renderCell: (params) => {
      const dates = params.value || [];
      return (
        <Box display="flex" alignItems="center" gap={1}>
          <CalendarIcon fontSize="small" color="primary" />
          <Typography variant="body2">
            {dates.length > 0 ? dates.join(", ") : "Not Available"}
          </Typography>
        </Box>
      );
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 100,
    renderCell: (params) => {
      const handleDelete = async () => {
        const token = localStorage.getItem("jwt");
        try {
          await axios.delete(
            `http://localhost:8080/doctor/${params.row._id}`,
            {
              headers: {
                "Content-Type": "application/json",
                authorization: token,
              },
            }
          );
          window.location.reload(true);
        } catch (error) {
          console.log(error.message);
        }
      };

      return (
        <IconButton 
          onClick={handleDelete}
          size="small"
          sx={{ 
            color: '#f44336',
            '&:hover': { 
              backgroundColor: 'rgba(244, 67, 54, 0.1)' 
            }
          }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      );
    },
  },
];

export default function AdminDashboard() {
  const [data, setData] = React.useState([]);
  const [stats, setStats] = React.useState({
    totalDoctors: 0,
    totalPatients: 0,
    appointments: 0,
    revenue: 0
  });

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/public/doctor", {
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("jwt"),
        },
      });

      const rowsWithId = response.data.doctors.map((row, index) => ({
        id: index + 1,
        ...row,
      }));
      setData(rowsWithId);
      
      // Calculate stats
      setStats({
        totalDoctors: response.data.doctors.length,
        totalPatients: 1250, // This would come from your API
        appointments: 340,   // This would come from your API
        revenue: 85000       // This would come from your API
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const CustomNoRowsOverlay = () => (
    <GridOverlay>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2} p={4}>
        <MedicalIcon sx={{ fontSize: 64, color: '#81c784', opacity: 0.5 }} />
        <Typography variant="h6" color="text.secondary">
          Loading doctors...
        </Typography>
      </Box>
    </GridOverlay>
  );

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Fade in={true} timeout={800}>
        <Box>
          {/* Header */}
          <Box mb={4}>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700,
                background: 'linear-gradient(135deg, #81c784 0%, #4caf50 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1
              }}
            >
              Admin Dashboard
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Hospital Management Overview
            </Typography>
          </Box>

          {/* Stats Cards */}
          <Grid container spacing={3} mb={4}>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Total Doctors"
                value={stats.totalDoctors}
                icon={<MedicalIcon />}
                color="#81c784"
                change="+12%"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Total Patients"
                value={stats.totalPatients.toLocaleString()}
                icon={<GroupIcon />}
                color="#4caf50"
                change="+18%"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Appointments"
                value={stats.appointments}
                icon={<CalendarIcon />}
                color="#66bb6a"
                change="+7%"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Revenue"
                value={`$${stats.revenue.toLocaleString()}`}
                icon={<TrendingIcon />}
                color="#388e3c"
                change="+23%"
              />
            </Grid>
          </Grid>

          {/* Doctors Table */}
          <Paper className="modern-card" sx={{ p: 3 }}>
            <Box mb={3}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                Medical Staff Directory
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Manage and monitor all registered doctors
              </Typography>
            </Box>
            
            <Box sx={{ height: 600, width: '100%' }}>
              <DataGrid
                rows={data}
                columns={columns}
                components={{
                  NoRowsOverlay: CustomNoRowsOverlay,
                }}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 10,
                    },
                  },
                }}
                pageSizeOptions={[5, 10, 20]}
                disableRowSelectionOnClick
                sx={{
                  border: 'none',
                  '& .MuiDataGrid-columnHeaders': {
                    backgroundColor: 'rgba(129, 199, 132, 0.1)',
                    borderRadius: '12px 12px 0 0',
                    fontSize: '14px',
                    fontWeight: 600,
                  },
                  '& .MuiDataGrid-cell': {
                    borderBottom: '1px solid rgba(224, 224, 224, 0.5)',
                    fontSize: '14px',
                  },
                  '& .MuiDataGrid-row:hover': {
                    backgroundColor: 'rgba(129, 199, 132, 0.05)',
                  },
                }}
              />
            </Box>
          </Paper>
        </Box>
      </Fade>
    </Container>
  );
}
