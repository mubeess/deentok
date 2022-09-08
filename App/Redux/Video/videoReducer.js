// import { GET_VIDEOS } from "./types";

import { createSlice } from "@reduxjs/toolkit"

// const intialState={
//     videos:[{id:01,url:'http//:jjjjj'}]
// }
// function videoReducer(state=intialState,action) {
//     switch (action.type) {
//         case GET_VIDEOS:
//             const newVid={id:002,url:'kkjjdhh'}
//             return{
//                 ...state,
//                 videos:state.videos.push(newVid)
//             }

//         default: return state;
//     }
// }

// export default videoReducer;
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      value: 0
    },
    reducers: {
      incremented: state => {
        state.value += 1
      },
      decremented: state => {
        state.value -= 1
      }
    }
  })
  export const { incremented, decremented } = counterSlice.actions