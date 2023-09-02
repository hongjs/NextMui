'use client';

import { Spinner } from '@/components';
import { Typography } from '@/components/mui';
import { useUser } from '@/hooks';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';

const PhotoPage = () => {
  const { fetchUsers, users, loading } = useUser();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <Typography variant="h2" component="div" color="secondary" sx={{ fontWeight: 500 }}>
        Users
      </Typography>
      <Typography gutterBottom variant="h5" component="div" color="secondary">
        Client side API
      </Typography>
      {loading && <Spinner />}
      {!loading && (
        <DataGrid
          columns={[
            {
              field: 'id',
              headerName: 'ID',
            },
            {
              field: 'name',
              headerName: 'Name',
              width: 200,
            },
            {
              field: 'email',
              headerName: 'Email',
              width: 200,
            },
            {
              field: 'company.name',
              headerName: 'Company',
              width: 200,
              valueGetter: (params) => params.row.company.name,
            },
            {
              field: 'address.city',
              headerName: 'City',
              width: 200,
              valueGetter: (params) => params.row.address.city,
            },
          ]}
          rows={users}
          density="comfortable"
        />
      )}
    </>
  );
};

export default PhotoPage;
