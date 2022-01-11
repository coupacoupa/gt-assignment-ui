import React, { useEffect } from 'react';
import { useGetAllUserSubmission } from '../../common/hooks/submission';
import { ISubmissionStatus } from '../../common/types/submission';
import Accordion from './components/Accordion';

const SubmissionStatus = () => {
  const { isLoading, isError, data, error } = useGetAllUserSubmission('email@email.com', '12345');

  const getSubmissionStatus = (): ISubmissionStatus[] => {
    return [
      {
        name: 'name',
        email: 'email',
        agencyName: 'agencyName',
        contactNumber: '123123',
        createdDate: '11/1/2022',
        feedback: 'this is a  very long and detailed feedback',
        feedbackStatus: 'Accepted',
        submissionNo: 1,
      },
      {
        name: 'name',
        email: 'email',
        agencyName: 'agencyName',
        contactNumber: '123123',
        createdDate: '11/3/2022',
        feedback: 'this is a  very long and detailed feedback',
        feedbackStatus: 'Rejected',
        submissionNo: 2,
      },
      {
        name: 'name',
        email: 'email',
        agencyName: 'agencyName',
        contactNumber: '123123',
        createdDate: '5/1/2021',
        feedback: 'this is a  very long and detailed feedback',
        feedbackStatus: 'Accepted',
        submissionNo: 3,
      },
    ];
  };

  return (
    <div>
      <Accordion submissionStatus={getSubmissionStatus()} />
    </div>
  );
};

export default SubmissionStatus;
