import ContactForm from "../components/contact/contact-form";
import {Fragment} from "react";
import Head from "next/head";

export default function Contact() {
    return <Fragment>
        <Head>
            <title>Contact Me</title>
            <meta name="description" content="Send me your Message!"/>
        </Head>
        <ContactForm/>
    </Fragment>
};