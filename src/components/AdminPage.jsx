import { useRef } from "react";
import "../styles/Admin_user.css"
import { Link, useNavigate } from "react-router-dom";
const AdminPage = () => {

  let navigate=useNavigate()

  let email=useRef(null)
  let password=useRef(null)
  

let adminLogin=()=>
{
    if(email.current.value === 'vivek123@gmail.com' && password.current.value === '12345')
    {
      navigate('/admin')
    }
    else{
      alert('invalid credentials')

    }
}


  return (
    <div className="AdminLogin">
      <div className="loginpage1">
        <div className="rightside1">
          <div className="content11">
            <h1>Admin Login Page</h1>
            <hr />
          </div>
          <div className="form1">
            <form action="" onSubmit={adminLogin}>
              <div className="side">
                <input required autoFocus ref={email} type="email" placeholder="Enter emial address" /><hr />
                <input required ref={password} type="password" placeholder="Enter password" /><hr /><br />
                <Link className="forgotPassword" to='/'> forgot password?</Link><br/><br/>
              </div>
              <div>
              <button>Sign in</button>
              <Link className="signup">Sign up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminPage;