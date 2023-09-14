import styles from "./About.module.css"
const About = () => {
    return(
        <div className={styles.about}>
            <h1 className="about-title">Creado por:</h1><br/>
            <h1 className="text-center">Agustin Radocaj</h1><br/>
        </div>
    )
}

export default About