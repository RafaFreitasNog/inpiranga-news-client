import { Fragment } from 'react';
import LoginArea from '../../components/loginSection';
import './style.css'

function LoginPage() {
  return (
    <Fragment>
      <div id='login-background-conteiner' className='grid1200'>
        <LoginArea/>
      </div>
    </Fragment>
  );
}

export default LoginPage;