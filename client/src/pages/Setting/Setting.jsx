import Sidebar from '../../components/sidebar/Sidebar'
import './setting.css'

export default function Setting() {
    return (
        <div className="setting">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className="settingDeleteTitle">Delete Account</span>
                </div>
                <form className="settingForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingPP">
                        <img src="https://images.unsplash.com/photo-1622405448532-8b1d2fc16548?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="Dwi Saputra"/>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="dwiasputa.204@gmail.com"/>
                    <label htmlFor="">Password</label>
                    <input type="password"/>
                    <button className="settingSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
