import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api, { getCsrf } from '../../api';

// fetch current user
export const fetchMe = createAsyncThunk('auth/fetchMe', async (_, { rejectWithValue }) => {
  try {
    const res = await api.get('/api/user');
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || null);
  }
});

// login
export const login = createAsyncThunk('auth/login', async ({ email, password }, { rejectWithValue }) => {
  try {
    await getCsrf();
    const res = await api.post('/login', { email, password });
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || { message: 'Login failed' });
  }
});

// register
export const register = createAsyncThunk('auth/register', async ({ name, email, password }, { rejectWithValue }) => {
  try {
    await getCsrf();
    const res = await api.post('/register', { name, email, password });
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || { message: 'Register failed' });
  }
});

// logout
export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await api.post('/logout');
    return true;
  } catch (err) {
    return rejectWithValue(err.response?.data || null);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload?.message || 'Login failed';
      })
      .addCase(register.fulfilled, (state, action) => {
        // keep user null — we'll login after register
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
