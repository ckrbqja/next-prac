import classes from "./contact-form.module.css";
import {ChangeEventHandler, EventHandler, FormEvent, FormEventHandler, useState} from "react";

export default function ContactForm() {

    const [contactForm, setContactForm] = useState({
        email: '',
        name: '',
        message: ''
    });

    async function sendMessageHandler(event:any) {
        event.preventDefault();

        const response = await fetch('/api/contact',{
            method: 'POST',
            body: JSON.stringify(contactForm),
            headers: { 'Content-Type': 'application/json' }
        });

        console.log(await response.json());

        console.log(contactForm);
    }

    function changeHandler(event: any) {
        const {id, value} = event.target;
        setContactForm({...contactForm, [id]: value})
    }

    return <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} onSubmit={sendMessageHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" required onChange={changeHandler}/>
                </div>
            </div>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="name">Your Name</label>
                    <input type="name" id="name" required onChange={changeHandler}/>
                </div>
            </div>

            <div className={classes.control}>
                <label htmlFor="message">Your Message</label>
                <textarea id="message" rows={5} onChange={changeHandler}/>
            </div>

            <div className={classes.actions}>
                <button>Send Message</button>
            </div>
        </form>
    </section>
};