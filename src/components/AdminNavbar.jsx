import { Link } from "react-router-dom";

const AdminNavbar = () => {
    return ( 
        <div>
         <Link to='/'>Home</Link>
         <Link to='/booklist'>booklist</Link>
        </div>
     );
}
 
export default AdminNavbar;