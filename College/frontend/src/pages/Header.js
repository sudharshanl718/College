import React from 'react'
import { FaGraduationCap } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <div className='hdr p-2'>
            <div className='brand-logo'>
                <Link to={"/"}><h2 className='h2'><FaGraduationCap  className='brand-icon'/> Best University </h2></Link>
            </div>
            <div>
                <ul className='nav-items'>
                    <Link to={"/"}><li>HOME</li></Link>
                    <Link to={"/About"}><li>ABOUT</li></Link>
                    <Link to={"/Courses"}><li>COURSE</li></Link>
                    <Link to={"/Blog"}><li>BLOG</li></Link>
                    <Link to={"/Contact"}><li>CONTACT</li></Link>
                    <Link to={"/Apply"}><li>APPLY</li></Link>
                    <Link to={"/Registration"}><li>REGISTRATION / LOGIN</li></Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header