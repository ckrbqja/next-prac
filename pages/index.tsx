import {Fragment} from "react";
import {postType} from "../components/posts/posts-grid";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import {getAllPosts} from "../lib/posts-util"


export default function AllPostPage(props: { posts: postType[] }) {
    return (
        <Fragment>
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
