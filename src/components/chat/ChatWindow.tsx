import React, {useEffect, useState} from "react";
import { useSelector } from 'react-redux';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { descriptions, ChatId } from "../../constants/main.constant";
import "./Chat.styles.css"
import { RootState } from '../../store/store';


const ChatWindow = ({chatResponseLoading}: MyComponentProps) => {

      const {chat, chatIndex} = useSelector((state: RootState) =>
        state || []
      );


    const cleanMarkdown = (aiResponse : string) => ({
        __html: DOMPurify.sanitize(marked.parse(aiResponse) as string)
      });

    return <>
    <h4>
        {descriptions[chatIndex.chatId as ChatId]}
    </h4>
    <div className="chat-container">
        {
            !chat.chat[chatIndex.chatId].length &&
            <h4 className="ask-something">
                Ask something
            </h4>
        }
        {
            chat.chat[chatIndex.chatId].map((chatItem : Message, key : number) => {
                return (
                    <React.Fragment key={key}>
                        <div className={chatItem.role === 'User' ? "user-text" : "ai-response"}>
                            {
                                chatItem.role === 'User' ? chatItem.text : <div dangerouslySetInnerHTML={cleanMarkdown(chatItem.text)} />
                            }
                        </div>
                    </React.Fragment>
                )
            })
        }
        {
            chatResponseLoading &&
                (<div className="loading-response">
                    Thinking...
                </div>)
        }
    </div>
    </>

}

type MyComponentProps = {
    chatResponseLoading: boolean
  };

  interface Message {
    role: string;
    text: string;
  }

export default ChatWindow