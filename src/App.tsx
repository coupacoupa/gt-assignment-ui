import './App.css';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import PersistentDrawerLeft from './modules/PersistentDrawerLeft';
import { routesData } from './routes/routesData';
import { useContext } from 'react';
import { UserProvider } from './common/contexts/userContext';

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
