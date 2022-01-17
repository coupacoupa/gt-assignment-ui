import axios from 'axios';
import { useQuery } from 'react-query';

export const getAllUserSubmission = async (email: string, contactNumber: string, page: number, size: number) => {
  const response = await axios
    .get('http://localhost:8080/api/v1/submissions', {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        email,
        contactNumber,
        page,
        size,
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

export default function useGetAllUserSubmission(email: string, contactNumber: string, page: number, size: number) {
  return useQuery('getAllUserSubmissions', () => getAllUserSubmission(email, contactNumber, page, size));
}
