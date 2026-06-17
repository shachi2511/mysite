'use client';
import './globals.css';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const cursorRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    const move = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button')) cursor.classList.add('hover');
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('a, button')) cursor.classList.remove('hover');
    });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const links = [
    { href: '/',         label: 'home'     },
    { href: '/projects', label: 'projects' },
    { href: '/blogs',    label: 'blogs'    },
    { href: '/thoughts', label: 'thoughts' },
    { href: '/now',      label: 'now'      },
  ];

  return (
    <html lang="en">
      <body>
        <div ref={cursorRef} className="cursor" />

        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0.75rem 3rem',
          background: 'rgba(19,17,16,0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: '0.5px solid var(--border)',
          height: '56px',
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--rose)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface)' }}>
              <Image src="/butterfly.png" alt="Shachi" width={34} height={34} style={{ objectFit: 'contain' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontStyle: 'italic', color: 'var(--off-white)' }}>
              Shachi
            </span>
          </Link>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {links.map(({ href, label }) => (
              <Link key={href} href={href} style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.3px',
                color: pathname === href ? 'var(--off-white)' : 'var(--muted)',
                borderBottom: pathname === href ? '0.5px solid var(--off-white)' : '0.5px solid transparent',
                paddingBottom: '2px', transition: 'color 0.2s',
              }}>
                {label}
              </Link>
            ))}
          </div>
        </nav>

        <main style={{ paddingTop: '56px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}