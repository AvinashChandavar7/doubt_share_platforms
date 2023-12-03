import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import { sidebarLinks } from '@/constants';
import { Button } from '../ui/button';


const LeftSidebar = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {


    const user = localStorage.getItem('token');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/sign-in');
  };


  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center  border rounded-md  justify-center transform-cpu">
          <img src="/assets/icons/logo.svg" alt="logo" className='w-20 h-50 rounded-full' />
        </Link>

        <Link to={`/profile`} className="flex gap-3 items-center ">
          <img className='rounded-full h-14 w-14' alt="profile"
            src={"/assets/icons/profile-placeholder.svg"}
          />
          <div className='flex flex-col'>
            <p className='body-bold capitalize'>{"name"}</p>
          </div>
        </Link>

        <ul className='flex flex-col gap-6'>
          {
            sidebarLinks.map((link) => {
              const isActive = pathname === link.route;
              return (
                <li key={link.label} className={`leftsidebar-link group ${isActive && `bg-primary-800`}`}>
                  <NavLink to={link.route} className='flex gap-4 items-center p-4 ' >
                    <img src={link.imgURL} alt="link" className={`group-hover:invert-white  ${isActive && `invert-white`} `} />
                    {link.label}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>

      <Button variant="ghost" className='shad-button_ghost' onClick={(handleLogout)}>
        <img src="/assets/icons/logout.svg" alt="logo" />
        <p className='small-medium lg:base-medium'> Logout </p>
      </Button>

    </nav>
  )
}

export default LeftSidebar