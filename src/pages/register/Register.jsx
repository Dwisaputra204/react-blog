import './register.css'

export default function Register() {
    return (
        <div className="register">
            <form action="" className="registerForm">
                <span className="logiTitle">Register</span>
                <label htmlFor="">Email</label>
                <input type="text" className="registerInput" placeholder="Enter your email.." />
                <label htmlFor="">Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password.." />
                <button className="registerButton">Register</button>
            </form>
                <button className="registerRegisterButton">Login</button>
        </div>
    )
}
