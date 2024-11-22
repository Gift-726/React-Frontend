import React from "react";
import styles from "./projects.module.css"
import Project from '../../data/project.json'
import { getImageURL } from "../../utilities";
export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.content}>
                {
                    Project.map((Project, id) => {
                        return<div key={id} className={styles.cardContainer}>
                            <img 
                            src={getImageURL(Project.imageSrc)}
                           alt={`image of ${Project.title}`}
                           className={styles.cardImage}/>
                           <h3 className={styles.cardTitle}>{Project.title}</h3>
                           <p className={styles.cardDescription}>{Project.description}</p>
                           <ul className={styles.skills}>{
                                Project.skills.map((ProjectSkills, id) => {
                                    return  <li key={id} className={styles.skill}>{ProjectSkills}</li> 

                                })}
                                </ul>
                           <div className={styles.links}>
                                <a href={Project.demo}>Demo</a>
                                <a href={Project.source}>Source</a>
                           </div>
                        </div>
                    })
                }
            </div>
        </section>

    )
}