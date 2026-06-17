'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Connect from '../components/Connect';

const COLORS = [
  { bg: '#e8e6e0', text: '#2a2622' },
  { bg: '#dcc4ca', text: '#3a2a2e' },
  { bg: '#c9cfbf', text: '#2a2e24' },
  { bg: '#c4ccd2', text: '#262a2e' },
];

const DEFAULTS = [
  { id: 'seed1', text: 'explaining a thing to a first-year is the fastest way to find out if you actually understand it.', color: 0, rot: -3 },
  { id: 'seed2', text: 'the accuracy number is never the interesting part. the failure cases are.', color: 2, rot: 2 },
  { id: 'seed3', text: 'ship the small thing that works.', color: 1, rot: -1 },
];

const STORAGE_KEY = 'shachi-wall-notes-v1';

function Note({ n, onRemove }) {
  const [hover, setHover] = useState(false);
  const c = COLORS[n.color] || COLORS[0];
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0, rotate: n.rot }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.04, rotate: 0, zIndex: 5 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', width: '210px', minHeight: '170px', background: c.bg, color: c.text, padding: '1.6rem 1.25rem 1.25rem', boxShadow: '0 10px 30px rgba(0,0,0,0.45)', fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: '0.95rem', lineHeight: 1.5 }}
    >
      <div style={{ position: 'absolute', top: '-7px', left: '50%', transform: 'translateX(-50%)', width: '14px', height: '14px', borderRadius: '50%', background: 'var(--deep-rose)', boxShadow: '0 2px 5px rgba(0,0,0,0.45)' }} />
      <button onClick={() => onRemove(n.id)} aria-label="remove note" style={{ position: 'absolute', top: '6px', right: '9px', background: 'none', border: 'none', color: c.text, opacity: hover ? 0.5 : 0, cursor: 'none', fontSize: '15px', transition: 'opacity 0.2s', lineHeight: 1 }}>
        &#215;
      </button>
      {n.text}
    </motion.div>
  );
}

export default function Thoughts() {
  const [notes, setNotes] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [composing, setComposing] = useState(false);
  const [draft, setDraft] = useState('');
  const [draftColor, setDraftColor] = useState(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      setNotes(raw ? JSON.parse(raw) : DEFAULTS);
    } catch (e) {
      setNotes(DEFAULTS);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(notes)); } catch (e) {}
  }, [notes, loaded]);

  const grab = () => {
    setDraft('');
    setDraftColor(Math.floor(Math.random() * COLORS.length));
    setComposing(true);
  };

  const pin = () => {
    const t = draft.trim();
    if (!t) return;
    const note = { id: 'n' + Date.now(), text: t, color: draftColor, rot: Math.round((Math.random() * 8 - 4) * 10) / 10 };
    setNotes((prev) => [note, ...prev]);
    setDraft('');
    setComposing(false);
  };

  const remove = (id) => setNotes((prev) => prev.filter((x) => x.id !== id));

  const dc = COLORS[draftColor] || COLORS[0];

  return (
    <div style={{ padding: '6rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '2px', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        &mdash; FORM_03
      </p>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 400, letterSpacing: '-2px', fontStyle: 'italic', color: 'var(--off-white)', lineHeight: 1 }}>
        thoughts
      </h1>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'var(--off-white)', opacity: 0.85, marginTop: '1.5rem', maxWidth: '520px', lineHeight: 1.8, fontWeight: 300 }}>
        The wall. Grab a note, scribble a thought, pin it up. Whatever you leave
        sticks around on your device.
      </p>

      <div style={{ marginTop: '2.5rem', minHeight: '60px' }}>
        {!composing ? (
          <button onClick={grab} style={{ position: 'relative', fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.5px', color: 'var(--void)', background: '#e8e6e0', border: 'none', padding: '0.95rem 1.5rem', cursor: 'none', boxShadow: '4px 4px 0 var(--surface), 8px 8px 0 var(--border)' }}>
            + grab a note
          </button>
        ) : (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'inline-block' }}>
            <div style={{ width: '250px', background: dc.bg, color: dc.text, padding: '1.4rem 1.25rem 1.1rem', boxShadow: '0 14px 36px rgba(0,0,0,0.55)' }}>
              <textarea autoFocus value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="write something..." rows={4}
                style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', resize: 'none', color: dc.text, fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.5, cursor: 'text' }} />
              <div style={{ display: 'flex', gap: '7px', margin: '0.85rem 0' }}>
                {COLORS.map((c, idx) => (
                  <button key={idx} onClick={() => setDraftColor(idx)} aria-label="note colour"
                    style={{ width: '17px', height: '17px', borderRadius: '50%', background: c.bg, border: idx === draftColor ? '2px solid var(--deep-rose)' : '1px solid rgba(0,0,0,0.25)', cursor: 'none', padding: 0 }} />
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                <button onClick={pin} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.5px', color: '#fff', background: 'var(--deep-rose)', border: 'none', padding: '7px 13px', cursor: 'none' }}>
                  pin to wall
                </button>
                <button onClick={() => setComposing(false)} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: dc.text, background: 'none', border: 'none', cursor: 'none', opacity: 0.55 }}>
                  discard
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.6rem', marginTop: '3.5rem' }}>
        <AnimatePresence>
          {notes.map((n) => <Note key={n.id} n={n} onRemove={remove} />)}
        </AnimatePresence>
      </div>

      {loaded && notes.length === 0 ? (
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.3rem', color: 'var(--muted)', marginTop: '1rem' }}>
          the wall&rsquo;s empty. grab a note and start it off.
        </p>
      ) : null}

      <Connect />
    </div>
  );
}