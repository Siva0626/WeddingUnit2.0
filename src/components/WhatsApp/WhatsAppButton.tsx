import styles from './WhatsAppButton.module.css';
export function WhatsAppButton(){const number=process.env.NEXT_PUBLIC_WHATSAPP_NUMBER||'';const href=number?`https://wa.me/${number}?text=${encodeURIComponent('Hello The Wedding Unit, I would like to enquire about wedding photography. My date/venue is:')}`:'#contact';return <a className={styles.button} href={href} target={number?'_blank':undefined} rel={number?'noreferrer':undefined} aria-label="Chat with The Wedding Unit on WhatsApp"><span>WA</span></a>}


