/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetCurrentUser } from '../lib/react-query/queriesAndMutations';

export const INITIAL_USER = {
  id: "",
  username: "",
  email: "",
  userType: "",
};

const INITIAL_STATE = { user: INITIAL_USER }


const AuthContext = createContext(INITIAL_STATE);


const AuthProvider = ({ children }) => {

  const navigate = useNavigate();

  const [user, setUser] = useState(INITIAL_USER);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const { mutateAsync: getCurrentUser } = useGetCurrentUser();

  // const {
  //   data: currentAccount,
  //   // error,
  //   // isLoading: queryLoading
  // } = useGetCurrentUser();



  const checkAuthUser = async () => {
    try {
      setIsLoading(true);

      const { data: currentAccount } = await getCurrentUser();

      console.table(currentAccount);

      if (currentAccount) {
        setUser({
          id: currentAccount._id,
          username: currentAccount.username,
          email: currentAccount.email,
          userType: currentAccount.userType,
        })
      }

      setIsAuthenticated(true);

      return true;

    } catch (error) {
      console.error('Error fetching current user:', error);
      return false
    } finally {
      setIsLoading(false);
    }
  }


  useEffect(() => {
    const user = localStorage.getItem('id');

    console.log("token authContext", user);

    if (
      // user
      // ||
      user === '[]'
      // || user === null
    ) {
      navigate('/sign-in')
    }

    checkAuthUser();
  }, [navigate]);


  const value = {
    user, setUser,
    isLoading, setIsLoading,
    isAuthenticated, setIsAuthenticated,
    checkAuthUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

export const useUserContext = () => useContext(AuthContext);