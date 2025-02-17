import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const columns = [
  {
    field: 'listName',
    headerName: 'List name',
    width: 160,
    renderCell: (params) => (
      <TextField
        variant="outlined"
        size="small"
        defaultValue={params.value}
        placeholder='List name'
      />
    ),
  },
  { field: 'contents', headerName: 'contents', width: 160 },
  { field: 'type', headerName: 'type', width: 160 },
  {
    field: 'owner',
    headerName: 'owner',
    width: 200,
    renderCell: (params) => (
      <TextField
        variant="outlined"
        size="small"
        defaultValue={params.value}
        placeholder='Onwer'
      />
    ),
  },
  { field: 'sortBy', headerName: 'Sort by', width: 160 },
  { field: 'creationDate', headerName: 'creation date', width: 160 },
  { field: 'modificationDate', headerName: 'Modification date', width: 160 },
  { field: 'actions', headerName: 'Actions', width: 160 },
];

const rows = [
  { id: 1, listName: '', contents: 'Content 1', type: 'Type 1', owner: 'Owner 1', sortBy: 'Date', creationDate: '2023-01-01', modificationDate: '2023-01-02' },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function Tab1() {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
