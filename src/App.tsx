import './App.css';
import { Routes, Route } from 'react-router-dom';
import SubmissionForm from './pages/SubmissionForm';
import SubmissionStatus from './pages/SubmissionStatus';
import { QueryClient, QueryClientProvider } from 'react-query';
import PersistentDrawerLeft from './components/PersistentDrawerLeft';

const routes = [
  { path: '/', element: <SubmissionStatus /> },
  { path: '/submit', element: <SubmissionForm /> },
  { path: '/status', element: <SubmissionStatus /> },
];

const queryClient = new QueryClient();

function App() {
  return (
    <PersistentDrawerLeft>
      <QueryClientProvider client={queryClient}>
        <Routes>
          {routes.map(({ path, element }) => {
            return <Route key={path} path={path} element={element} />;
          })}
        </Routes>
      </QueryClientProvider>
    </PersistentDrawerLeft>
  );
}

export default App;
