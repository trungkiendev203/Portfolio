import { useState, useEffect, useRef } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /* Close on outside click */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen]);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div ref={menuRef}>
      <button
        className={`global-nav__hamburger ${isOpen ? 'is-open' : ''}`}
        aria-label="Menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
      >
        <span></span><span></span>
      </button>

      <div className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__backdrop" />
        <nav className="mobile-menu__panel">
          <a href="#work" className="mobile-menu__link" onClick={() => setIsOpen(false)}>Work</a>
          <a href="#skills" className="mobile-menu__link" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#contact" className="mobile-menu__link" onClick={() => setIsOpen(false)}>Contact</a>
          <div className="mobile-menu__divider" />
          <a
            href="mailto:trungkiendev203@gmail.com"
            className="btn-primary mobile-menu__cta"
            onClick={() => setIsOpen(false)}
          >
            Hire me
          </a>
          {/* TODO: Update href to actual CV file path */}
          <a
            href="#"
            className="btn-ghost mobile-menu__cta"
            onClick={() => setIsOpen(false)}
          >
            Download CV
          </a>
        </nav>
      </div>
    </div>
  );
}
