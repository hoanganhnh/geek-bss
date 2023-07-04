import * as React from "react";
import { useRouter } from "next/router";
import {
  Grid,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DevicesIcon from "@mui/icons-material/Devices";
import SettingsIcon from "@mui/icons-material/Settings";
import RestoreIcon from "@mui/icons-material/Restore";

interface AppBarContainerProps {
  children: React.ReactNode;
}

function AppBarContainer({ children }: AppBarContainerProps) {
  const router = useRouter();
  return (
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
        {children}
      </Grid>
    </Grid>
  );
}

export default AppBarContainer;
