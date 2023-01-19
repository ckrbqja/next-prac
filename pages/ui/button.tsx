import classes from "./button.module.css"
import Link from "next/link";


export default function Button(props: { link?: string, children: any, onClick?: any }) {
    return props.link ? <Link href={props.link} className={classes.btn}>
            {props.children}
        </Link> :
        <button className={classes.btn} onClick={props.onClick}>{props.children}</button>
};