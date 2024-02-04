import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    isOpen: false,
    wievportWidth: undefined,
  },
}

export const nav = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    mobileNavToggle: (state, action) => {
      {
        state.value.isOpen = action.payload
      }
    },
    setWievportWidth: (state, action) => {
      {
        state.value.wievportWidth = action.payload
      }
    },
  },
})

export const { mobileNavToggle, setWievportWidth } = nav.actions
export default nav.reducer
