import '../styles/Landingpage.css'

import { Link } from "react-router-dom";
const LnadingPage = () => {
    return ( 
        <div className="landingPage">
            <h1>login to...?</h1>
            <div>
                <Link to='/adminpage'>Admin</Link>
                <Link to='/userpage'>User</Link>
            </div>
        </div>
     );
}
 
export default LnadingPage;