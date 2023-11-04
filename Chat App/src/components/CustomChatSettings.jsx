import { useState } from "react";
import { ChatSettings } from "react-chat-engine";
import { useNavigate } from 'react-router-dom';
import { BgColorsOutlined, GithubOutlined, LoginOutlined, UserOutlined, } from "@ant-design/icons";

const CustomChatSettings = (props) => {
    const [theme, setTheme] = useState('light');
    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.clear();
        navigate('/login');
    }

    const handleTheme = () => {
        if (theme === 'light'){
            setTheme('dark');
            document.querySelector(".app").classList.add("dark");
        } else if(theme === 'dark') {
            setTheme('light');
            document.querySelector(".app").classList.remove("dark");
        }
    }

    return (
        <div className="ce-custom-chat-settings-container">
            <div className="chat-settings-options">
                <div className="theme-github-user-container">
                <BgColorsOutlined className="settings-button" onClick={handleTheme}/>
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