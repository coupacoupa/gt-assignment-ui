import React, { useEffect } from 'react';
import { useGetAllUserSubmission } from '../../hooks/submission';
import { ISubmissionStatus } from '../../types/submission';
import Accordion from './components/Accordion';

const SubmissionStatus = () => {
  const { isLoading, isError, data, error } = useGetAllUserSubmission('email@email.com', '12345');

  return (
    <div>
      <Accordion submissionStatus={data} />
    </div>
  );
};

export default SubmissionStatus;
