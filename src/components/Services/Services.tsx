'use client';
import Image from 'next/image';
import { services } from '@/data/services';
import styles from './Services.module.css';
export function Services(){return <section id="services" className={styles.section} aria-labelledby="services-title"><div className={styles.container}><div className={styles.heading}><p className="sectionKicker">WHAT WE DO</p><h2 id="services-title">Services</h2><p>Each service comes with tailored coverage, curated edits and easy WhatsApp quotes.</p></div><div className={styles.grid}>{services.map(s=><article className={styles.card} key={s.title}><div className={styles.image}><Image src={s.image} alt="" fill sizes="(max-width:700px) 100vw, 20vw"/></div><div className={styles.body}><span className={styles.marker}>01</span><h3>{s.title}</h3><p>{s.description}</p><button onClick={()=>{document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});window.setTimeout(()=>window.dispatchEvent(new CustomEvent('prefill-enquiry',{detail:{service:s.title}})),250)}}>Get Your Quote</button></div></article>)}</div></div></section>}



