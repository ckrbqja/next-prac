import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import {postType} from "../../../components/posts/posts-grid";
import Image from "next/image";

import rangeParser from 'parse-numeric-range';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import children = ReactMarkdown.propTypes.children;


export default function PostContent({post}: { post: postType }) {


    const imagePath = `/images/posts/${post?.slug}/${post?.image}`;


    const customRenders = {
        // img(image: { src: string, alt: string }) {
        //     return (
        //         <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300}/>
        //     )
        // },
        p(paragraph: { node: any, children: any }) {
            const {node} = paragraph;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];
                console.log(`/images/posts/${post.slug}/${image.properties.src}`);

                return <div className={classes.image}>
                    <Image src={image.properties.src} alt={image.alt} width={600} height={300}/>
                </div>
            }

            return <p>{paragraph.children[0]}</p>
        },
        code({ node, inline, className, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '');
            const hasMeta = node?.data?.meta;

            const applyHighlights: object = (lineNumber: number) => {
                if (hasMeta) {
                    const highlightNum = node.data.meta?.replace(/\s/g, '');
                    const highlightNumArr = rangeParser(highlightNum);
                    const data: string | null = highlightNumArr.includes(lineNumber)
                        ? 'highlight'
                        : null;

                    return { data };
                } else {
                    return {};
                }
            };

            return match ? (
                <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    className="codeStyle"
                    showLineNumbers={true}
                    wrapLines={!!hasMeta}
                    useInlineStyles={true}
                    lineProps={applyHighlights}
                    {...props}
                />
            ) : (
                <code className={className} {...props} />
            );
        },
    }

    return <article className={classes.content}>
        <PostHeader image={imagePath} title={post?.title}/>
        <ReactMarkdown components={customRenders}>{post?.content}</ReactMarkdown>
    </article>
};

