import { ChangeEvent } from "react";
import { Box, IconButton, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

interface QuickSearchToolbarProps {
  value: string;
  clearSearch: () => void;
  onChange: (e: ChangeEvent) => void;
  onClick?: () => void;
}

const QuickSearchToolbar = ({
  value,
  onChange,
  clearSearch,
  onClick,
}: QuickSearchToolbarProps) => {
  return (
    <Box
      sx={{
        p: 2,
        pb: 0,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "flex-end",
      }}
    >
      <TextField
        variant="standard"
        value={value}
        onChange={onChange}
        placeholder="Search…"
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              size="small"
              title="Clear"
              aria-label="Clear"
              onClick={clearSearch}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          ),
        }}
        sx={{
          width: {
            xs: 1,
            sm: "auto",
          },
          m: (theme) => theme.spacing(1, 0.5, 1.5),
          "& .MuiSvgIcon-root": {
            mr: 0.5,
          },
          "& .MuiInput-underline:before": {
            borderBottom: 1,
            borderColor: "divider",
          },
        }}
      />
      <Button sx={{ textTransform: "none" }} onClick={onClick}>
        Search
      </Button>
    </Box>
  );
};

export default QuickSearchToolbar;
