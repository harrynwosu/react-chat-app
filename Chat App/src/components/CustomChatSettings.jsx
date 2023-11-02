import { ChatSettings } from "react-chat-engine";
import { useNavigate } from 'react-router-dom';
import { LoginOutlined } from "@ant-design/icons";

const CustomChatSettings = (props) => {
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
                    <LoginOutlined className="logout-icon" style={{marginLeft: '5px'}}/>
                </button>
            </div>
        </div>
    )
}

export default CustomChatSettings;