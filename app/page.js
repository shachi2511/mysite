'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Connect from './components/Connect';

const sections = [
  { href: '/projects', label: 'projects', desc: 'things I built',     tag: '01' },
  { href: '/blogs',    label: 'blogs',    desc: 'tech I\u2019m into lately', tag: '02' },
  { href: '/thoughts', label: 'thoughts', desc: 'the wall',            tag: '03' },
  { href: '/now', label: 'now', desc: 'what I\u2019m into this month', tag: '04' },
];

function Row({ s, i }) {
  const [hover, setHover] = useState(false);
  return (
    <Link href={s.href} style={{ display: 'block', cursor: 'none' }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ display: 'flex', alignItems: 'baseline', gap: '1.25rem', padding: '1.1rem 0.25rem', borderTop: '0.5px solid var(--border)' }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '1.5px', color: hover ? 'var(--rose)' : 'var(--muted)', transition: 'color 0.25s', width: '20px' }}>
          {s.tag}
        </span>
        <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.5rem', color: hover ? 'var(--rose)' : 'var(--off-white)', transition: 'color 0.25s', flex: 1 }}>
          {s.label}
        </span>
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '0.85rem', color: 'var(--muted)', opacity: hover ? 0 : 1, transition: 'opacity 0.25s' }}>
          {s.desc}
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--rose)', opacity: hover ? 1 : 0, transform: hover ? 'translateX(0)' : 'translateX(-8px)', transition: 'all 0.25s' }}>
          &#8594;
        </span>
      </motion.div>
    </Link>
  );
}

export default function Home() {
  return (
    <div style={{ minHeight: 'calc(100vh - 56px)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: [0.42, 0.6, 0.42], scale: [1, 1.045, 1] }}
          transition={{ opacity: { duration: 6, repeat: Infinity, ease: 'easeInOut' }, scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
          style={{ marginBottom: '2rem' }}
        >
          <Image src="/butterfly.png" alt="" width={148} height={148} style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 38px rgba(200,168,178,0.45)) brightness(1.12)' }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.6rem, 7vw, 4.4rem)', fontWeight: 400, letterSpacing: '-2px', color: 'var(--off-white)', lineHeight: 1, textAlign: 'center', marginBottom: '1.5rem' }}
        >
          Shachi<em style={{ fontStyle: 'italic', color: 'var(--rose)' }}> Shriwastava</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '1rem', lineHeight: 1.9, color: 'var(--off-white)', opacity: 0.8, maxWidth: '440px', textAlign: 'center', marginBottom: '3.5rem' }}
        >
          Hey, I&rsquo;m Shachi &mdash; a recent CS grad sharing my journey through
          this field and everything it&rsquo;s led me to. This is my corner of the
          internet for the projects I&rsquo;ve built, the ideas in my head, and
          whatever else feels worth documenting.
        </motion.p>

        <div style={{ width: '100%', maxWidth: '440px' }}>
          {sections.map((s, i) => <Row key={s.href} s={s} i={i} />)}
          <div style={{ borderTop: '0.5px solid var(--border)' }} />
        </div>
      </div>

      <div style={{ maxWidth: '600px', width: '100%', margin: '0 auto', padding: '0 1.5rem 3rem' }}>
        <Connect />
      </div>
    </div>
  );
}