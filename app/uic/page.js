'use client';
import { motion } from 'framer-motion';
import Connect from '../components/Connect';

const entries = [
  {
    tag: 'UIC_01',
    head: 'mentor, ENGR 100 / 101',
    body: 'The freshman and transfer-student seminars for the College of Engineering. As a mentor I helped new students find their footing at UIC,  making sense of the curriculum, the college, and how things actually work here. I co-built and presented the lecture slides with my fellow mentors, which is where I learned that teaching something is the fastest way to understand it yourself.',
  },
  {
    tag: 'UIC_02',
    head: 'Society of Women Engineers',
    body: 'A community focused on supporting women in engineering through workshops, corporate events, and a lot of mutual encouragement. I was a member, and it was one of the places that made a big engineering college feel smaller.',
  },
  {
    tag: 'UIC_03',
    head: 'Women in Computer Science',
    body: 'A student-led group working to close the gender gap in tech through mentorship, professional development, and community. Being part of WiCS meant a network of peers and role models who actually understood what the CS path looks like from where I was standing.',
  },
  {
    tag: 'UIC_04',
    head: 'Association for Computing Machinery',
    body: 'UIC\u2019s ACM student chapter, a community for anyone curious about computing, from guest lectures and company talks to LAN parties and special-interest groups. A good reminder that the field is as much about the people as the code.',
  },
];

export default function UIC() {
  return (
    <div style={{ padding: '6rem 1.5rem', maxWidth: '760px', margin: '0 auto' }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '2px', color: 'var(--muted)', marginBottom: '1.5rem' }}>
        &mdash; FORM_03
      </p>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 400, letterSpacing: '-2px', fontStyle: 'italic', color: 'var(--off-white)', lineHeight: 1 }}>
        uic
      </h1>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.05rem', color: 'var(--off-white)', opacity: 0.85, marginTop: '1.5rem', maxWidth: '520px', lineHeight: 1.8, fontWeight: 300 }}>
        My time at the University of Illinois Chicago, mostly the parts that happened
        outside of class: mentoring, and the communities I was part of.
      </p>

      <div style={{ marginTop: '3.5rem', position: 'relative' }}>
        <div style={{ position: 'absolute', left: '5px', top: '6px', bottom: '6px', width: '0.5px', background: 'var(--border)' }} />
        {entries.map((e, i) => (
          <motion.div
            key={e.tag}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', paddingLeft: '2rem', marginBottom: '2.75rem' }}
          >
            <div style={{ position: 'absolute', left: 0, top: '6px', width: '11px', height: '11px', borderRadius: '50%', background: 'var(--base)', border: '1.5px solid var(--rose)' }} />
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '2px', color: 'var(--rose)', marginBottom: '0.5rem' }}>
              {e.tag}
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.6rem', fontWeight: 400, color: 'var(--off-white)', marginBottom: '0.6rem', letterSpacing: '-0.5px' }}>
              {e.head}
            </h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--off-white)', opacity: 0.8, lineHeight: 1.8, fontWeight: 300 }}>
              {e.body}
            </p>
          </motion.div>
        ))}
      </div>

      <Connect />
    </div>
  );
}
