import classes from "./featured-posts.module.css";
import PostsGrid, {postType} from "../posts/posts-grid";

export default function FeaturedPosts(props: { posts: postType[] }) {
    return <section className={classes.latest}>
        <h2>Featured</h2>
        <PostsGrid posts={props.posts}/>
    </section>
};