import React, { useEffect, useState } from 'react';
import { useGetAllUserSubmission } from '../../hooks/submission';
import Accordion from './components/Accordion';
import AccordionPagination from './components/AccordionPagination';

const SubmissionStatus = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { isLoading, isError, data, error, refetch } = useGetAllUserSubmission(
    'email@email.com',
    '12345',
    page,
    rowsPerPage,
  );

  useEffect(() => {
    refetch();
  }, [page, rowsPerPage]);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <Accordion submissionStatus={data} />
      <AccordionPagination
        page={page}
        rowsPerPage={rowsPerPage}
        count={data?.totalCount || 0}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default SubmissionStatus;
