import { Fragment, useState } from 'react';
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
      } catch (error) {
        console.log(error.response.data.error)
      }
    } else {
      try {
        const user = await UserService.register({
          name: name,
          email: email,
          password: password
        })
        console.log(user)
      } catch (error) {
        console.log(error.response.data.error)
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
        handleSubmit={HandleSubmit}/>
      </div>
    </Fragment>
  );
}

export default Register;