import { createSlice } from '@reduxjs/toolkit';

import { signUp, signIn, logOut, getCurrent } from './operations';

const initialState = {
  user: {},
  isLogin: false,
  token: '',
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [signUp.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [signUp.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [signIn.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [signIn.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [signIn.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [logOut.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logOut.fulfilled]: store => {
      store.loading = false;
      store.user = {};
      store.token = '';
      store.isLogin = false;
    },
    [logOut.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
    [getCurrent.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [getCurrent.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload;
      store.isLogin = true;
    },
    [getCurrent.rejected]: (store, { payload }) => {
      store.loading = false;
      store.token = '';
      store.error = payload;
    },
  },
});

export default authSlice.reducer;
