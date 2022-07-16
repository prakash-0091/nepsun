import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        name: '',
        loggedIn: false,
        username: '',
        password: '',

    },
    loginForm: {
        open: false,
    },
    loginFormError: {
        open: false,
        error: '',
    }

}


export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        userLoggedIn: (state) => {
            state.user.loggedIn = true
            state.user.name = 'Prakash'
            state.loginForm.open = false
        },
        userLoggedOut: (state) => {
            state.user.loggedIn = false
            state.user.name = ''
            state.user.username=''
            state.user.password=''
        },
        errorOccured: (state) => {
            state.loginFormError.error = 'Username or Password Incorrect'
            state.loginFormError.open = true
        },
        errorDismissed: (state) => {
            state.loginFormError.open = false
        },
        loginFormOpened: (state) => {
            state.loginForm.open = true
        },
        loginFormClosed: (state) => {
            state.loginForm.open = false
        }
    }
})

export const {
    userLoggedIn,
    userLoggedOut,
    errorOccured,
    errorDismissed,
    loginFormOpened,
    loginFormClosed,

} = mainSlice.actions

export default mainSlice.reducer