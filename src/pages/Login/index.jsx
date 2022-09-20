import { Fragment, useState } from 'react';
import { Navigate } from 'react-router-dom';
import LoginArea from '../../components/loginSection';
import ColumnistService from '../../services/columnist';
import UserService from '../../services/user';
import './style.css'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isColumnist, setIsColumnist] = useState(false)
  const [error, setError] = useState('')
  const [redirect, setRedirect] = useState(false)

  if (redirect) {
    return <Navigate to="/menu" />
  }

  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    if (isColumnist) {
      try {
        const user = await ColumnistService.login({
          email: email,
          password: password
        })
        console.log(user);
        setRedirect(true);
      } catch (error) {
        setError(error.response.data.error)
      }
    } else {
      try {
        const user = await UserService.login({
          email: email,
          password: password
        })
        console.log(user);
        setRedirect(true);
      } catch (error) {
        setError(error.response.data.error)
      }
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
      <div id='login-background-conteiner' className='grid1200'>
        <LoginArea 
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleIsColumnistCheck={handleIsColumnistCheck}
        errorMessage={error}
        handleSubmit={HandleSubmit}/>
      </div>
    </Fragment>
  );
}

export default Login;