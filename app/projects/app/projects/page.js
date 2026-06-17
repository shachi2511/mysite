'use client';
import { motion } from 'framer-motion';
import Connect from '../components/Connect';

/* ----------------------------------------------------------------
   Your projects. Swap repo/demo links for the real ones.
   Keep it to your 3–5 strongest — quality reads louder than volume.
   ---------------------------------------------------------------- */
const projects = [
  {
    tag: 'PRJ_01',
    name: 'Decode',
    line: 'Ask a question, get a cited answer — over messy technical docs.',
    body: `Documentation is dense and scattered across formats, so finding one
    exact answer means reading everything around it. Decode ingests unstructured
    docs, embeds them, and returns structured, source-cited answers through a
    retrieval pipeline — the same noisy-data problem I keep being drawn to.`,
    stack: ['Python', 'RAG', 'ChromaDB', 'SentenceTransformers', 'FastAPI'],
    repo: 'https://github.com/your-handle/decode',
    demo: null,
  },
  {
    tag: 'PRJ_02',
    name: 'Emotion & Personality Prediction',
    line: 'Three model architectures, one honest comparison, on real noisy text.',
    body: `Trained and evaluated three architectures on the WASSA 2024 dataset to
    predict emotion and personality from writing, then distilled the strongest one
    down to a lighter, deployable size. The interesting part wasn't the accuracy
    number — it was learning what breaks when data has class imbalance and edge
    cases that simple approaches miss.`,
    stack: ['PyTorch', 'BERT', 'HuggingFace', 'Knowledge Distillation'],
    repo: 'https://github.com/your-handle/emotion-personality',
    demo: null,
  },
  {
    tag: 'PRJ_03',
    name: 'Connect 4',
    line: 'A playable board, an AI that doesn\u2019t lose on purpose.',
    body: `A full Connect Four with a clean GUI and a minimax opponent. This was the
    project where game-state search and recursion finally clicked for me — small in
    scope, but the first thing I built that someone could actually sit down and play.`,
    stack: ['Python', 'Minimax', 'GUI'],
    repo: 'https://github.com/your-handle/connect4',
    demo: null,
  },
  {
    tag: 'PRJ_04',
    name: 'This site',
    line: 'The thing you\u2019re looking at — hand-built, no template.',
    body: `Built from scratch in Next.js: the butterfly that explodes into navigation,
    the custom cursor, the whole warm-black system. A living project I keep breaking
    and rebuilding whenever I learn something new about the front end.`,
    stack: ['Next.js', 'React', 'Framer Motion'],
    repo: 'https://github.com/your-handle/portfolio',
    demo: null,
  },
];

function Chip({ children }) {
  return (
    <span style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.3px',
      color: 'var(--warm)',
      border: '0.5px solid var(--border)',
      borderRadius: '2px',
      padding: '3px 8px',
      whiteSpace: 'nowrap',
    }}>
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
      whileHover={{ y: -4 }}
      style={{
        background: 'var(--surface)',
        border: '0.5px solid var(--border)',
        borderRadius: '6px',
        padding: '1.75rem',
        transition: 'border-color 0.25s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--deep-rose)')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
    >
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '9px',
        letterSpacing: '2px', color: 'var(--rose)', marginBottom: '0.75rem',
      }}>
        {p.tag}
      </div>

      <h2 style={{
        fontFamily: 'var(--font-serif)', fontStyle: 'italic',
        fontSize: '1.9rem', fontWeight: 400, color: 'var(--off-white)',
        letterSpacing: '-0.5px', marginBottom: '0.4rem',
      }}>
        {p.name}
      </h2>

      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: '0.95rem',
        color: 'var(--rose)', marginBottom: '1rem', fontWeight: 400,
      }}>
        {p.line}
      </p>

      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: '0.92rem',
        color: 'var(--off-white)', opacity: 0.78, lineHeight: 1.75,
        marginBottom: '1.25rem', fontWeight: 300,
      }}>
        {p.body}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.25rem' }}>
        {p.stack.map((s) => <Chip key={s}>{s}</Chip>)}
      </div>

      <div style={{ display: 'flex', gap: '1.25rem' }}>
        <a href={p.repo} target="_blank" rel="noreferrer" style={linkStyle}>
          code <span style={{ color: 'var(--muted)' }}>&#8599;</span>
        </a>
        {p.demo && (
          <a href={p.demo} target="_blank" rel="noreferrer" style={linkStyle}>
            live demo <span style={{ color: 'var(--muted)' }}>&#8599;</span>
          </a>
        )}
      </div>
    </motion.article>
  );
}

const linkStyle = {
  fontFamily: 'var(--font-mono)', fontSize: '12px',
  letterSpacing: '0.4px', color: 'var(--off-white)', cursor: 'none',
};

export default function Projects() {
  return (
    <div style={{ padding: '6rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
      <p style={{
        fontFamily: 'var(--font-mono)', fontSize: '9px',
        letterSpacing: '2px', color: 'var(--muted)', marginBottom: '1.5rem',
      }}>
        &mdash; FORM_01
      </p>

      <h1 style={{
        fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 8vw, 5rem)',
        fontWeight: 400, letterSpacing: '-2px', fontStyle: 'italic',
        color: 'var(--off-white)', lineHeight: 1,
      }}>
        projects
      </h1>

      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: '1.05rem',
        color: 'var(--off-white)', opacity: 0.85, marginTop: '1.5rem',
        maxWidth: '560px', lineHeight: 1.8, fontWeight: 300,
      }}>
        I build ML and NLP systems — mostly retrieval pipelines and models that have
        to hold up against real, messy data. Here are the few I&rsquo;m proudest of.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.25rem',
        marginTop: '3rem',
      }}>
        {projects.map((p, i) => <Card key={p.tag} p={p} i={i} />)}
      </div>

      <Connect />
    </div>
  );
}