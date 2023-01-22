import * as fs from "fs";
import path from "path";
import matter from 'gray-matter'
import {postType} from "../components/posts/posts-grid";

const POSTS_DIR = path.join(process.cwd(), 'posts');

export function getPostData(fileName) {
    const filePath = path.join(POSTS_DIR, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const {data, content} = matter(fileContent);
    const slug = fileName.replace(/\.md$/, ''); //remove th file extension

    return {
        slug, ...data, content
    }
};

export function getAllPosts() {
    const postFiles = fs.readdirSync(POSTS_DIR);

    return postFiles
        .map(postFile => getPostData(postFile))
        .sort((postA, postB) => postA.date > postB.date ? -1 : 1)
}


export function getFeaturedPost() {
    return getAllPosts().filter(post => post.isFeatured);
}