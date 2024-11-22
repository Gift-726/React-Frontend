import React from 'react';
import skills from '../../data/skills.json';
import history from '../../data/history.json';
import styles from './Experience.module.css'
import { getImageURL } from '../../utilities';
export const Experience = () => {
    return (
        <section id='experience' className={styles.container}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>{
                    skills.map((skill, id) => {
                        return <div key={id} className={styles.skill}>
                            <div className={styles.skillImgContainer}>
                                <img src={getImageURL(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    })
                }

                </div>
                <ul className={styles.history}>
                    {
                        history.map((historyItems, id) => {
                            return <li className={styles.historyItem}>
                                <img
                                    src={getImageURL(historyItems.imageSrc)}
                                    alt={`${historyItems.organisation} logo`} />
                                <div className={styles.historyItemDetail}>
                                    <h3>{historyItems.role}, {historyItems.organisation}</h3>
                                    <p>{historyItems.startDate} - {historyItems.endDate}</p>
                                    <p></p>
                                    <ul>
                                        {
                                            historyItems.experiences.map((experience, id) => {
                                                return <li>
                                                    <div key={id}>
                                                        {experience}
                                                    </div>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </section>
        
    )
}