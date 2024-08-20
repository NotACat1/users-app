import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '@store/user/userTypes';
import { fetchUsers } from '@store/user/userThunk';

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null,
  nameFilter: '',
  ageFilter: '',
  page: 1,
  limit: 4,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setNameFilter: (state, action) => {
      state.nameFilter = action.payload;
      state.page = 1;
    },
    setAgeFilter: (state, action) => {
      state.ageFilter = action.payload;
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
      state.page = 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        if (action.payload.length === 0) {
          state.error = 'Users not found';
        }
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setNameFilter, setAgeFilter, setPage, setLimit } =
  userSlice.actions;
export default userSlice.reducer;
