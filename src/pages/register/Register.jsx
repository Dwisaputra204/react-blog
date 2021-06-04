import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
    return (
        <div className="register">
            <form action="" className="registerForm">
                <span className="registerTitle">Register</span>
                <label htmlFor="">Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username.." />
                <label htmlFor="">Email</label>
                <input type="text" className="registerInput" placeholder="Enter your email.." />
                <label htmlFor="">Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password.." />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">Login</Link>
            </button>
        </div>
    )
}
