import { useRef } from "react";
import "../styles/Admin_user.css"
import { useNavigate } from "react-router-dom";
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
        <div className="leftside1">
          <img src="https://t4.ftcdn.net/jpg/04/60/71/01/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg" alt="" />
        </div>
        <div className="rightside1">
          <div className="content11">
            <h1>Admin Login Page</h1>
            <hr />
          </div>
          <div className="form1">
            <form action="" onSubmit={adminLogin}>
              <div className="side">
                <h3>Name:</h3>
                <h3>Password:</h3>
              </div>
              <div className="side">
                <input ref={email} type="email" placeholder="Enter emial address" />
                <input ref={password} type="password" placeholder="Enter password" />
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminPage;