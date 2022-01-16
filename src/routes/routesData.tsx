import { IRouteItem } from '../common/types/routes';
import FeedbackSubmitted from '../pages/FeedbackSubmitted';
import LoginPage from '../pages/LoginPage';
import SubmissionForm from '../pages/SubmissionForm';
import SubmissionStatus from '../pages/SubmissionStatus';

export const routesData: IRouteItem[] = [
  { label: 'Home', path: '/', element: <SubmissionStatus />, showOnMenu: false },
  { label: 'New Submit', path: '/submit', element: <SubmissionForm />, showOnMenu: true },
  { label: 'View Submissions', path: '/status', element: <SubmissionStatus />, showOnMenu: true },
  { label: 'Submitted', path: '/submitted', element: <FeedbackSubmitted />, showOnMenu: false },
  { label: 'Login', path: '/login', element: <LoginPage />, showOnMenu: false },
];
