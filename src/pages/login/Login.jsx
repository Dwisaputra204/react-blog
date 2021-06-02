import './login.css'

export default function Login() {
    return (
        <div className="login">
            <form action="" className="loginForm">
                <span className="logiTitle">Login</span>
                <label htmlFor="">Email</label>
                <input type="text" className="loginInput" placeholder="Enter your email.." />
                <label htmlFor="">Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password.." />
                <button className="loginButton">Login</button>
            </form>
                <button className="loginRegisterButton">Register</button>
        </div>
    )
}
