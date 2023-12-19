import { useMutation, useQuery, useQueryClient, } from '@tanstack/react-query';

import { getCurrentUser, loginUser, registerUser, } from '../api/authApi.js';

import { QUERY_KEYS } from './queryKey.js';

import { createMyDoubtsPost, getRecentDoubtsPosts } from '../api/doubtsApi.js';

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

      const token = data.data.token;
      const id = data.data.user._id;
      const username = data.data.user.username;

      // console.table("login =>", data);
      // console.log("login =>", id);
      // console.log("login =>", username);

      localStorage.setItem('token', token);
      localStorage.setItem('id', id);
      localStorage.setItem('username', username);

      // Invalidate and refetch relevant queries (if needed)
      // Replace 'user' with the relevant query key
      queryClient.invalidateQueries('user');
    },
  });
};


export const useGetCurrentUser = () => {
  // const queryClient = useQueryClient();

  return useMutation({
    mutationFn: getCurrentUser,
    onSuccess: () => {

      // Invalidate and refetch relevant queries (if needed)
      // Replace 'user' with the relevant query key
      // queryClient.invalidateQueries('user');
    },
  });
};


export const useCreateMyDoubtsPost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (post) => createMyDoubtsPost(post),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_RECENT_POSTS]
      })
    }
  })
};

export const useGetRecentDoubtsPosts = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
    queryFn: getRecentDoubtsPosts,
  })
};
