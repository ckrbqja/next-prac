import PostContent from "./post-detail/post-content";
import {InferGetStaticPropsType} from "next";
import {getAllPosts, getPostData} from "../../lib/posts-util";
import {postType} from "../../components/posts/posts-grid";

export default function PostDetailPage(props: { posts: postType }) {
    return <PostContent post={props.posts}/>
}

export async function getStaticProps({params}: InferGetStaticPropsType<any>) {
    const slug = params.slug;
    return {
        props: {posts: getPostData(`${slug}.md`)}
    }
}

export async function getStaticPaths() {
    return {
        paths: getAllPosts().map(({slug}) => ({params: {slug}})),
        fallback: false,
    }
}
