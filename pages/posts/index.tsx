import {postType} from "../../components/posts/posts-grid";
import AllPosts from "../../components/posts/all-posts";
import {getAllPosts} from "../../lib/posts-util";


export default function AllPostPage(props: { posts: postType[] }) {
    return (
        <AllPosts posts={props.posts}/>
    )
}

export function getStaticProps() {
    return {
        props: {
            posts: getAllPosts(),
        }
    }
}
