import '../styles/Landingpage.css'

import { Link } from "react-router-dom";
const LnadingPage = () => {
    return ( 
        <div className="landing">
            <div className="landingPage">
            <h1>login by</h1>
            <div>
                <Link className='link' to='/adminpage'><i class="fa-solid fa-user-large"></i><h3>Admin</h3></Link>
                <Link className='link' to='/userpage'><i class="fa-solid fa-users"></i><h3>User</h3></Link>
            </div>
        </div>
        </div>
     );
}
 
export default LnadingPage;