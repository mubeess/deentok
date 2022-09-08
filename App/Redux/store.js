import {configureStore} from '@reduxjs/toolkit'
import { counterSlice } from './Video/videoReducer'

const store =configureStore({
    reducer:counterSlice.reducer
})

export default store;