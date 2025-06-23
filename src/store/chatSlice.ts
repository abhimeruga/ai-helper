import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface chatObject {
    role : string,
    text : string
}
interface chatState {
    chat : chatObject[],
    loading : boolean
}

const initialState: chatState = {
    chat : [],
    loading : false
};

const chatSlice = createSlice({
    name : 'chat',
    initialState,
    reducers : {
        addMessage : (state, action:PayloadAction<chatObject>) => {
            state.chat.push(action.payload)
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
          },
    }
});

export const {addMessage, setLoading} = chatSlice.actions;
export default chatSlice.reducer;