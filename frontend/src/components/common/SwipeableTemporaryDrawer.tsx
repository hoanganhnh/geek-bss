import * as React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DevicesIcon from "@mui/icons-material/Devices";
import SettingsIcon from "@mui/icons-material/Settings";
import RestoreIcon from "@mui/icons-material/Restore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useUser } from "@/contexts/AuthenticateProvider";

type Anchor = "top" | "left" | "bottom" | "right";

function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const router = useRouter();
  const { user } = useUser();

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const lists = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Stack
          direction="column"
          display="flex"
          padding={3}
          paddingBottom={0}
          marginBottom={3}
          justifyContent="center"
          alignItems="center"
        >
          <AccountCircleIcon sx={{ fontSize: 40 }} />
          <Typography mt={2} sx={{ fontSize: "20px" }}>
            {user?.username}
          </Typography>
        </Stack>
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
  );

  return (
    <Box display={["block", "none"]}>
      <React.Fragment>
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </Button>
        <Box>
          <SwipeableDrawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {lists("left")}
          </SwipeableDrawer>
        </Box>
      </React.Fragment>
    </Box>
  );
}

export default SwipeableTemporaryDrawer;
