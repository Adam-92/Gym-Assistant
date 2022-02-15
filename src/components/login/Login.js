import './login_style.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faUser, faKey } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    return(
      <article className='center-Login'>
        <div className='container-Login'>
          <section className='center-icon-Login'>
                <FontAwesomeIcon icon={faDumbbell} color='white' size='8x'/>
          </section>
          <section className='center-form-Login'>
            <form>
              <div className='positon-Login'>
                <FontAwesomeIcon icon={faUser} color='white' size='2x' className='positon-absolute-Login'/>
                <input type="text" name="login" className='login-input-Login' placeholder='Username'></input>
              </div>
              <div className='positon-Login'>
                <FontAwesomeIcon icon={faKey} color='white' size='2x' className='positon-absolute-Login'/>
                <input type="text" name="password" className='password-input-Login' placeholder='Password'></input>
              </div>
              <button type="submit" className='submit-Login'>Log In</button>
            </form>
          </section>
          <div className='container-links-Login'>
            <p className='link-Login'> Create new account </p>
            <p className='link-Login'> Forgot your password ?</p>
          </div>
        </div>
      </article>
    )
}

export default Login;