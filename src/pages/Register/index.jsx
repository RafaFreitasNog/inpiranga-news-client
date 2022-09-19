import { Fragment, useState } from 'react';
import RegisterSection from '../../components/registerSection';
import ColumnistService from '../../services/columnist';
import './style.css'


function Register() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await ColumnistService.register({
        name: name,
        email: email,
        password: password
      })
      console.log(user)
    } catch (error) {
      console.log(error.response.data.error)
    }
  }

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
        handlePasswordChange={handlePasswordChange}
        handleSubmit={HandleSubmit}/>
      </div>
    </Fragment>
  );
}

export default Register;