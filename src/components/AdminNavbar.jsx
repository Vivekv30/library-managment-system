import { Link } from "react-router-dom";
import '../styles/AdminNavbar.css'

const AdminNavbar = () => {
    return ( 
        <div className="adminNavbar">
         <ul>
            <li>
               <Link className="link" to=''>
                  <div className="profile">
                     <img width='60%' src="https://images.statusfacebook.com/profile_pictures/real-desi-girls/desi-girl-profile-pic-03.jpg" alt="" />
                     <h4>catriona Hendrenson</h4>
                  </div>
               </Link>
            </li>
            <li><Link className="link" to=''>Home</Link></li>
            <li><Link className="link" to='booklist'>Add books</Link></li>
            <li><Link className="link" to=''>Add Users</Link></li>
            <li><Link className="link" to=''>Booklist</Link></li>
            <li><Link className="link" to=''>User-List</Link></li>
            <li><Link className="link" to=''>Signout</Link></li>
         </ul>
        </div>
     );
}
 
export default AdminNavbar;