import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import { getCurrentUser, loginUser, registerUser } from '../api/api.js';


export const useRegisterAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      // Handle successful registration, e.g., show success message and navigate
      console.log("User registered successfully", data);


      // Invalidate and refetch relevant queries (if needed)
      // Replace 'user' with the relevant query key
      queryClient.invalidateQueries('user');
    },
  });
};

export const useSignInAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // Handle successful login, e.g., store token in local storage
      console.log(data);
      const token = data.token;
      console.log(token);
      localStorage.setItem('token', token);

      // Invalidate and refetch relevant queries (if needed)
      // Replace 'user' with the relevant query key
      queryClient.invalidateQueries('user');
    },
  });
};
export const useSignOutAccount = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // Handle successful login, e.g., store token in local storage
      console.log(data);
      const token = data.token;
      console.log(token);
      localStorage.setItem('token', token);

      // Invalidate and refetch relevant queries (if needed)
      // Replace 'user' with the relevant query key
      queryClient.invalidateQueries('user');
    },
  });
};

// export const useGetCurrentUser = () => {
//   return useQuery('currentUser', getCurrentUser);
// };

export const useGetCurrentUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: getCurrentUser,
    onSuccess: (data) => {
      // Handle successful login, e.g., store token in local storage
      const token = data.token;
      localStorage.setItem('token', token);

      // Invalidate and refetch relevant queries (if needed)
      // Replace 'user' with the relevant query key
      queryClient.invalidateQueries('user');
    },
  });
};
