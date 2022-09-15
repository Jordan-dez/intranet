import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAccessTokenFromLocalStorage, setAccesTokenStorage } from "../../services/userService/localStorage";
import { loginUser } from "../../services/userService/user";


export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        const response = await loginUser(user);
        setAccesTokenStorage(response.data)
        return response.data
    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
// user ? user :
const initialState = {
    user: getAccessTokenFromLocalStorage('accessToken') ? getAccessTokenFromLocalStorage('accessToken') : null,
    isError: false,
    message: '',
}
console.log("acces token", getAccessTokenFromLocalStorage('accessToken'));
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [login.pending]: () => {
            console.log("pennding");
        },
        [login.fulfilled]: (state, { payload }) => {
            console.log(payload)
            return { ...state, user: payload };
        },
        [login.rejected]: () => {
            console.log("rejected");
        }
    }
})
export default authSlice.reducer;