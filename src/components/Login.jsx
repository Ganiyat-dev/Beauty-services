import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <>
        <div class="wrapper">
         <div class="title-text">
            <div class="title login">
              Welcome Back
            </div>
         </div>
         <div class="form-container">
            <div class="form-inner">
               <form action="#" class="login">

                  <div class="field">
                     <input type="text" placeholder="Email Address" required/>
                  </div>
                  <div class="field">
                     <input type="password" placeholder="Password" required/>
                  </div>

                  <div class="pass-link">
                     <Link to="#">Forgot password?</Link>
                  </div>

                  <div class="field btn">
                     <div class="btn-layer"></div>
                     <input type="submit" value="Login"/>
                  </div>

                  <div class="signup-link">
                     Not a member? <Link to="/register">Signup now</Link>
                  </div> 
               </form>            
            </div>
         </div>
      </div>
    </>
  )
}

export default Login