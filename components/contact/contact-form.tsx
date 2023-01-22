import classes from "./contact-form.module.css";
import {useEffect, useState} from "react";
import Notification from '../ui/Notification'

type notificationType = {
    status: string,
    title: string,
    message: string
}

type contactType = {
    email: string,
    name: string,
    message: string
}


export default function ContactForm() {
    const [contactForm, setContactForm] = useState<contactType>({
        email: '',
        name: '',
        message: ''
    });

    const [notification, setNotification] = useState<notificationType | null>();

    useEffect(() => {
        if (notification?.status !== 'pending') {
            const timeout = setTimeout(() => {
                setNotification(null)
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [notification])

    const NOTIFICATION_MANUAL: any = {
        error: {
            status: 'error',
            title: 'error',
            message: 'error occurred'
        },
        success: {
            status: 'success',
            title: 'success',
            message: 'succeeded!'
        },
        pending: {
            status: 'pending',
            title: 'pending',
            message: 'Loading...',
        }
    }

    async function sendMessageHandler(event: any) {
        event.preventDefault();

        setNotification(NOTIFICATION_MANUAL.pending)

        const res = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(contactForm),
            headers: {'Content-Type': 'application/json'}
        });


        if (res.ok) {
            setNotification(NOTIFICATION_MANUAL.success);
            setContactForm({
                email: '',
                name: '',
                message: ''
            })
        } else {
            setNotification(NOTIFICATION_MANUAL.error);
        }

    }

    function changeHandler(event: any) {
        const {id, value} = event.target;
        setContactForm({...contactForm, [id]: value} as contactType)
    }

    return <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} onSubmit={sendMessageHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" required onChange={changeHandler} value={contactForm?.email}/>
                </div>
            </div>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="name">Your Name</label>
                    <input type="name" id="name" required onChange={changeHandler} value={contactForm?.name}/>
                </div>
            </div>

            <div className={classes.control}>
                <label htmlFor="message">Your Message</label>
                <textarea id="message" rows={5} onChange={changeHandler} value={contactForm?.message}/>
            </div>

            <div className={classes.actions}>
                <button>Send Message</button>
            </div>
        </form>
        {notification &&
            <Notification title={notification.title} message={notification.message} status={notification.status}/>}
    </section>
};
