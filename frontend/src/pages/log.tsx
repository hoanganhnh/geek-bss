import React from "react";
import { Box } from "@mui/material";

import SEO from "@/components/common/SEO";
import Header from "@/components/common/Header";
import { useUser } from "@/contexts/AuthenticateProvider";

function Log() {
  const { user } = useUser();

  return (
    <Box>
      <SEO title="Log" />
      <Header title="" username={user?.username} />
    </Box>
  );
}

export default Log;
