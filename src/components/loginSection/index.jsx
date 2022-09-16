import { Fragment } from 'react';
import './style.css'
import InputText from '../../assets/inputText';

function LoginArea() {
  return ( 
    <Fragment>
      <div id='login-area-conteiner'>
          <div id='login-content-conteiner'>

            <div id='login-logo-conteiner'>
              <h1 id='login-logo' className='bold'>IN</h1>
              <h4 className='bold'>Ipiranga News</h4>
            </div>
            <p className='bold upper'>Login</p>
            <form action="" id='login-form-conteiner'>
              <InputText label='E-mail' type='email' placeholder='exemple@email.com'/>
              <InputText label='Password' type='password' placeholder='password'/>
            </form>

          </div>
        </div>
    </Fragment>
   );
}

export default LoginArea;