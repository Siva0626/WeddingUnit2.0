import styles from './Films.module.css';
export function Films(){return <section id="films" className={styles.section} aria-labelledby="films-title"><div className={styles.container}><div className={styles.heading}><p className="sectionKicker">FILMS &amp; VIDEOS</p><h2 id="films-title">Stories in Motion</h2><p>The supplied project assets contain photographs only, so no fabricated video player is presented.</p></div><div className={styles.empty}><span className={styles.mark}>TWU</span><div><strong>No video assets supplied</strong><p>Add the original wedding film files to <code>public/videos/</code> to activate real video cards without changing the page architecture.</p></div></div></div></section>}



