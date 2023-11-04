import { ChatSettings } from "react-chat-engine";
import { useNavigate } from 'react-router-dom';
import { BgColorsOutlined, GithubOutlined, LoginOutlined, UserOutlined, } from "@ant-design/icons";

const CustomChatSettings = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div className="ce-custom-chat-settings-container">
            <div className="chat-settings-options">
                <div className="theme-github-user-container">
                <BgColorsOutlined className="settings-button" />
                <a href="https://github.com/harrynwosu/react-chat-app" target="_blank">
                    <GithubOutlined className="settings-button" />
                </a>
                <UserOutlined className="settings-button" />
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