import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const projectID = "a37eb189-2b03-4a35-8c8a-2769881f545d";

export const LoginForm = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState ("");
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

            //implement 'Remember credentials' feature

            navigate('/');
        } catch (error) {
            setLoginError("Incorrect username or password");
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
                </form>
            </div>
        </div>
    )
}