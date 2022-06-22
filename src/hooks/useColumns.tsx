import { useMemo } from "react";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "QTD",
        accessor: "QT"
      },
      {
        Header: "PRODUTO",
        accessor: "PRODUTO"
      },
      {
        Header: "UN",
        accessor: "UN"
      },
      {
        Header: "TOTAL",
        accessor: "TOTAL"
      }
    ],
    []
  );

  return columns;
}