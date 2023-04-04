import { Route, Routes } from "react-router-dom";
import AdminHome from "./AdminHome";
import BookList from "./Booklist";
import AdminNavbar from "./AdminNavbar";
import '../styles/AdminPortal.css'
import AddBooks from "./AddBooks";
import AddUsers from "./AddUsers";
import UserList from "./UserList"
import AdminProfile from "./AdminProfile";

const AdminPortal = () => {
    return ( 
        <div className="adminPortal">
            <AdminNavbar/>
            <Routes>
                <Route path='/' element={<AdminHome/>}/>
                <Route path='/addBooks' element={<AddBooks/>}/>
                <Route path='/addUsers' element={<AddUsers/>}/>
                <Route path='/booklist' element={<BookList/>}/>
                <Route path='/userList' element={<UserList/>}/>
                <Route path='/adminprofile' element={<AdminProfile/>}/>



            </Routes>
        </div>
     );
}
 
export default AdminPortal;