import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import HomeData from "../mocks/Home.json";

interface ChatMessage {
    role : string,
    text : string,
    chatId : string
}

interface ChatId {
    chatId : string
}
interface chatState {
    chat : {
        [chatId: string]: ChatMessage[];
    },
    loading : boolean
}

const chatIds:any = {};

HomeData.forEach((chat) => {
    chatIds[chat.shortKey] = [];
})

const initialState: chatState = {
    chat : chatIds,
    loading : false
};

const chatSlice = createSlice({
    name : 'chat',
    initialState,
    reducers : {
        addMessage : (state, action:PayloadAction<ChatMessage>) => {
            state.chat[action.payload.chatId].push(action.payload)
        },
        clearChat : (state, action:PayloadAction<ChatId>) =>{
            state.chat[action.payload.chatId] = [];
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
          },
    }
});

export const {addMessage, setLoading, clearChat} = chatSlice.actions;
export default chatSlice.reducer;
