'use client';
import Image from 'next/image';
import { packages } from '@/data/packages';
import styles from './Packages.module.css';
export function Packages(){return <section id="packages" className={styles.section} aria-labelledby="packages-title"><div className={styles.container}><div className={styles.heading}><p className="sectionKicker">CURATED COVERAGE</p><h2 id="packages-title">Marriage Packages</h2><p>Three curated packages for full wedding coverage. Upgrade with drone, albums and extra shooters as needed.</p></div><div className={styles.grid}>{packages.map(p=><article className={styles.card} key={p.name}><div className={styles.image}><Image src={p.image} alt="" fill sizes="(max-width:700px) 100vw, 33vw"/></div><div className={styles.body}><h3>{p.name}</h3><div className={styles.price}>Starting at {p.price}</div><ul>{p.highlights.map(h=><li key={h}>{h}</li>)}</ul><button onClick={()=>{document.getElementById('contact')?.scrollIntoView({behavior:'smooth'});window.setTimeout(()=>window.dispatchEvent(new CustomEvent('prefill-enquiry',{detail:{packageName:p.name}})),250)}}>Book Your Slot Now</button></div></article>)}</div></div></section>}



