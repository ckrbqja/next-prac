import classes from "./posts-grid.module.css";
import PostItem from "./post-item";

export type postType = {
    title: string,
    image:string,
    excerpt:string
    date: Date,
    slug: string
    content:string,
}
export default function PostsGrid(props: { posts: postType[] }) {
    const {posts} = props

    return (
        <ul className={classes.grid}>
            {
                posts.map((post) => (<PostItem key={post.slug} post={post}/>))
            }
        </ul>
    )
};