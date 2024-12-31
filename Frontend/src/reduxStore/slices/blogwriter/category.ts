import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface HeadingState {
  	title : string,
	shortDes : string,
	category : string,
	imgUrl : string,
}

const initialState: HeadingState = {
  	title: "",
	shortDes : "",
	category : "",
	imgUrl : "",
}

export const headingSlice = createSlice({
  name: 'headings',
  initialState,
  reducers: {
		updateTitle : (state, action : PayloadAction<string>) => {
			state.title = action.payload;
		},
		updateDes : (state, action : PayloadAction<string>) => {
			state.shortDes = action.payload;
		},
		updateCat : (state, action : PayloadAction<string>) => {
			state.category = action.payload;
		},
		updateImg : (state, action : PayloadAction<string>) => {
			state.imgUrl = action.payload;
		}
  },
})

// Action creators are generated for each case reducer function
export const { updateTitle, updateDes, updateCat, updateImg } = headingSlice.actions
export default headingSlice.reducer