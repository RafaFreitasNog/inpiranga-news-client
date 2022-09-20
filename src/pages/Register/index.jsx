import { Fragment, useState } from 'react';
import { Navigate } from 'react-router-dom';
import RegisterSection from '../../components/registerSection';
import ColumnistService from '../../services/columnist';
import UserService from '../../services/user';
import './style.css'


function Register() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const [isColumnist, setIsColumnist] = useState(false)
  const [error, setError] = useState('')
  const [redirect, setRedirect] = useState(false)

  if (redirect) {
    return <Navigate to='/login' />
  }

  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    if (isColumnist) {
      try {
        const user = await ColumnistService.register({
          name: name,
          email: email,
          password: password
        })
        console.log(user)
        setRedirect(true)
      } catch (error) {
        setError(error.response.data.error)
      }
    } else {
      try {
        const user = await UserService.register({
          name: name,
          email: email,
          password: password
        })
        setRedirect(true)
        console.log(user)
      } catch (error) {
        setError(error.response.data.error)
      }
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
  function handleIsColumnistCheck(isChecked) {
    setIsColumnist(isChecked)
  }

  return (
    <Fragment>
      <div id='register-background-conteiner' className='grid1200'>
        <RegisterSection
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleIsColumnistCheck={handleIsColumnistCheck}
        errorMessage={error}
        handleSubmit={HandleSubmit}/>
      </div>
    </Fragment>
  );
}

export default Register;