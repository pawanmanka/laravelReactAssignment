import { createSlice } from '@reduxjs/toolkit'

export const AuthSlice = createSlice({
  name: 'counter',
  initialState: {
    token: 0,
    user:{
      name:"pawan manka",
      email:"pawanmanka07@gmail.com"
    }
  },
  reducers: {
    token: (state,) => {            
        state.token++;
      },
    login: (state,action) => {      
     state.token = action.payload;
    
    },
    logout: (state) => {
        state.token = null;
    },
  },
})

export const { login, logout ,token} = AuthSlice.actions

export default AuthSlice.reducer