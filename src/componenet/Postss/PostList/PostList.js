import { Link } from "react-router-dom";

const PostList = () =>{
    const result = [] ;
    for(let id = 1; id <= 5; id++){
        result.push(<li><Link to={"/posts" + id}>Post Number #{id}</Link></li>)
    }
    return(
        <div>
            {result}
        </div>
    )
}
export default PostList