import {Fragment} from "react";
import {postType} from "../components/posts/posts-grid";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import {getAllPosts} from "../lib/posts-util"
import Head from "next/head";


export default function AllPostPage(props: { posts: postType[] }) {
    return (
        <Fragment>
            <Head>
                <title>Codai Blog</title>
                <meta
                    name='description'
                    content={'I post about programming and web development'}
                />
            </Head>
            <Hero/>
            <FeaturedPosts posts={props.posts}/>
        </Fragment>
    )
}

export function getStaticProps() {
    return {props: {
        posts: getAllPosts(),
    }}
}
