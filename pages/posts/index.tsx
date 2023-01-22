import {postType} from "../../components/posts/posts-grid";
import AllPosts from "../../components/posts/all-posts";
import {getAllPosts} from "../../lib/posts-util";
import {Fragment} from "react";
import Head from "next/head";


export default function AllPostPage(props: { posts: postType[] }) {
    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta
                    name={'description'}
                    content={'A list of all programming-related tutorials and posts!'}
                />
            </Head>
        <AllPosts posts={props.posts}/>
        </Fragment>
    )
}

export function getStaticProps() {
    return {
        props: {
            posts: getAllPosts(),
        }
    }
}
