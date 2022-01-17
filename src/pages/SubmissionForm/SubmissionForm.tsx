import PaperHeader from 'modules/PageHeader';
import React from 'react';
import Form from './components/Form';

const SubmissionForm = () => {
  return (
    <div>
      <PaperHeader title={'New Feedback'} subTitle={'Fill up the form to submit a feedback'} />
      <Form />
    </div>
  );
};

export default SubmissionForm;
