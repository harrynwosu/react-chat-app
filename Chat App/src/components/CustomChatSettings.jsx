import { useState, useEffect } from "react";
import { ChatSettings } from "react-chat-engine";
import { useNavigate } from 'react-router-dom';
import { BgColorsOutlined, GithubOutlined, LoginOutlined, UserOutlined, } from "@ant-design/icons";

const CustomChatSettings = (props) => {
    const [theme, setTheme] = useState('light');
    const navigate = useNavigate();

    useEffect(() => {
        const themeValue = localStorage.getItem("theme");

        if (themeValue === "dark") {
            document.querySelector(".app").classList.add("dark");
        } else if (themeValue === "light") {
            document.querySelector(".app").classList.remove("dark");
        } else {
            localStorage.setItem("theme", theme);
        }
    }, [theme]);

    const handleClick = () => {
        localStorage.clear();
        navigate('/login');
    }

    const handleTheme = () => {
        const themeValue = localStorage.getItem("theme");
        if (themeValue === 'light'){
            setTheme('dark');
            localStorage.setItem("theme", "dark");
            document.querySelector(".app").classList.add("dark");
        } else if(themeValue === 'dark') {
            setTheme('light');
            localStorage.setItem("theme", "light");
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