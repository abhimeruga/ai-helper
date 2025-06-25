import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface chatInitiaState {
    chatId : string
}

const initialState: chatInitiaState= {
    chatId : 'WP'
};

const chatIndexSlice = createSlice({
    name : 'chatIndex',
    initialState,
    reducers : {
        setChatIndex : (state, action:PayloadAction<string>) => {
            state.chatId = action.payload
        }
    }
});

export const {setChatIndex} = chatIndexSlice.actions;
export default chatIndexSlice.reducer;