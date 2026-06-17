'use client';
import { motion } from 'framer-motion';
import Connect from '../components/Connect';

const projects = [
  {
    tag: 'PRJ_01',
    name: 'Schedulr',
    hook: 'it builds your week so you don\u2019t have to.',
    note: null,
    bullets: [
      'You give it your tasks and fixed commitments, and it works out when everything should happen',
      'A greedy scheduling algorithm drops each task into your first free block before its deadline, and tells you honestly when something won\u2019t fit',
      'React and TypeScript on the front end, FastAPI and MongoDB on the back',
      'I set it up on AWS (EC2 and S3) to learn how real deployment actually works',
    ],
    stack: ['React', 'TypeScript', 'FastAPI', 'MongoDB', 'AWS'],
    repo: 'https://github.com/shachi2511/Schedulr',
    demo: null,
    img: null,
  },
  {
    tag: 'PRJ_02',
    name: 'Decode',
    hook: 'paste dense technical docs, get them back in plain english.',
    note: null,
    bullets: [
      'Takes documentation, error messages, or specs that assume you already know the jargon, and explains them in plain English',
      'A full RAG pipeline: it chunks and embeds the text with SentenceTransformers, retrieves context from ChromaDB, then generates with Claude',
      'Gives you clear explanations with key terms defined and real-world analogies',
      'Works on raw text or whole PDFs',
    ],
    stack: ['Python', 'FastAPI', 'ChromaDB', 'SentenceTransformers', 'Claude API'],
    repo: 'https://github.com/shachi2511/Decode',
    demo: null,
    img: null,
  },
  {
    tag: 'PRJ_03',
    name: 'Hotel Management System',
    hook: 'a full booking system, built on a database that refuses to double-book.',
    note: '// group project',
    bullets: [
      'A full hotel booking system with separate client and manager dashboards',
      'Clients can search hotels, check availability for a date range, and book or cancel rooms',
      'Managers get analytics like top clients and spending reports',
      'The part I\u2019m proudest of: a GIST exclusion constraint makes overlapping bookings impossible at the database level, so it can\u2019t double-book a room even if the app logic slips',
    ],
    stack: ['Python', 'PostgreSQL', 'psycopg2', 'Tkinter'],
    repo: 'https://github.com/shachi2511/hotel_app',
    demo: null,
    img: null,
  },
  {
    tag: 'PRJ_04',
    name: 'HN Watcher',
    hook: 'a little bot that watches hacker news so you don\u2019t have to.',
    note: null,
    bullets: [
      'I wanted to hear about good Hacker News posts on my topics without checking the site all day',
      'It pulls recent stories from the HN API, keeps only the ones above an upvote threshold, and remembers what it has already seen so nothing repeats',
      'Then it sends the rest straight to Discord or Slack',
      'About a hundred lines, runs on cron, and costs nothing to keep alive',
    ],
    stack: ['Python', 'REST APIs', 'Webhooks', 'cron'],
    repo: 'https://github.com/shachi2511/HackerNewsWatcher',
    demo: null,
    img: null,
  },
];

function Chip({ children }) {
  return (
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.3px', color: 'var(--warm)', border: '0.5px solid var(--border)', borderRadius: '2px', padding: '3px 8px', whiteSpace: 'nowrap' }}>
      {children}
    </span>
  );
}

function Card({ p, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
      style={{ background: 'var(--surface)', border: '0.5px solid var(--border)', borderRadius: '6px', padding: '1.75rem' }}
    >
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '2px', color: 'var(--rose)', marginBottom: '0.75rem' }}>
        {p.tag}
      </div>
      <h2 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.9rem', fontWeight: 400, color: 'var(--off-white)', letterSpacing: '-0.5px', marginBottom: '0.4rem' }}>
        {p.name}
      </h2>
      <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--rose)', marginBottom: p.note ? '0.5rem' : '1.2rem' }}>
        {p.hook}
      </p>

      {p.note ? (
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '1px', color: 'var(--warm)', marginBottom: '1.2rem' }}>
          {p.note}
        </div>
      ) : null}

      {p.img ? (
        <img src={p.img} alt={p.name} style={{ width: '100%', borderRadius: '4px', border: '0.5px solid var(--border)', marginBottom: '1.25rem', display: 'block' }} />
      ) : null}

      <ul style={{ listStyle: 'none', margin: '0 0 1.4rem', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {p.bullets.map((b, j) => (
          <li key={j} style={{ display: 'flex', gap: '0.65rem', fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'var(--off-white)', opacity: 0.82, lineHeight: 1.65, fontWeight: 300 }}>
            <span style={{ color: 'var(--rose)', flexShrink: 0, fontFamily: 'var(--font-mono)', fontSize: '0.85rem', lineHeight: 1.7 }}>&#8250;</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.25rem' }}>
        {p.stack.map((s) => <Chip key={s}>{s}</Chip>)}
      </div>

      <div style={{ display: 'flex', gap: '1.25rem' }}>
        <a href={p.repo} target="_blank" rel="noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.4px', color: 'var(--off-white)', cursor: 'none' }}>
          code <span style={{ color: 'var(--muted)' }}>&#8599;</span>
        </a>
        {p.demo ? (
          <a href={p.demo} target="_blank" rel="noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.4px', color: 'var(--off-white)', cursor: 'none' }}>
            live demo <span style={{ color: 'var(--muted)' }}>&#8599;</span>
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <div style={{ padding: '6rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '2px', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        &mdash; FORM_01
      </p>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 400, letterSpacing: '-2px', fontStyle: 'italic', color: 'var(--off-white)', lineHeight: 1 }}>
        projects
      </h1>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'var(--off-white)', opacity: 0.85, marginTop: '1.5rem', maxWidth: '560px', lineHeight: 1.8, fontWeight: 300 }}>
        A few of the things I&rsquo;ve built -- a sample, not the whole list.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.25rem', marginTop: '3rem' }}>
        {projects.map((p, i) => <Card key={p.tag} p={p} i={i} />)}
      </div>

      <Connect />
    </div>
  );
}