import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/user/css/Login.css'
const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const handleLogin = (e) => {
        e.preventDefault()
        setUser({...user, [e.target.name] : e.target.value})
    }
    const userList = [
        {
            username: "Mr.LHuynL_H55@yahoo.com",
            password: "dasotefezeforanoqaju"
        },
        {
            username: "nhQungHSr..V63@yahoo.com",
            password: "bogolozarugeyinuqupa"
        },
        {
            username: "YnPhngVngJr.51@hotmail.com",
            password: "quteconokakexedomag"
        }
    ]
    const handleSubmit = () => {
        const result = userList.find(item => {
            return item.username === user.email && item.password === user.password
        })
        if(result){
            localStorage.setItem('username', result.username)
            localStorage.setItem('password', result.password);
            navigate('/');
        }
    }
    return(
        <div className="login">
            <h3 className="mb-3">Login</h3>
            <div className="mb-3">
                <label htmlFor="email" className="form-label px-2">Email </label>
                <input type="email" name="email" value={user.email} onChange={(e) => handleLogin(e)} className="form-control shadow-none" 
                    id="email" placeholder="Enter email" />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label px-2">Password</label>
                <input type="password" name="password" value={user.password} onChange={(e) => handleLogin(e)} className="form-control shadow-none" 
                id="password" placeholder="Enter password" />
            </div>
            <button className="btn btn-primary w-100 mt-3" onClick={handleSubmit}>LOGIN</button>
        </div>
    )
}
export default Login