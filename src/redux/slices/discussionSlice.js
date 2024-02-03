import { createSlice } from "@reduxjs/toolkit";

export const discussionSlice = createSlice({
    name: 'discussion',
    initialState: {
        cards: ['1', '2', '3'],
    },
    reducers: {
        renderDiscussions: (state, action) => {
            state.cards.push(action.payload)
        }
    }
})

export const { renderDiscussions } = discussionSlice.actions;
export default discussionSlice.reducer;