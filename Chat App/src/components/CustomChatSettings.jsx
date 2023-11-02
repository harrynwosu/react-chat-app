import { ChatSettings } from "react-chat-engine";
import { useNavigate } from 'react-router-dom';

export const CustomChatSettings = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div className="ce-custom-chat-settings-container">
            <ChatSettings {...props}/>

            <div className="logout-button-container">
                <button className="logout-button" onClick={handleClick}>
                    <span>Log Out</span>
                </button>
            </div>
        </div>
    )
}