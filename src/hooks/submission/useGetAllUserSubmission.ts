import { useQuery } from 'react-query';
import axios from 'axios';

export const getAllUserSubmission = async (email: string, contactNumber: string) => {
  const response = await axios
    .get('http://localhost:8080/api/v1/submissions', {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        email,
        contactNumber,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response.data.message;
    });

  return response.data;
};

export default function useGetAllUserSubmission(email: string, contactNumber: string) {
  return useQuery('getAllUserSubmissions', () => getAllUserSubmission(email, contactNumber));
}
