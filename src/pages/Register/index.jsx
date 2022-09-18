import { Fragment, useState } from 'react';
import RegisterSection from '../../components/registerSection';
import './style.css'

function Register() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleNameChange(inputValue) {
    setName(inputValue)
  }
  function handleEmailChange(inputValue) {
    setEmail(inputValue)
  }
  function handlePasswordChange(inputValue) {
    setPassword(inputValue)
  }

  return (
    <Fragment>
      <div id='register-background-conteiner' className='grid1200'>
        <RegisterSection
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}/>
      </div>
    </Fragment>
  );
}

export default Register;