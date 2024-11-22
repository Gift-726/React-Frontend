import React from "react";
import { getImageURL } from "../../utilities";
import styles from './About.module.css';
export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImg} src={getImageURL('about/aboutImg.png')} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageURL('about/image 2.png')} alt="This is the image of girl" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontend developer with experience in building responsive and optimised site</p>
                        </div>

                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageURL('about/image 3.png')} alt="This is the image of girl" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>I have experience in devloping fast and optimised backend systems and API.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageURL('about/image 4.png')} alt="This is the image of girl" />
                        <div className={styles.aboutItemText}>
                            <h3>Web Developer</h3>
                            <p>I'm a  developer skilled in all manners of website development for a useful digital expierence</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>);
};