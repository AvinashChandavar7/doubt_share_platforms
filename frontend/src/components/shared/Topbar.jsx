
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../ui/button';
// import { useUserContext } from '../../context/AuthContext';


const Topbar = () => {

  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const { user } = useUserContext();

  const navigate = useNavigate();
  const userId = localStorage.getItem('id')

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
    <section className="sticky top-0 z-50 md:hidden bg-dark-2 w-full">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img src="/assets/icons/logo.svg" alt="logo" className='rounded-full h-12 w-12'
          />
        </Link>

        <div className='flex gap-4'>
          <Button variant="ghost" className='shad-button_ghost' onClick={handleLogout}>
            <img src="/assets/icons/logout.svg" alt="logo" />
          </Button>

          <Link to={`/profile/${userId}`} className="flex-center gap-3 ">
            <img
              src="/assets/icons/profile-placeholder.svg"
              alt="profile"

              className='rounded-full h-8 w-8 ' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Topbar;