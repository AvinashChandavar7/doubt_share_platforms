import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import { loginUser, registerUser } from '../api/api.js';


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
      const token = data.token;
      localStorage.setItem('token', token);

      // Invalidate and refetch relevant queries (if needed)
      // Replace 'user' with the relevant query key
      queryClient.invalidateQueries('user');
    },
  });
};

