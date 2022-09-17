import { Fragment } from 'react';
import './style.css'
import InputText from '../../assets/inputText';
import Button from '../../assets/button';
import DivisionLine from '../../assets/divisionLine';

function LoginArea(props) {
  return ( 
    <Fragment>
      <div id='login-area-conteiner'>
          <div id='login-content-conteiner'>

            <div id='login-logo-conteiner'>
              <h1 id='login-logo' className='bold'>IN</h1>
              <h4 className='bold'>Ipiranga News</h4>
            </div>

            <form action="" id='login-form-conteiner'>
              <p id='loginText' className='upper'>Login</p>
              <div id='inputs-conteiner'>
                <InputText label='E-mail' type='email' placeholder='exemple@email.com' updateFunction={props.handleEmailChange}/>
                <InputText label='Password' type='password' placeholder='password' updateFunction={props.handlePasswordChange}/>
              </div>
              <Button text='sign in' />
              <DivisionLine text='or' />
              <Button text='register' />
            </form>

          </div>
        </div>
    </Fragment>
   );
}

export default LoginArea;