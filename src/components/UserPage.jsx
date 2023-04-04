import { Link } from "react-router-dom";


const UserPage = () => {
  return (
    <div className="UserLogin">
      <div className="loginpage1">
        <div className="rightside1">
          <div className="content11">
            <h1>User Login Page</h1>
            <hr />
          </div>
          <div className="form1">
            <form action="" >
              <div className="side">
                <input required autoFocus type="email" placeholder="Enter emial address" /><hr />
                <input required type="password" placeholder="Enter password" /><hr /><br />
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

export default UserPage;