import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../components/shared/api/auth';

export const signUp = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signUp(data);
      return result;
    } catch ({ response }) {
      //   const { status, data } = response;
      const error = {
        status: response.status,
        message: response.statusText,
      };
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signin',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signIn(data);
      return result;
    } catch ({ response }) {
      //   const { status, data } = response;
      const error = {
        status: response.status,
        message: response.statusText,
      };
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logOut();
      return result;
    } catch ({ response }) {
      //   const { status, data } = response;
      const error = {
        status: response.status,
        message: response.statusText,
      };
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const getCurrent = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.getCurrentUser(auth.token);
      return result;
    } catch ({ response }) {
      //   const { status, data } = response;
      const error = {
        status: response.status,
        message: response.statusText,
      };
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
