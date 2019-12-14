import React from 'react';
import AdminContentLayout from '../layouts/AdminContentLayout';
import AdminLayout from '../layouts/AdminLayout';
import { useQuery } from '@apollo/react-hooks';
import { LIST_LENDER_QUERY } from '../graphql/lender/queries';
import { listLenderQuery } from '../graphql/generated';

const AdminPage = () => {
  const { data, loading } = useQuery<listLenderQuery>(LIST_LENDER_QUERY);

  if (loading) {
    return null;
  }

  console.log(data);
  return (
    <AdminLayout>
      <AdminContentLayout>Hi</AdminContentLayout>
    </AdminLayout>
  );
};

export default AdminPage;
