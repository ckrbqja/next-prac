import classes from "./all-posts.module.css";
import PostsGrid, {postType} from "./posts-grid";

export default function AllPosts(props: { posts: postType[] }) {
    return <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={props.posts}/>
    </section>

};