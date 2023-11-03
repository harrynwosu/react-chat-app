import { ChatSettings } from "react-chat-engine";
import { useNavigate } from 'react-router-dom';
import { BgColorsOutlined, LoginOutlined, UserOutlined, } from "@ant-design/icons";

const CustomChatSettings = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div className="ce-custom-chat-settings-container">
            <div className="chat-settings-options">
                <div className="theme-user-container">
                <BgColorsOutlined className="theme-button" style={{fontSize: '30px', color: 'rgb(117,84,160)'}}/>
                <UserOutlined className="user-button" style={{fontSize: '30px', color: 'rgb(117,84,160)'}}/>
                </div>
            </div>
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