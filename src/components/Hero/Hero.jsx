import React from "react";
import { getImageURL } from "../../utilities";
import styles from "./Hero.module.css";


export const Hero = () => {
    return<section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Gift</h1>
        <p className={styles.description}>I'm a fullstack devloper with  5 years of experience of node js. Reach out if you'd like to learn more</p>
        <a href="ayanogift@gmail.com" className={styles.contactBtn}>Contact Me</a>

    </div>
    <img src={getImageURL('hero/heroImg.png')} alt="Image of a kid" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
}