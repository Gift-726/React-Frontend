import React from "react";
import styles from "./Contanct.module.css"

import { getImageURL } from "../../utilities";

export const Contact = () => {
    return <footer className={styles.container} id="contact">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img 
                src={getImageURL("contact/email.png")}
                alt='Email Icon'/>
                <a href="mailto:ayanogift@gmail.com">myemail@gmail.com</a>
            </li>
            <li className={styles.link}>
            <img 
            src={getImageURL("contact/linkedin.png")}
            alt='LinkedIn Icon'/>
            <a href="https://www.linkedin.com/in/gift-ayano726">linkedin.com/gift-ayano</a>
        </li>
            <li className={styles.link}>
                <img 
                src={getImageURL("contact/github.png")}
                alt='Github Icon'/>
                <a href="https://www.github.com/Gift-726/">github.com/Gift-726</a>
            </li>
        </ul>
    </footer>
}