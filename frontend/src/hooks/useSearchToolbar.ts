import { useState } from "react";
import { GridColumns, GridRowsProp, GridValidRowModel } from "@mui/x-data-grid";

type Props<T extends GridValidRowModel> = {
  columns: GridColumns<T>;
  rows: GridRowsProp<T>;
};

const useSearchToolbar = <T extends GridValidRowModel>({
  columns,
  rows,
}: Props<T>) => {
  const [searchText, setSearchText] = useState<string>("");
  const [filteredData, setFilteredData] = useState<GridRowsProp<T>>(rows);

  const handleSearch = (searchValue: string) => {
    setSearchText(searchValue);

    const filteredRows = rows.filter((row) => {
      return columns.some((column) => {
        //todo: need refactor
        const cellValue = column.valueGetter
          ? // @ts-ignore
            column.valueGetter({ row, value: row[column.field] })
          : row[column.field];

        if (typeof cellValue === "string") {
          return cellValue.toLowerCase().includes(searchValue.toLowerCase());
        }
        if (typeof cellValue === "number") {
          return cellValue
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        }
        if (typeof cellValue === "boolean") {
          return cellValue
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        }

        return false;
      });
    });

    if (searchValue.length) {
      setFilteredData(filteredRows);
    } else {
      setFilteredData(rows);
    }
  };

  return {
    handleSearch,
    searchText,
    filteredData,
  };
};

export default useSearchToolbar;
