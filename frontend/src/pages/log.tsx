import React from "react";
import {
  Box,
  Button,
  Container,
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid, GridColumns } from "@mui/x-data-grid";

import SEO from "@/components/common/SEO";
import Header from "@/components/common/Header";
import QuickSearchToolbar from "@/components/QuickSearchToolbar";
import AppBarContainer from "@/components/AppBarContainer";
import { useUser } from "@/contexts/AuthenticateProvider";
import type { Log } from "@/interfaces/log.interface";
import { toDate } from "@/utils/date";
import LogService from "@/services/log.service";

function Log() {
  const { user } = useUser();

  const [page, setPage] = React.useState<number>(1);
  const [totalPage, setTotalPage] = React.useState<number>(0);
  const [logs, setLogs] = React.useState<Log[]>([]);
  const [searchText, setSearchText] = React.useState<string>("");

  React.useEffect(() => {
    const handleGetLogs = async () => {
      try {
        const { data, totalPage } = await LogService.getLogs({ page });
        setTotalPage(totalPage);
        setLogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    handleGetLogs();
  }, [page]);

  const columns: GridColumns<Log> = [
    {
      flex: 0.15,
      minWidth: 80,
      field: "name",
      headerName: "Device",
      renderCell: ({ row: { name } }) => <Typography>{name}</Typography>,
      sortable: false,
      filterable: false,
      hideable: false,
    },
    {
      flex: 0.1,
      field: "action",
      minWidth: 200,
      headerName: "Action",
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

  const handleSearchLogs = async () => {
    console.log(searchText);
    if (!searchText) {
      return;
    }
    try {
      const { data } = await LogService.searchLogs({ search: searchText });
      setLogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <SEO title="Log" />
      <Header title="" username={user?.username} />
      <Container maxWidth="xl">
        <AppBarContainer>
          <Box sx={{ height: 600, mt: 1 }}>
            <DataGrid
              columns={columns}
              rows={logs}
              getRowId={(row) => row?.id}
            />
          </Box>
        </AppBarContainer>
        <Box sx={{ height: 600, mt: 1 }} display={["block", "none"]}>
          <DataGrid columns={columns} rows={logs} getRowId={(row) => row?.id} />
        </Box>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          mb={1}
          mt={2}
        >
          <TextField
            label="Text"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button sx={{ ml: 2 }} onClick={handleSearchLogs}>
            Search
          </Button>
        </Box>
        {totalPage > 0 ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={2}
          >
            <Pagination
              count={totalPage}
              color="primary"
              onChange={(_, page) => setPage(page)}
            />
          </Box>
        ) : (
          0
        )}
      </Container>
    </Box>
  );
}

export default Log;
