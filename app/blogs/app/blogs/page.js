'use client';
import { motion } from 'framer-motion';
import Connect, { LINKS } from '../components/Connect';

/* As you publish, add entries here (newest first) and link to the post.
   Leave the array empty and the page shows a clean "first one's coming" state. */
const posts = [
  {
    date: '2026',
    title: 'what RAG actually breaks on',
    blurb: 'Retrieval looks magic until the answer lives across three documents. Notes from building Decode.',
    href: LINKS.substack,
  },
  {
    date: '2026',
    title: 'distilling a model down to something you can ship',
    blurb: 'A big BERT is a research artifact. Here\u2019s what it took to make a small one that still works.',
    href: LINKS.substack,
  },
];

export default function Blogs() {
  return (
    <div style={{ padding: '6rem 1.5rem', maxWidth: '760px', margin: '0 auto' }}>
      <p style={{
        fontFamily: 'var(--font-mono)', fontSize: '9px',
        letterSpacing: '2px', color: 'var(--muted)', marginBottom: '1.5rem',
      }}>
        &mdash; FORM_02
      </p>

      <h1 style={{
        fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 8vw, 5rem)',
        fontWeight: 400, letterSpacing: '-2px', fontStyle: 'italic',
        color: 'var(--off-white)', lineHeight: 1,
      }}>
        blogs
      </h1>

      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: '1.05rem',
        color: 'var(--off-white)', opacity: 0.85, marginTop: '1.5rem',
        maxWidth: '520px', lineHeight: 1.8, fontWeight: 300,
      }}>
        Long-form writing on CS, AI, and the things I figure out the hard way.
        Full pieces live on{' '}
        <a href={LINKS.substack} target="_blank" rel="noreferrer"
           style={{ color: 'var(--rose)', cursor: 'none', borderBottom: '0.5px solid var(--deep-rose)' }}>
          Substack
        </a>.
      </p>

      <div style={{ marginTop: '3.5rem' }}>
        {posts.length === 0 ? (
          <p style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic',
            fontSize: '1.3rem', color: 'var(--muted)',
          }}>
            first one&rsquo;s in the drafts. check back soon.
          </p>
        ) : (
          posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'block', cursor: 'none',
                padding: '1.5rem 0',
                borderTop: '0.5px solid var(--border)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector('h2').style.color = 'var(--rose)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector('h2').style.color = 'var(--off-white)';
              }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px',
                letterSpacing: '1px', color: 'var(--muted)', marginBottom: '0.5rem',
              }}>
                {post.date}
              </div>
              <h2 style={{
                fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                fontSize: '1.7rem', fontWeight: 400, color: 'var(--off-white)',
                letterSpacing: '-0.5px', marginBottom: '0.5rem',
                transition: 'color 0.2s',
              }}>
                {post.title} <span style={{ fontStyle: 'normal', color: 'var(--muted)', fontSize: '1rem' }}>&#8599;</span>
              </h2>
              <p style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.95rem',
                color: 'var(--off-white)', opacity: 0.7, lineHeight: 1.7,
                fontWeight: 300,
              }}>
                {post.blurb}
              </p>
            </motion.a>
          ))
        )}
      </div>

      <Connect />
    </div>
  );
}