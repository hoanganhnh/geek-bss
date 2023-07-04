import * as React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import { useFormik } from "formik";
import dynamic from "next/dynamic";

import Header from "@/components/common/Header";
import SEO from "@/components/common/SEO";
import { useUser } from "@/contexts/AuthenticateProvider";
import type { Device } from "@/interfaces/device.interface";
import { toDate } from "@/utils/date";
import { deviceValidation } from "@/validations/device.validation";
import AppBarContainer from "@/components/AppBarContainer";
import DeviceService from "@/services/device.service";

const Chart = dynamic(
  () => import("react-google-charts").then((com) => com.Chart),
  {
    loading: () => <p>Loading...</p>,
  }
);

interface ListDevicesProps {
  devices: Device[];
}

function ListDevices({ devices }: ListDevicesProps) {
  const columns: GridColumns<Device> = [
    {
      flex: 0.055,
      minWidth: 80,
      field: "name",
      headerName: "Device",
      renderCell: ({ row: { name } }) => <Typography>{name}</Typography>,
      sortable: false,
      filterable: false,
      hideable: false,
    },
    {
      flex: 0.15,
      field: "ip",
      minWidth: 200,
      headerName: "IP",
      renderCell: ({ value }) => {
        return <Typography sx={{ color: "text.primary" }}>{value}</Typography>;
      },
      sortable: false,
      filterable: false,
      hideable: false,
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
      sortable: false,
      filterable: false,
      hideable: false,
    },
  ];

  return (
    <Box sx={{ height: 360 }}>
      <DataGrid columns={columns} rows={devices} getRowId={(row) => row?.id} />
    </Box>
  );
}

function Home() {
  const { user } = useUser();
  const [devices, setDevices] = React.useState<Device[]>([]);
  const [dataPie, setDataPie] = React.useState<
    Array<[string, number | string]>
  >([]);

  const handleGetNumberDevice = React.useCallback((devices: Device[]) => {
    const mapDevices = new Map<string, number>();
    devices.forEach((device) => {
      if (!mapDevices.get(device.name)) {
        mapDevices.set(device.name, 1);
      } else {
        const value = mapDevices.get(device.name);
        if (typeof value !== "undefined") {
          mapDevices.set(device.name, value + 1);
        }
      }
    });

    return Object.entries(Object.fromEntries(mapDevices));
  }, []);

  const handleGetDevices = React.useCallback(async () => {
    try {
      const data = await DeviceService.getDevices();
      setDevices(data);
      const pies = handleGetNumberDevice(data);
      setDataPie([["Task", "Hours per Day"], ...pies]);
    } catch (error) {
      console.error(error);
      setDevices([]);
    }
  }, [handleGetNumberDevice]);

  React.useEffect(() => {
    handleGetDevices();
  }, [handleGetDevices]);

  const formik = useFormik({
    initialValues: {
      name: "",
      ip: "",
    },
    validationSchema: deviceValidation,
    onSubmit: async (values) => {
      try {
        const data = await DeviceService.createDevice(values);
        if (data.status === 200) {
          await handleGetDevices();
          formik.resetForm();
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Box>
      <SEO title="Home" />
      <Header title="" username={user?.username} />
      <Container maxWidth="xl">
        <AppBarContainer>
          <ListDevices devices={devices} />
        </AppBarContainer>
        <Box minHeight="400px" overflow="hidden">
          <Grid container>
            <Grid item xs={12} md={9}>
              <Chart
                chartType="PieChart"
                data={dataPie}
                width={"100%"}
                height="400px"
                options={{ pieHole: 0.4, is3D: false }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <Box
                component="form"
                noValidate
                sx={{ mt: 3 }}
                onSubmit={formik.handleSubmit}
              >
                <TextField
                  margin="normal"
                  fullWidth
                  id="name"
                  name="name"
                  label="Device"
                  title="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="ip"
                  name="ip"
                  label="IP"
                  title="ip"
                  value={formik.values.ip}
                  onChange={formik.handleChange}
                  error={formik.touched.ip && Boolean(formik.errors.ip)}
                  helperText={formik.touched.ip && formik.errors.ip}
                />
                <Button
                  variant="contained"
                  size="medium"
                  sx={{ mt: 3 }}
                  type="submit"
                >
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
