import React, {useState} from 'react';
import { useParams, useNavigate } from 'react-router';


import CustomButton from "../UiElements/CustomButton";
import CustomTextField from "../UiElements/CustomTextField";
import ChatWindow from "./ChatWindow"
import { useDispatch } from 'react-redux';
import { addMessage  } from '../../store/chatSlice';

import chatWithAssistant from "../../services/simpleAIChat"

const Chat = () => {

  const [userText, setUserText] = useState('');
//   const [messages, setMessages] = useState<message[]>([])
  const [chatResponseLoading, setChatResponseLoading] = useState<boolean>(false);
  const {chatId} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!userText.trim()) return;

    dispatch(addMessage({role : 'User', text : `🧑: ${userText}`}))
    // const newMessages = [...messages, {role : 'User', text : `🧑: ${userText}`}];
    setChatResponseLoading(true);
    // setMessages(newMessages);
    setUserText('');

    const assistantResponse = await chatWithAssistant(userText, chatId?.split(':')[1] || '');
    dispatch(addMessage({role : 'AI', text: `🤖: ${assistantResponse}`}))
    // setMessages((prev) => [...prev, {role : 'AI', text: `🤖: ${assistantResponse}`}]);
    setChatResponseLoading(false);
  };

    return (
    <div className='main-container'>
      <div className='chat-container'>
      <CustomButton className='back-button' onClick={() => navigate('/')} name="Go Back" />
      <ChatWindow chatResponseLoading={chatResponseLoading} />
      </div>
      <div className='footer-container'>
        <CustomTextField maxRows={2} value={userText} onChange={(e) => setUserText(e.target.value)} style={{width: '50%', margin: '0px 10px', border : '#a9ddc5'}} label="AI chat"/>
        <CustomButton style={{color : '#a9ddc5', backgroundColor: '#096B68'}} disabled={chatResponseLoading} onClick={(e) => {handleSubmit(e)}} name="submit" />
      </div>
    </div>
    )
}

export default Chat;
