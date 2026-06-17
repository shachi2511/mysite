'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Connect, { LINKS } from '../components/Connect';

const posts = [
  {
    date: 'Jun 2026',
    title: 'If AI Is So Smart, Why Does It Forget?',
    blurb: 'The hidden memory problem behind long conversations: why models lose track of the middle of what you tell them, and why memory is really about retrieval, not storage.',
    href: 'https://shachishriwastava.substack.com/p/if-ai-is-so-smart-why-does-it-forget',
  },
];

function PostRow({ post, i }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.a
      href={post.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ display: 'block', cursor: 'none', padding: '1.5rem 0', borderTop: '0.5px solid var(--border)' }}
    >
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '1px', color: 'var(--muted)', marginBottom: '0.5rem' }}>
        {post.date}
      </div>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.7rem', fontWeight: 400, color: hover ? 'var(--rose)' : 'var(--off-white)', letterSpacing: '-0.5px', marginBottom: '0.5rem', transition: 'color 0.2s' }}>
        {post.title} <span style={{ fontStyle: 'normal', color: 'var(--muted)', fontSize: '1rem' }}>&#8599;</span>
      </h2>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--off-white)', opacity: 0.7, lineHeight: 1.7, fontWeight: 300 }}>
        {post.blurb}
      </p>
    </motion.a>
  );
}

export default function Blogs() {
  return (
    <div style={{ padding: '6rem 1.5rem', maxWidth: '760px', margin: '0 auto' }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '2px', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        &mdash; FORM_02
      </p>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 400, letterSpacing: '-2px', fontStyle: 'italic', color: 'var(--off-white)', lineHeight: 1 }}>
        blogs
      </h1>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'var(--off-white)', opacity: 0.85, marginTop: '1.5rem', maxWidth: '520px', lineHeight: 1.8, fontWeight: 300 }}>
        Where I write up whatever I&rsquo;ve been finding interesting in tech lately. It all lives on{' '}
        <a href={LINKS.substack} target="_blank" rel="noreferrer" style={{ color: 'var(--rose)', cursor: 'none', borderBottom: '0.5px solid var(--deep-rose)' }}>
          my Substack
        </a>.
      </p>
      <div style={{ marginTop: '3.5rem' }}>
        {posts.map((post, i) => <PostRow key={post.title} post={post} i={i} />)}
        <div style={{ borderTop: '0.5px solid var(--border)' }} />
      </div>
      <Connect />
    </div>
  );
}
