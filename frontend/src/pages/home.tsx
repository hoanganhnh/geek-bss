import * as React from "react";
import { useRouter } from "next/router";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import dynamic from "next/dynamic";
import DevicesIcon from "@mui/icons-material/Devices";
import SettingsIcon from "@mui/icons-material/Settings";
import RestoreIcon from "@mui/icons-material/Restore";

import Header from "@/components/common/Header";
import SEO from "@/components/common/SEO";
import { useUser } from "@/contexts/AuthenticateProvider";
import { Device } from "@/interfaces/device.interface";

const Chart = dynamic(
  () => import("react-google-charts").then((com) => com.Chart),
  {
    loading: () => <p>Loading...</p>,
  }
);

const rows = [
  {
    id: 1,
    name: "TV",
    ip: "127.0.0.1",
    created: "2023-07-03 10:07:49",
  },
  {
    id: 2,
    name: "TV",
    ip: "127.0.0.1",
    created: "2023-07-03 10:07:49",
  },
  {
    id: 3,
    name: "TV",
    ip: "127.0.0.1",
    created: "2023-07-03 10:07:49",
  },
  {
    id: 4,
    name: "TV",
    ip: "127.0.0.1",
    created: "2023-07-03 10:07:49",
  },
  {
    id: 5,
    name: "TV",
    ip: "127.0.0.1",
    created: "2023-07-03 10:07:49",
  },
  {
    id: 6,
    name: "TV",
    ip: "127.0.0.1",
    created: "2023-07-03 10:07:49",
  },
];

const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

const toDate = (dateString: string | number | Date, locale = "en") => {
  const date = new Date(dateString);

  const localeString = locale == "ar" ? "en-CA" : "en-GB";

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    day: "2-digit",
    month: "2-digit",
  };

  return date.toLocaleString(localeString, options);
};

function Home() {
  const { user } = useUser();
  const router = useRouter();

  const columns: GridColumns<Device> = [
    {
      flex: 0.055,
      minWidth: 80,
      field: "name",
      headerName: "Device",
      renderCell: ({ row: { name } }) => <Typography>{name}</Typography>,
    },
    {
      flex: 0.15,
      field: "ip",
      minWidth: 200,
      headerName: "IP",
      renderCell: ({ value }) => {
        return <Typography sx={{ color: "text.primary" }}>{value}</Typography>;
      },
    },
    {
      flex: 0.1,
      minWidth: 130,
      field: "created",
      headerName: "Create Date",
      valueGetter: ({ value }) => toDate(value),
      renderCell: ({ value }) => (
        <Typography sx={{ color: "text.primary" }}>{value}</Typography>
      ),
    },
  ];

  return (
    <Box>
      <SEO title="Home" />
      <Header title="" username={user?.username} />
      <Container maxWidth="xl">
        <Grid container display={["none", "flex"]}>
          <Grid item xs={2} display={["none", "none", "block"]}>
            <Box component="nav">
              <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => router.push("/home")}>
                    <ListItemIcon>
                      <DevicesIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={() => router.push("/log")}>
                  <ListItemButton>
                    <ListItemIcon>
                      <RestoreIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logs" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Setting" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={10} paddingLeft={3} paddingTop={3}>
            <Box sx={{ height: 360 }}>
              <DataGrid
                columns={columns}
                rows={rows}
                getRowId={(row) => row?.id}
              />
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Grid container>
            <Grid item xs={12} md={9}>
              <Chart chartType="PieChart" data={data} width={"100%"} />
            </Grid>
            <Grid item xs={12} md={3}>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="device"
                  name="device"
                  label="Device"
                  title="device"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="ip"
                  name="ip"
                  label="IP"
                  title="ip"
                />
                <Button variant="contained" size="medium" sx={{ mt: 3 }}>
                  Add device
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
