import React from 'react';
import useStudent from '../../hooks/useStudent';
import { NavLink } from 'react-router-dom';
import useInstructor from '../../hooks/useInstructor';
import useAdmin from '../../hooks/useAdmin';
import { FaHome, FaCheck, FaHardHat, FaPaypal, FaUser } from "react-icons/fa";
const DashboardNavbar = () => {
    const [isStudent] = useStudent();
    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();
    // console.log(isAdmin, 'admin');

    // console.log(isStudent , 'student');
    // console.log(isInstructor , 'instructor');

    const navItems = <>
        <li className='hover:text-info'><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
        {
            isStudent &&
            <>
                <li className='hover:text-info'><NavLink to='/dashboard/studentClasses'><FaCheck></FaCheck> My Selected Classes</NavLink></li>
                <li className='hover:text-info'><NavLink to='/dashboard/studentEnrolledClasses'><FaHardHat></FaHardHat> My Enrolled Classes</NavLink></li>
                <li className='hover:text-info'><NavLink to='/dashboard/studentPaymentHistory'><FaPaypal></FaPaypal> Payment History</NavLink></li>
            </>
        }
        {
            isInstructor?.role === 'instructor' &&
            <>
                <li className='hover:text-info'><NavLink to='/dashboard/instructorAddClass'>Add a Class</NavLink></li>
                <li className='hover:text-info'><NavLink to='/dashboard/instructorMyClasses'>My Classes</NavLink></li>
            </>
        }
        {
            isAdmin?.role === 'admin' &&
            <>
                <li className='hover:text-info'><NavLink to='/dashboard/admin/manageUsers'><FaUser></FaUser> Manage Users</NavLink></li>
                <li className='hover:text-info'><NavLink to='/dashboard/admin/manageClasses'> <FaHardHat></FaHardHat>Manage Classes</NavLink></li>
            </>
        }
    </>

    return (
        <nav className="navbar bg-black opacity-90 text-white items-center px-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2  shadow bg-base-100 rounded-box w-52 ">
                        {navItems}
                    </ul>
                </div>
                <a className=" normal-case text-xl">
                <span className='font-bold text-3xl md:text-5xl text-white'>LearnSchool</span>
                </a>
            </div>
            <div className="navbar-end hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
        </nav>
    );
};

export default DashboardNavbar;