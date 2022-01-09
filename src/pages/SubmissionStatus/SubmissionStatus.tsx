import React, { useEffect } from 'react';
import { useGetAllUserSubmission } from '../../common/hooks/submission';

const SubmissionStatus = () => {
  const { isLoading, isError, data, error } = useGetAllUserSubmission('email@email.com', '12345');

  return (
    <div>
      <p>hello status</p>
      <p>{JSON.stringify(data)}</p>
      <p>{JSON.stringify(error)}</p>
    </div>
  );
};

export default SubmissionStatus;
