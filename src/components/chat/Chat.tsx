import React, {useState} from 'react';
import { useParams, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import CustomButton from "../UiElements/CustomButton";
import CustomTextField from "../UiElements/CustomTextField";
import ChatWindow from "./ChatWindow"
import { addMessage  } from '../../store/chatSlice';

import chatWithAssistant from "../../services/simpleAIChat"

const Chat = () => {

  const [userText, setUserText] = useState('');
//   const [messages, setMessages] = useState<message[]>([])
  const [chatResponseLoading, setChatResponseLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const chatIndex = useSelector((state : RootState)=> state.chatIndex.chatId)

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!userText.trim()) return;

    dispatch(addMessage({role : 'User', text : `🧑: ${userText}`, chatId: chatIndex}))
    // const newMessages = [...messages, {role : 'User', text : `🧑: ${userText}`}];
    setChatResponseLoading(true);
    // setMessages(newMessages);
    setUserText('');

    const assistantResponse = await chatWithAssistant(userText, chatIndex);
    dispatch(addMessage({role : 'AI', text: `🤖: ${assistantResponse}`, chatId: chatIndex}))
    // setMessages((prev) => [...prev, {role : 'AI', text: `🤖: ${assistantResponse}`}]);
    setChatResponseLoading(false);
  };

    return (
    <div className='main-container'>
      <div className=''>
        <CustomButton className='back-button' onClick={() => navigate('/')} name="Go Back" />
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
