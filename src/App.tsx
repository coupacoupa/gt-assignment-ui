import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { UserProvider } from './common/contexts/userContext';
import PersistentDrawerLeft from './modules/PersistentDrawerLeft';
import { routesData } from './routes/routesData';

const queryClient = new QueryClient();

function App() {
  return (
    <UserProvider>
      <PersistentDrawerLeft>
        <QueryClientProvider client={queryClient}>
          <Routes>
            {routesData.map(({ path, element }) => {
              return <Route key={path} path={path} element={element} />;
            })}
          </Routes>
        </QueryClientProvider>
      </PersistentDrawerLeft>
    </UserProvider>
  );
}

export default App;
