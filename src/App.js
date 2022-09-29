import './App.css';
import { Fragment } from 'react';
import Routing from './Routes/routes';
import { AuthProvider } from './Contexts/AuthContext';

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
