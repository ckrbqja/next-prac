import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";
import {postType} from "./posts-grid";

export default function PostItem(props: { post: postType }){
    const {title, image, excerpt, slug, date} = props.post;
    const formattedDate = new Date(date).toLocaleDateString('ko-KR',{
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });


    return <li className={classes.post}>
        <Link href={`/posts/${slug}`}>
                <div className={classes.image}>
                    <Image src={`/images/posts/${slug}/${image}`} alt={title} width={300} height={200} layout={'responsive'}/>
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
        </Link>
    </li>
};