import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  users: Array<object>;
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<Array<object>>) {
      state.users = action.payload;
    },
    clearUsers(state) {
      state.users = [];
    },
  },
});

export const { setUsers, clearUsers } = userSlice.actions;

export default userSlice.reducer;
