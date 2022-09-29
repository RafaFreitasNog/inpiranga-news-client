import { Fragment } from 'react';
import './style.css'
import InputTextLabel from '../../Assets/inputTextLabel';
import Button from '../../Assets/button';
import DivisionLine from '../../Assets/divisionLine';
import { Link } from 'react-router-dom';
import CheckboxLabel from '../../Assets/checkboxLabel';

function LoginArea(props) {

  return ( 
    <Fragment>
      <div id='login-area-conteiner'>
          <div id='login-content-conteiner'>

            <div id='login-logo-conteiner'>
              <h1 id='login-logo' className='bold'>IN</h1>
              <h4 className='bold'>Ipiranga News</h4>
            </div>

            <form onSubmit={props.handleSubmit} action="" id='login-form-conteiner'>
              <p id='loginText' className='upper bold'>Login</p>
              <div id='login-inputs-conteiner'>
                <InputTextLabel label='E-mail' type='email' placeholder='exemple@email.com'
                updateFunction={props.handleEmailChange}/>
                <InputTextLabel label='Password' type='password' placeholder='password'
                updateFunction={props.handlePasswordChange}/>
                <CheckboxLabel label='Columnist account' name='isColumnistCheck' 
                updateFunction={props.handleIsColumnistCheck}/>
                <p className='error'>{props.errorMessage}</p>
              </div>
              <Button text='sign in' />
              <DivisionLine text='or' />
              <Link id='login-page-register-link' to='/register'><Button text='register' /></Link>
            </form>

          </div>
        </div>
    </Fragment>
   );
}

export default LoginArea;