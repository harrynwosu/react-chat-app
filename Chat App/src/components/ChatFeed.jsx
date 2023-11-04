import { useState, useEffect } from "react";

import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import loadingAnimation from "../images/loading.svg";

const ChatFeed = (props) => {
    const {chats, activeChat, userName, messages} = props;
    const [isLoading, setIsLoading] = useState(true);

    const chat = chats && chats[activeChat];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const renderReadReceipts = (message, isMyMessage) => {
        console.log(chat.people)
        return chat.people.map((person, index) => person.last_read === message.id && (
            <div 
                key={`read_${index}`}
                className="read-receipt"
                style={{
                    float: isMyMessage ? 'right' : 'left', 
                    backgroundImage: `url(${person?.person?.avatar})`
                }}
            />
        ))
    }

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username; 

            return (
                <div key={`msg_${index}`} style={{width: '100%'}}>
                    <div className="message-block">
                        {isMyMessage 
                        ? <MyMessage message={message}/>
                        : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>
                    <div className="read-receipts" style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px': '68px' }}>
                        {renderReadReceipts(message,isMyMessage)}
                    </div>
                </div>
            )
        })
    }

    if(isLoading) {
        return (
            <div className="chat-feed">
                <div className="loading-image main-loader"><img src={loadingAnimation} alt="" /></div>
            </div>
        );
    }

    if(!chat) {
        return (
            <div className="chat-feed">
                <div className=" loading-image main-loader">No chats yet :&#40;...</div>
            </div>
        );
    }

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
                <div className="chat-subtitle">
                    {`${chat.people.length} ${chat.people.length > 0 ? 'members' : 'member'}`}
                    {`, ${chat.people.filter((person) => person.person.is_online).length} online`}
                    {/* {chat.people.map((person) => `${person.person.username} `)} */}
                </div>
            </div>
            {renderMessages()}
            <div style={{height: "100px"}}></div>
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    )
}

export default ChatFeed;