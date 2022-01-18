import PageContainer from 'modules/PageContainer';
import PaperHeader from 'modules/PageHeader';
import React from 'react';
import Form from './components/Form';

const SubmissionForm = () => {
  return (
    <PageContainer maxWidth={'sm'}>
      <>
        <PaperHeader title={'New Feedback'} subTitle={'Fill up the form to submit a feedback'} />
        <Form />
      </>
    </PageContainer>
  );
};

export default SubmissionForm;
