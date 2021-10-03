import { Button } from '@material-ui/core';
import { useState } from 'react';
import contat from '../../assets/contactus.svg';
import styles from './contactus.module.css';

const ContactUs = () => {

    const [firstName, setFirstname] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const emailAddress = "astrocredence7@gmail.com"
    const firstNameHandle = e => {
        setFirstname(e.target.value);
    }
    const lastNameHandle = e => {
        setLastName(e.target.value);
    }
    const emailHandle = e => {
        setEmail(e.target.value);
    }
    const messageHandle = e => {
        setMessage(e.target.value);
    }

    const handleClick = e => {
        e.preventDefault();
        window.open(
            `mailto:${emailAddress}?subject=Question&body=Name: ${firstName} ${lastName}|| Email: ${email}|| Message: ${message}`
        );
        setMessage("")
        setEmail("")
        setFirstname("")
        setLastName("")
    }

    return (
        <div className="styles.contactUsBackground">
            <div className={styles.contactUsContainer}>
                <div className={styles.contactUsTitleHolder}>
                    <div className={styles.contactz}>
                        <p>Got a Questions? Contact Us</p>
                    
                        <p className={styles.titleContent}>We’re here to help and answer any question 
                        you might have. We look forward to hearing from you</p>
                    </div>
                </div>

                <form className={styles.formContainer}>
                    <div className={styles.formStyle}>
                        <label for="exampleInputEmail1">First Name</label>
                        <input
                            onChange={firstNameHandle}
                            value={firstName}
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"/>

                    </div>

                    <div className={styles.formStyle}>
                        <label for="exampleInputEmail1">Last Name</label>
                        <input
                            onChange={lastNameHandle}
                            value={lastName}
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"/>

                    </div>

                    <div className={styles.formStyle}>
                        <label for="exampleInputEmail1">Email</label>
                        <input
                            onChange={emailHandle}
                            value={email}
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"/>

                    </div>

                    <div className={styles.formStyle}>
                        <label for="exampleInputEmail1">Message</label>
                        <textarea
                            onChange={messageHandle}
                            value={message}
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"/>

                    </div>
                    <Button className={styles.contactUsButton} onClick={handleClick}>Send Message</Button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs