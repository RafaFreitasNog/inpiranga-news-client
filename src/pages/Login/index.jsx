import { Fragment, useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import LoginArea from '../../components/loginSection';
import { Context } from '../../contexts/AuthContext';
import './style.css'

function Login() {

  const { auth, handleLogin } = useContext(Context)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isColumnist, setIsColumnist] = useState(false)
  const [error, setError] = useState('')
  
  if (auth) {
    return <Navigate to="/menu" />
  }

  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const returnedError = await handleLogin(email, password, isColumnist)
      if (returnedError) {
        setError(returnedError.response.data.error)
      }
    } catch (error) {
      console.log(error);
    }
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
      <div id='login-background'>
        <div id='login-grid-conteiner' className='grid1200'>
          <LoginArea 
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleIsColumnistCheck={handleIsColumnistCheck}
          errorMessage={error}
          handleSubmit={HandleSubmit}/>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;