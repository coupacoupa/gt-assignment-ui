import { useQuery } from 'react-query';
import axios from 'axios';
import { ISubmissionForm } from '../../types/submission';

const createNewSubmission = async (submissionForm: ISubmissionForm) => {
  const { data } = await axios.post(`localhost:8080/api/v1/submissions`, submissionForm);

  return data;
};

export default function useCreateNewSubmission(submissionForm: ISubmissionForm) {
  return useQuery('getAllUserSubmissions', () => createNewSubmission(submissionForm));
}
