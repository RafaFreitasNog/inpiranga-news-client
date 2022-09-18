import { Fragment, useState } from 'react';
import LoginArea from '../../components/loginSection';
import './style.css'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleEmailChange(inputValue) {
    setEmail(inputValue)
  }
  function handlePasswordChange(inputValue) {
    setPassword(inputValue)
  }

  return (
    <Fragment>
      <div id='login-background-conteiner' className='grid1200'>
        <LoginArea 
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        currEmail={email}
        currPassword={password}/>
      </div>
    </Fragment>
  );
}

export default Login;