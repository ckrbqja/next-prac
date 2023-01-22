import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image src={'/images/site/max.png'}
                   alt={'An image showing Max'}
                   width={300}
                   height={300}/>
        </div>
        <h1>안녕하세요 차규범입니다</h1>
        <p>I blog about web development - especially frontend frameworks like React.</p>
    </section>
}