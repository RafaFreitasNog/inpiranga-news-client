import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../assets/button';
import CheckboxLabel from '../../assets/checkboxLabel';
import DivisionLine from '../../assets/divisionLine';
import InputTextLabel from '../../assets/inputTextLabel';
import './style.css'

function RegisterSection(props) {
  return ( 
    <Fragment>
      <div id='register-area-conteiner'>
        <div id='register-content-conteiner'>
          <div id='register-logo-conteiner'>
            <h1 id='register-logo' className='bold'>IN</h1>
            <h4 className='bold'>Ipiranga News</h4>
          </div>
          <form onSubmit={props.handleSubmit} action="" id='register-form-conteiner'>
              <p id='loginText' className='upper bold'>Register</p>
              <div id='register-inputs-conteiner'>
                <InputTextLabel label='Name' type='text' placeholder='name' updateFunction={props.handleNameChange}/>
                <InputTextLabel label='E-mail' type='email' placeholder='exemple@email.com' updateFunction={props.handleEmailChange}/>
                <InputTextLabel label='Password' type='password' placeholder='password' updateFunction={props.handlePasswordChange}/>
                <CheckboxLabel label='Columnist account' name='isColumnistCheck' updateFunction={props.handleIsColumnistCheck}/>
              </div>
              <Button text='register' />
              <DivisionLine text='or' />
              <Link id='register-page-login-link' to='/login'><Button text='sign in' /></Link>
            </form>
        </div>
      </div>
    </Fragment>
   );
}

export default RegisterSection;