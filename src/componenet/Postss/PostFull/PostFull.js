import { Link } from "react-router-dom"

const PostFull =({match}) =>{
    return(
        <div>
             <Link to="/posts">Back to posts</Link>
            <h1>Post #{match.params.id}</h1>
        </div>
    )
}
export default PostFull