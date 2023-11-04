import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";

const projectID = import.meta.env.VITE_PROJECT_ID;
const userSecret = import.meta.env.VITE_USER_SECRET;

export const LoginForm = () => {
    const [username, setusername] = useState("jakegyllenhaal");
    const [password, setpassword] = useState (userSecret);
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': projectID, "User-Name": username, "User-Secret": password };

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            
            // credentials persist to prevent subsequent logins
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            navigate('/');
        } catch (error) {
            setLoginError("Incorrect username or password");
            setusername('');
            setpassword('');
        }

    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Konverse</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={e => setusername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={e => setpassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting!</span>
                        </button>
                    </div>
                    <h2 className="error">{loginError}</h2>
                    <div align="center" className="social-logins-container" >
                        <button className="google-button">
                            <GoogleOutlined className="google-icon"/>
                            <span style={{marginLeft: '10px'}}>Google</span>
                        </button>
                        <button className="facebook-button">
                            <FacebookOutlined className="facebook-icon"/>
                            <span style={{marginLeft: '10px'}}>Facebook</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}