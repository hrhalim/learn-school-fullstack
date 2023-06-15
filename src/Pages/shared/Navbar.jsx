import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'; 
const Navbar = ({ toggle, setToggle }) => {
    const { logOut, user } = useContext(AuthContext); 

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                Swal.fire(
                    error.message,
                    'error'
                )
            })
    }

    const handleToggleChange = () => {
        setToggle(toggle => !toggle);
    }

    const navItems = <>
        <li className='hover:text-info'><Link>Home</Link></li>
        <li className='hover:text-info'><Link to='/instructors'>Instructors</Link></li>
        <li className='hover:text-info'><Link to='/classes'>Classes</Link></li>

        {
            user ?
                <li className='hover:text-info'><button onClick={handleLogOut}>Log Out</button></li> :
                <li className='hover:text-info'><Link to='/login'>Login</Link></li>
        }
        {
            user &&
            <>
                <li className='hover:text-info'><Link to='/dashboard'>Dashboard</Link></li>
                <li className='hover:text-info'>
                    <div className="avatar">
                        <div className="w-12 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                </li>
            </>
        }
        <li ><select onChange={handleToggleChange} className="select w-5 max-w-xs hidden md:block bg-success"> 
            <option value={false} defaultValue>Light</option>
            <option value={true}>Dark</option>
        </select></li>
    </>
    return (
        <nav className={`navbar  items-center fixed z-30 ${toggle ? 'bg-black opacity-90 text-white' : 'bg-black text-white'}`}>
            <div className="md:navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="text-black menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
                        {navItems}
                    </ul>
                    <a className=" normal-case text-xl">
                        <span className='font-bold text-3xl md:text-5xl text-white'>LearnSchool</span>
                    </a>

                </div>
            </div>
            <div className="navbar-end hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1 items-center ">
                    {navItems}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;