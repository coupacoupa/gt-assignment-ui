import { useQuery } from 'react-query';
import axios from 'axios';

const getAllUserSubmission = async (email: string, contactNumber: string) => {
  const { data } = await axios.get(`localhost:8080/api/v1/submissions`, {
    data: JSON.stringify({ email, contactNumber }),
  });

  return data;
};

export default function useGetAllUserSubmission(email: string, contactNumber: string) {
  return useQuery('getAllUserSubmissions', () => getAllUserSubmission(email, contactNumber));
}
