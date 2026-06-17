'use client';
import { motion } from 'framer-motion';
import Connect from '../components/Connect';

const updated = 'June 2026';

const blocks = [
  {
    tag: 'NOW_01',
    head: 'looking for a job',
    body: 'I just graduated and I am looking for my first role, in software or ML/AI. If your team is hiring, the links at the bottom are the easiest way to reach me.',
  },
  {
    tag: 'NOW_02',
    head: 'reading about AI memory',
    body: 'My first blog was on why AI models forget things mid-conversation, and I have kept reading about it since \u2014 papers and articles on memory, retrieval, and long-context. It is the topic I am most into right now.',
  },
  {
    tag: 'NOW_03',
    head: 'doing a lot of sudoku',
    body: 'My current away-from-the-screen thing. I have been getting through a fair few of them lately.',
  },
];


export default function Now() {
  return (
    <div style={{ padding: '6rem 1.5rem', maxWidth: '720px', margin: '0 auto' }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '2px', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        &mdash; FORM_05
      </p>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 400, letterSpacing: '-2px', fontStyle: 'italic', color: 'var(--off-white)', lineHeight: 1 }}>
        now
      </h1>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '1px', color: 'var(--rose)', marginTop: '0.75rem' }}>
        last updated {updated}
      </p>

      <div style={{ marginTop: '3.5rem', position: 'relative' }}>
        <div style={{ position: 'absolute', left: '5px', top: '6px', bottom: '6px', width: '0.5px', background: 'var(--border)' }} />
        {blocks.map((b, i) => (
          <motion.div
            key={b.tag}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '2.75rem' }}
          >
            <div style={{ position: 'absolute', left: 0, top: '6px', width: '11px', height: '11px', borderRadius: '50%', background: 'var(--base)', border: '1.5px solid var(--rose)' }} />
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '2px', color: 'var(--rose)', marginBottom: '0.5rem' }}>
              {b.tag}
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.6rem', fontWeight: 400, color: 'var(--off-white)', marginBottom: '0.6rem', letterSpacing: '-0.5px' }}>
              {b.head}
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--off-white)', opacity: 0.8, lineHeight: 1.8, fontWeight: 300 }}>
              {b.body}
            </p>
          </motion.div>
        ))}
      </div>

      <Connect />
    </div>
  );
}
