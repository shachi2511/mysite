'use client';
import { motion } from 'framer-motion';

export const LINKS = {
  email: 'shachi503@gmail.com',
  github: 'https://github.com/shachi2511',
  linkedin: 'https://www.linkedin.com/in/shachi-shriwastava-81b013218/',
  substack: 'https://shachishriwastava.substack.com',
};

const items = [
  { label: 'email', href: 'mailto:' + LINKS.email },
  { label: 'linkedin', href: LINKS.linkedin },
  { label: 'github', href: LINKS.github },
];

export default function Connect() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '0.5px solid var(--border)', display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem' }}
    >
      <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--off-white)' }}>
        let&apos;s connect.
      </span>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        {items.map((item) => (
          <a key={item.label} href={item.href} target={item.href.indexOf('mailto') === 0 ? undefined : '_blank'} rel="noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--rose)', cursor: 'none' }}>
            {item.label}
          </a>
        ))}
      </div>
    </motion.div>
  );
}