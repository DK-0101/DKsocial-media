import {useContext} from 'react'
import "./Login.scss"
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {

  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam animi, cupiditate optio explicabo eos laboriosam asperiores dolores, odio perferendis vitae molestias dolor cumque alias quibusdam. Ulam iusto non in ex.</p>
          <span>Don't you have an account?</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='Password'/>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login
