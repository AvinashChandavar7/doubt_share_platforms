/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { getCurrentUser } from '../lib/api/api';
import { useGetCurrentUser } from '../lib/react-query/queriesAndMutations';

export const INITIAL_USER = {
  id: "",
  username: "",
  email: "",
  userType: "",
  userLanguage: "",
  classGrade: "",
  subjectExpertise: ""
};

const INITIAL_STATE = { user: INITIAL_USER }


const AuthContext = createContext(INITIAL_STATE);


const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(INITIAL_USER);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const { mutateAsync: getCurrentUser } = useGetCurrentUser();

  const navigate = useNavigate();

  const checkAuthUser = async () => {
    try {
      setIsLoading(true);

      const { data: currentAccount } = await getCurrentUser();

      if (currentAccount) {
        setUser({
          id: currentAccount._id,
          name: currentAccount.name,
          username: currentAccount.username,
          email: currentAccount.email,

          userType: currentAccount.userType,
          userLanguage: currentAccount.userLanguage,
          classGrade: currentAccount.classGrade,
          subjectExpertise: currentAccount.subjectExpertise
        })
      }

      setIsAuthenticated(true);

      return true;

    } catch (error) {
      console.log(error);
      return false
    } finally {
      setIsLoading(false);
    }
  }


  useEffect(() => {
    // || localStorage.getItem('token') === null

    if (localStorage.getItem('token') === '[]') {
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