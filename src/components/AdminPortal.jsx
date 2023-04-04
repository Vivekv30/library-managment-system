import { Route, Routes } from "react-router-dom";
import AdminHome from "./AdminHome";
import BookList from "./Booklist";
import AdminNavbar from "./AdminNavbar";
import '../styles/AdminPortal.css'

const AdminPortal = () => {
    return ( 
        <div className="adminPortal">
            <AdminNavbar/>
            <Routes>
                <Route path='/' element={<AdminHome/>}/>
                <Route path='/booklist' element={<BookList/>}/>
            </Routes>
        </div>
     );
}
 
export default AdminPortal;