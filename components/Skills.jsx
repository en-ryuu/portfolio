import styles from "../styles/Skills.module.scss";

const Skills = () => {
    return (
        <section id="skills">
            <div className="skills-section single-section">
                <div className="section-heading">
                    <p className="section-description">I have done projects using the following.</p>
                    <h2 className="section-title">My Skills</h2>
                </div>
                <div className="container">
                    <div className={styles.skillTable}>
                        {/* <div className={styles.emptySpacer1}></div>
                        <div className={styles.emptySpacer2}></div> */}
                        <div className={`${styles.skillElement}  ${styles.gra1}`} data-description="HTML">
                            <div className={styles.skillElementInner}>
                                <div className={styles.title}>Html</div>
                                <div className={styles.description}>HTML</div>
                            </div>
                        </div>
                        <div className={`${styles.skillElement}  ${styles.gra2}`} data-description="CSS">
                            <div className={styles.skillElementInner}>
                                <div className={styles.title}>Css</div>
                                <div className={styles.description}>CSS</div>
                            </div>
                        </div>
                        <div className={`${styles.skillElement}  ${styles.gra3}`} data-description="Javascript">
                            <div className={styles.skillElementInner}>
                                <div className={styles.title}>Js</div>
                                <div className={styles.description}>JavaScript</div>
                            </div>
                        </div>
                        <div className={`${styles.skillElement}  ${styles.gra4}`} data-description="Jquery">
                            <div className={styles.skillElementInner}>
                                <div className={styles.title}>Jq</div>
                                <div className={styles.description}>JQuery</div>
                            </div>
                        </div>
                        <div className={`${styles.skillElement}  ${styles.gra5}`} data-description="p5.js">
                            <div className={styles.skillElementInner}>
                                <div className={styles.title}>p5</div>
                                <div className={styles.description}>p5.js</div>
                            </div>
                        </div>
                        <div className={`${styles.skillElement}  ${styles.gra6}`} data-description="Photoshop">
                            <div className={styles.skillElementInner}>
                                <div className={styles.title}>Ps</div>
                                <div className={styles.description}>Photoshop</div>
                            </div>
                        </div>
                        <div className={`${styles.skillElement}  ${styles.gra7}`} data-description="Figma">
                            <div className={styles.skillElementInner}>
                                <div className={styles.title}>Fg</div>
                                <div className={styles.description}>Figma</div>
                            </div>
                        </div>
                        <div className={`${styles.skillElement}  ${styles.gra8}`} data-description="Angular">
                            <div className={styles.skillElementInner}>
                                <div className={styles.title}>An</div>
                                <div className={styles.description}>Angular</div>
                            </div>
                        </div>
                        <div className={`${styles.skillElement}  ${styles.gra9}`} data-description="Next.js">
                            <div className={styles.skillElementInner}>
                                <div className={styles.title}>Nxt</div>
                                <div className={styles.description}>Next.js</div>
                            </div>
                        </div>
                        <div className={`${styles.skillElement}  ${styles.gra10}`} data-description="RealWorldCursor">
                            <div className={styles.skillElementInner}>
                                <div className={styles.title}>Rc</div>
                                <div className={styles.description}>Real World Cursor</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
};

export default Skills;