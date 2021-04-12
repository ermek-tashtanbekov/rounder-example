import { Route } from "react-router"
import PostFull from "../PostFull/PostFull"
import PostList from "../PostList/PostList"

const Posts = ({match}) =>{
    // console.log(match)
    return(
        <div>
            <PostList/>
            <Route  path="/posts/:id" component={PostFull} />
  {/* { match.isExact 
            ? <PostList /> 
            : <Route path="/posts/:hyfhfgugfff" component={PostFull} />} */}
        </div>
    )
}
export default Posts