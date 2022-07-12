import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export const data = [
    {
        "id": 1,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },{
        "id": 2,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },{
        "id": 3,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },{
        "id": 4,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },{
        "id": 5,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },{
        "id": 6,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },{
        "id": 7,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },{
        "id": 8,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },{
        "id": 9,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },{
        "id": 10,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },{
        "id": 11,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },{
        "id": 12,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },{
        "id": 13,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },{
        "id": 14,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },{
        "id": 15,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },{
        "id": 16,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },{
        "id": 17,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },{
        "id": 18,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },{
        "id": 19,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },{
        "id": 20,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },
    {
        "id": 20,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },
    {
        "id": 20,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },
    {
        "id": 20,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },
    {
        "id": 20,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },
    {
        "id": 20,
        "name": "Biscoito com Leite",
        "barcode": 123123123,
        "puchasePrice": 20,
        "saleValue": 30,
    },
    
]

export const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 80},
    { field: 'name', headerName: 'Nome',width: 300  },
    { field: 'barcode', headerName: 'Codigo de Barras', width: 150},
    {
      field: 'puchasePrice',
      headerName: 'Valor de Compra',
      type: 'number',
    },
    {
      field: 'saleValue',
      headerName: 'Valor de Venda',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,

    },
  ];