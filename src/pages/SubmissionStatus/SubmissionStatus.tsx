import { useUser } from 'common/contexts/userContext';
import { useGetAllUserSubmission } from 'common/hooks/submission';
import PageContainer from 'modules/PageContainer';
import PaperHeader from 'modules/PageHeader';
import React, { useEffect } from 'react';
import Accordion from './components/Accordion';
import AccordionPagination from './components/AccordionPagination';

const SubmissionStatus = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const {
    currentUser: { contactNumber = '', email = '' },
  } = useUser();
  const { isLoading, isError, data, error, refetch } = useGetAllUserSubmission({
    email,
    contactNumber,
    page,
    size: rowsPerPage,
  });

  useEffect(() => {
    refetch();
  }, [page, rowsPerPage, contactNumber, email]);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <PageContainer maxWidth={'md'}>
      <>
        <PaperHeader title={'Submission Status'} subTitle={'View all your submission status'} />
        <Accordion submissionStatus={data} />
        <AccordionPagination
          page={page}
          rowsPerPage={rowsPerPage}
          count={data?.totalCount || 0}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </>
    </PageContainer>
  );
};

export default SubmissionStatus;
