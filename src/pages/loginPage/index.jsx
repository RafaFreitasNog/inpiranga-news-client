import { Fragment, useState } from 'react';
import LoginArea from '../../components/loginSection';
import './style.css'

function LoginPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleEmailChange(inputValue) {
    setEmail(inputValue)
  }
  function handlePasswordChange(inputValue) {
    setPassword(inputValue)
  }

  console.log('Rendered');

  return (
    <Fragment>
      <div id='login-background-conteiner' className='grid1200'>
        <LoginArea 
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}/>
      </div>
    </Fragment>
  );
}

export default LoginPage;