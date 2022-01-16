import { IRouteItem } from '../types/routes';
import SubmissionForm from '../pages/SubmissionForm';
import SubmissionStatus from '../pages/SubmissionStatus';
import FeedbackSubmitted from '../pages/FeedbackSubmitted';

export const routesData: IRouteItem[] = [
  { label: 'Home', path: '/', element: <SubmissionStatus />, showOnMenu: false },
  { label: 'New Submit', path: '/submit', element: <SubmissionForm />, showOnMenu: true },
  { label: 'View Submissions', path: '/status', element: <SubmissionStatus />, showOnMenu: true },
  { label: 'Feedback Submitted', path: '/submitted', element: <FeedbackSubmitted />, showOnMenu: false },
];
