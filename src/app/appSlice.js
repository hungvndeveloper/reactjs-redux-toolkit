import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'app',
    initialState: {
        userInfo: null
    },
    reducers: {
        setUserInfo(state, action) {
            state.userInfo = action.payload
        }
    }
})

export const { setUserInfo } = appSlice.actions
export default appSlice.reducer
