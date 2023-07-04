import React from "react";
import { Box, Container, Pagination, Typography } from "@mui/material";
import { DataGrid, GridColumns } from "@mui/x-data-grid";

import SEO from "@/components/common/SEO";
import Header from "@/components/common/Header";
import QuickSearchToolbar from "@/components/QuickSearchToolbar";
import useSearchToolbar from "@/hooks/useSearchToolbar";
import AppBarContainer from "@/components/AppBarContainer";
import { useUser } from "@/contexts/AuthenticateProvider";
import type { Device } from "@/interfaces/device.interface";
import { toDate } from "@/utils/date";
import { rows } from "@/constants";

function Log() {
  const { user } = useUser();

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

  const { handleSearch, searchText, filteredData } = useSearchToolbar({
    rows: rows,
    columns,
  });

  return (
    <Box>
      <SEO title="Log" />
      <Header title="" username={user?.username} />
      <Container maxWidth="xl">
        <AppBarContainer>
          <Box sx={{ height: 600, mt: 1 }}>
            <DataGrid
              columns={columns}
              rows={filteredData}
              getRowId={(row) => row?.id}
              components={{ Toolbar: QuickSearchToolbar }}
              componentsProps={{
                toolbar: {
                  value: searchText,
                  clearSearch: () => handleSearch(""),
                  onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                    handleSearch(event.target.value),
                },
              }}
            />
          </Box>
        </AppBarContainer>
        <Box sx={{ height: 600, mt: 1 }} display={["block", "none"]}>
          <DataGrid
            columns={columns}
            rows={filteredData}
            getRowId={(row) => row?.id}
            components={{ Toolbar: QuickSearchToolbar }}
            componentsProps={{
              toolbar: {
                value: searchText,
                clearSearch: () => handleSearch(""),
                onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                  handleSearch(event.target.value),
              },
            }}
          />
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
          <Pagination count={10} color="primary" />
        </Box>
      </Container>
    </Box>
  );
}

export default Log;
