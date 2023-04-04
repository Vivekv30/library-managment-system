import { Link } from "react-router-dom";
import '../styles/AdminNavbar.css'

const AdminNavbar = () => {
    return ( 
        <div className="adminNavbar">
         <ul>
            <li>
               <Link className="link plink" to='adminprofile'>
                  <div className="profile">
                     {/* <img src="https://image.shutterstock.com/mosaic_250/2780032/1194497251/stock-photo-portrait-of-smiling-red-haired-millennial-man-looking-at-camera-sitting-in-caf-or-coffeeshop-1194497251.jpg" alt="" /> */}
                     <h4>catriona Hendrenson</h4>
                  </div>
               </Link>
            </li>
            <li><Link className="link" to=''>Home</Link></li>
            <li><Link className="link" to='addBooks'>Add books</Link></li>
            <li><Link className="link" to='addUsers'>Add Users</Link></li>
            <li><Link className="link" to='booklist'>Booklist</Link></li>
            <li><Link className="link" to='userList'>User-List</Link></li>
            <li><Link className="link" to='/'>Signout</Link></li>
         </ul>
        </div>
     );
}
 
export default AdminNavbar;