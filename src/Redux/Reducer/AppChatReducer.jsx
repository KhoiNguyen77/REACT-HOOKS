import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    comments: [
        { name: "Quan", content: "123123" },
        { name: "Vinh", content: "123123" },
    ]
}

const AppChatReducer = createSlice({
    name: 'AppChatReducer',
    initialState,
    reducers: {
        addCommentAction: (state, action) => {
            state.comments = [...state.comments, { ...action.payload }]
        }
    }
});

export const { addCommentAction } = AppChatReducer.actions

export default AppChatReducer.reducer