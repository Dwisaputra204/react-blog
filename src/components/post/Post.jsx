import { Link } from 'react-router-dom'
import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    <Link to="/singlepost" className="link">Lorem ipsum dolor sit amet.</Link>                
                </span>
                <hr />
                <span className="postDate">1 Hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid molestias quis aliquam reprehenderit culpa facere at eveniet id et! Quam sit cum laudantium, aspernatur architecto deleniti vel illum. Saepe, expedita et. Provident neque officiis illo dicta nihil atque iste consectetur, voluptatibus nobis minima quia mollitia quam, voluptates consequuntur veniam quo inventore ad at culpa laboriosam vitae magnam obcaecati possimus. Ipsa quidem quod vitae ab tempore, expedita aliquid a beatae quae suscipit dicta nihil voluptatum molestiae iusto vel cupiditate commodi sapiente quo doloribus eos deleniti dolores. Enim maxime hic harum optio doloremque facilis laudantium voluptatem nostrum pariatur alias blanditiis, eum recusandae!
            </p>
        </div>
    )
}
