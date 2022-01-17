import axios from 'axios';
import { ISubmissionForm } from 'common/types/submission';
import { useMutation } from 'react-query';

const createNewSubmission = async (submissionForm: ISubmissionForm) => {
  const { data } = await axios
    .post(`http://localhost:8080/api/v1/submissions`, submissionForm)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response.data.message;
    });

  return data;
};

export default function useCreateNewSubmission() {
  return useMutation((submissionForm: ISubmissionForm) => createNewSubmission(submissionForm));
}
