import axios from 'axios';
import endpoints from 'common/constants/endpointConstants';
import { useQuery } from 'react-query';

interface IParams {
  email: string;
  contactNumber: string;
  page: number;
  size: number;
}

export const getAllUserSubmission = async (params: IParams) => {
  const response = await axios
    .get(endpoints.getAllSubmissions, {
      headers: {
        'Content-Type': 'application/json',
      },
      params,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response.data.message;
    });

  return response.data;
};

export default function useGetAllUserSubmission(params: IParams) {
  return useQuery('getAllUserSubmissions', () => getAllUserSubmission(params));
}
