import React from "react";
import Link from "next/link";
import { Toolbar, Button, Typography, Container } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";

interface HeaderProps {
  title: string;
  username?: string;
}

function Header({ title, username }: HeaderProps) {
  return (
    <Container maxWidth="xl">
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button size="small" sx={{ display: ["none", "block"] }}>
          <Link href="/home">Home</Link>
        </Button>
        <SwipeableTemporaryDrawer />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <Button size="small" sx={{ textTransform: "none" }}>
          <AccountCircleIcon />
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ display: ["none", "block"] }}
          >
            {username}
          </Typography>
        </Button>
      </Toolbar>
    </Container>
  );
}

export default React.memo(Header);
