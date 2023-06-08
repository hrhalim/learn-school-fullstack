import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../hooks/useCart";
import "./Header.css"
const Header = () => {
   
  const {user, logOut} = useContext(AuthContext)
  const [cart] = useCart()

    const handleSignOut = () =>{
      logOut()
      .then(() => {})
      .catch(error =>{
        console.log(error);
      })
    }

    const navOptions =  <> 
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/dashboard'>Dashboard </Link></li>
        <li>
          <Link to="/dashboard/mycart">
          <button className="btn gap-2">
           <FaShoppingCart></FaShoppingCart>
          <div className="badge">+{cart?.length || 0}</div>
        </button>
          </Link>
        </li> 
    </>
    return (
        <>
           <div className="navbar bg bg-black fixed z-10 text-white">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {navOptions}
                </ul>
              </div>
              <a className="btn btn-ghost normal-case text-xl">MusicLab</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                  {navOptions}
              </ul>
            </div>
            <div className="navbar-end">
            {user ?<div className=" h-10 flex gap-4 ">
                <div className="tooltip tooltip-left" data-tip={user?.displayName}> 
                <img  className='user-img' src={user.photoURL? user.photoURL : " https://cdn-icons-png.flaticon.com/512/727/727399.png?w=740&t=st=1684432526~exp=1684433126~hmac=9907cbc59d378959c8fa4f9bbb5a2f05d2727dd8ccaacd50a7a5083a356a6e14 "} />

                </div>  
                        <button className="px-6 py-2 bg-red-600 text-white rounded-md" onClick={handleSignOut}>Logout</button>
                 </div>:
                 
                    <Link to="/login"><button className="btn btn-active btn-accent text-white px-6">Login</button></Link>
                     }
            </div>
        </div>
        </>
    );
};

export default Header;