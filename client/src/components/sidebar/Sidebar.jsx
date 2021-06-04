import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://media-exp1.licdn.com/dms/image/C5103AQGErp9wjUGRZg/profile-displayphoto-shrink_200_200/0/1582892696109?e=1627516800&v=beta&t=qUVDxDkcXqXnDLlZllzNbSOsx5vDeVRALXJVtAG-lVI" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, suscipit autem tempora laborum cupiditate nisi nihil, veritatis harum.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Tech</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
