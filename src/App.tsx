import './App.css';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import PersistentDrawerLeft from './components/PersistentDrawerLeft';
import { routesData } from './routes/routesData';

const queryClient = new QueryClient();

function App() {
  return (
    <PersistentDrawerLeft>
      <QueryClientProvider client={queryClient}>
        <Routes>
          {routesData.map(({ path, element }) => {
            return <Route key={path} path={path} element={element} />;
          })}
        </Routes>
      </QueryClientProvider>
    </PersistentDrawerLeft>
  );
}

export default App;
