import './topbar.css';

export default function TopBar() {
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImage" src="https://media-exp1.licdn.com/dms/image/C5103AQGErp9wjUGRZg/profile-displayphoto-shrink_200_200/0/1582892696109?e=1627516800&v=beta&t=qUVDxDkcXqXnDLlZllzNbSOsx5vDeVRALXJVtAG-lVI" alt="" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
