import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import CustomButton from "../UiElements/CustomButton";
import CustomTextField from "../UiElements/CustomTextField";
import ChatWindow from "./ChatWindow"
import { addMessage, clearChat  } from '../../store/chatSlice';

import chatWithAssistant from "../../services/simpleAIChat"

const Chat = () => {

  const [userText, setUserText] = useState('');
  const [chatResponseLoading, setChatResponseLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {chatIndex : {chatId : chatIndex}, chat} = useSelector((state : RootState)=> state)
  const chatLength = !!chat.chat[chatIndex].length;
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!userText.trim()) return;

    dispatch(addMessage({role : 'User', text : `🧑: ${userText}`, chatId: chatIndex}))
    setChatResponseLoading(true);
    setUserText('');
    const assistantResponse = await chatWithAssistant(userText, chatIndex);
    dispatch(addMessage({role : 'AI', text: `🤖: ${assistantResponse}`, chatId: chatIndex}))
    setChatResponseLoading(false);
  };

  const clearChatHandler = () =>{
    dispatch(clearChat({chatId: chatIndex}));
  }
    return (
    <div className='main-container'>
      <div>
      <div className='btn-container'>
        <div>
          <CustomButton className='back-button' onClick={() => navigate('/')} name="Go Back" />
        </div>
        <div>
          <CustomButton className='back-button' disabled={!chatLength} onClick={() => clearChatHandler()} name="Clear Chat" />
        </div>
      </div>
        <ChatWindow chatResponseLoading={chatResponseLoading} />
      </div>
      <div className='footer-container'>
        <CustomTextField className='text-input' maxRows={2} value={userText} onChange={(e) => setUserText(e.target.value)} label="AI chat"/>
        <CustomButton className='btn-submit' disabled={chatResponseLoading} onClick={(e) => {handleSubmit(e)}} name="submit" />
      </div>
    </div>
    )
}

export default Chat;
