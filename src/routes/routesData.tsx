import { IRouteItem } from '../types/routes';
import SubmissionForm from '../pages/SubmissionForm';
import SubmissionStatus from '../pages/SubmissionStatus';

export const routesData: IRouteItem[] = [
  { label: 'Home', path: '/', element: <SubmissionStatus />, showOnMenu: false },
  { label: 'New Submit', path: '/submit', element: <SubmissionForm />, showOnMenu: true },
  { label: 'View Submissions', path: '/status', element: <SubmissionStatus />, showOnMenu: true },
];
