import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'    
import Single from '../single/Single'
import './home.css'

export default function Home() {
    return (
        <>
            <Header/>
            <div className="home">
                <Posts/>
                <Single/>
            </div>
        </>
    )
}
