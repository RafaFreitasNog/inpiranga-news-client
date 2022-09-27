import './App.css';
import { Fragment } from 'react';
import Routing from './routes/routes';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <Routing/>
      </AuthProvider>
    </Fragment>
  );
}

export default App;
