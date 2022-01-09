import React from 'react';
import { useCreateNewSubmission } from '../../common/hooks/submission';

const SubmissionForm = () => {
  const { isLoading, isError, data, error, mutate } = useCreateNewSubmission({
    agencyName: 'abc',
    contactNumber: '12345',
    email: 'email@email.com',
    feedback: 'feedback',
    name: 'name',
  });

  return (
    <div>
      <p>hello form</p>
      <button onClick={() => mutate()}>Submit</button>
      <p>{JSON.stringify(data)}</p>
      <p>{JSON.stringify(error)}</p>
    </div>
  );
};

export default SubmissionForm;
