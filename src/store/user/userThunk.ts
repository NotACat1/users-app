import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserQueryParams } from '@type/user';
import { requestUsers } from '@services/userService';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (params: UserQueryParams, { rejectWithValue }) => {
    try {
      const users = await requestUsers(params);
      return users;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred');
      }
    }
  },
);
