import { useEffect } from 'react';
import Hero3D from './components/Hero3D';
import TypeWriter from './components/TypeWriter';
import MobileMenu from './components/MobileMenu';

function App() {
  /* Scroll-reveal observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ======== GLOBAL NAV ======== */}
      <nav className="global-nav">
        <div className="global-nav__inner">
          <a href="#" className="global-nav__logo">Trung Kien</a>
          <div className="global-nav__links">
            <a href="#work" className="global-nav__link">Work</a>
            <a href="#skills" className="global-nav__link">Skills</a>
            <a href="#contact" className="global-nav__link">Contact</a>
          </div>
          {/* R-02: Mobile hamburger with toggle logic */}
          <MobileMenu />
        </div>
      </nav>

      {/* ======== SUB-NAV (frosted) ======== */}
      <div className="sub-nav">
        <div className="sub-nav__inner">
          <span className="sub-nav__title">Portfolio</span>
          <div className="sub-nav__actions">
            <a href="#work" className="sub-nav__link">Projects</a>
            <a href="#skills" className="sub-nav__link">Skills</a>
            <a
              href="/Nguyen-Trung-Kien-CV-v1.pdf"
              target="_blank"
              rel="noreferrer"
              className="sub-nav__link"
            >
              Resume ↓
            </a>
            <a
              href="mailto:trungkiendev203@gmail.com"
              className="btn-primary"
              style={{ fontSize: 14, padding: '8px 16px' }}
            >
              Hire me
            </a>
          </div>
        </div>
      </div>

      <main style={{ paddingTop: 96 }}>
        {/* ======== HERO (white tile) ======== */}
        <section className="tile tile--white" style={{ position: 'relative' }}>
          <Hero3D />
          <div className="tile__inner" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal">
              <img src="/images/image.png" alt="Nguyen Trung Kien" className="hero-avatar" />
              <p className="tile__overline">Backend Developer Intern</p>
              <h1 className="tile__headline">
                Nguyen Trung Kien.
              </h1>
              {/* H-04: Typewriter animated tagline */}
              <p className="tile__tagline">
                <TypeWriter
                  phrases={[
                    'Building scalable backend systems.',
                    'Crafting automation pipelines.',
                    'Developing real-time bots.',
                    'Engineering AI-driven tools.',
                  ]}
                  typingSpeed={70}
                  deletingSpeed={35}
                  pauseDuration={2200}
                />
              </p>
              <div className="tile__ctas">
                <a href="#work" className="btn-store-hero">View Projects</a>
                {/* A-03: Download CV button in Hero */}
                <a
                  href="/Nguyen-Trung-Kien-CV-v1.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  Download CV
                </a>
                <a href="mailto:trungkiendev203@gmail.com" className="btn-ghost">Get in touch</a>
              </div>
            </div>
          </div>
        </section>

        {/* ======== PROJECT 1 — Concert Alert Bot (dark tile) ======== */}
        <section id="work" className="tile tile--dark">
          <div className="tile__inner reveal">
            <p className="tile__overline" style={{ color: 'var(--color-primary-on-dark)' }}>
              Automation / Backend
            </p>
            <h2 className="tile__headline tile__headline--lg">Concert Alert Bot</h2>
            <p className="tile__tagline">
              Real-time Facebook monitoring with instant Telegram alerts.
            </p>
            {/* P-03: Technical depth */}
            <p className="tile__challenge">
              Challenge: Bypassing Facebook's anti-scraping measures while maintaining
              reliable 24/7 monitoring — handling dynamic DOM changes, session rotation,
              and processing 500+ posts daily without detection.
            </p>
            <div className="tile__ctas">
              <a href="https://github.com/trungkiendev203" target="_blank" rel="noreferrer" className="link-sky">
                View on GitHub →
              </a>
            </div>
            <div className="tile__product-img">
              <img src="/images/bot-mockup.png" alt="Concert Alert Bot terminal screenshot" loading="lazy" />
            </div>
            <div className="feature-list" style={{ color: 'var(--color-body-muted)' }}>
              <span className="feature-list__item">Playwright headless scraping</span>
              <span className="feature-list__item">Anti-detection strategies</span>
              <span className="feature-list__item">Telegram Bot API integration</span>
              <span className="feature-list__item">SQLite duplicate prevention</span>
            </div>
          </div>
        </section>

        {/* ======== PROJECT 2 — Badminton Matching (parchment tile) ======== */}
        <section className="tile tile--parchment">
          <div className="tile__inner reveal">
            <p className="tile__overline">Spring Boot / Full Stack</p>
            <h2 className="tile__headline tile__headline--lg">Badminton Matching</h2>
            <p className="tile__tagline">
              Connecting players by location, time, and skill level.
            </p>
            <p className="tile__challenge">
              Challenge: Designing an efficient search algorithm that filters
              players across multiple criteria — location radius, skill rating,
              and availability — while keeping response times under 200ms.
            </p>
            <div className="tile__ctas">
              <a href="https://github.com/trungkiendev203/Tim_Tran_Cau_Long" target="_blank" rel="noreferrer" className="btn-primary">
                View Case Study
              </a>
              <a href="https://github.com/trungkiendev203/Tim_Tran_Cau_Long" target="_blank" rel="noreferrer" className="link-blue">
                Source Code →
              </a>
            </div>
            <div className="tile__product-img">
              <img src="/images/badminton-mockup.png" alt="Badminton matching web application" loading="lazy" />
            </div>
            <div className="feature-list">
              <span className="feature-list__item">REST APIs with Spring Boot</span>
              <span className="feature-list__item">Search & filtering system</span>
              <span className="feature-list__item">Database design for posts</span>
              <span className="feature-list__item">Facebook data sync crawler</span>
            </div>
          </div>
        </section>

        {/* ======== PROJECT 3 — Story Cooker (dark-2 tile) ======== */}
        <section className="tile tile--dark-2">
          <div className="tile__inner reveal">
            <p className="tile__overline" style={{ color: 'var(--color-primary-on-dark)' }}>
              Python / AI Automation
            </p>
            <h2 className="tile__headline tile__headline--lg">Story Cooker</h2>
            <p className="tile__tagline">
              AI-driven video creation from script to screen.
            </p>
            <p className="tile__challenge">
              Challenge: Orchestrating a multi-agent pipeline — LLM script generation,
              TTS voice synthesis, image generation, and FFmpeg video assembly —
              into a one-click automated workflow with real-time progress tracking.
            </p>
            <div className="tile__ctas">
              <a href="https://github.com/trungkiendev203/STORY-COOKER---AUTO-VIDEO-MAKER" target="_blank" rel="noreferrer" className="btn-primary">
                View Project
              </a>
              <a href="https://github.com/trungkiendev203/STORY-COOKER---AUTO-VIDEO-MAKER" target="_blank" rel="noreferrer" className="link-sky">
                Source Code →
              </a>
            </div>
            <div className="tile__product-img">
              <img src="/images/storycooker-mockup.png" alt="Story Cooker AI video tool" loading="lazy" />
            </div>
            <div className="feature-list" style={{ color: 'var(--color-body-muted)' }}>
              <span className="feature-list__item">Multi-agent AI workflow</span>
              <span className="feature-list__item">LLM + TTS integration</span>
              <span className="feature-list__item">FFmpeg, OpenCV, PyDub pipeline</span>
              <span className="feature-list__item">CustomTkinter desktop UI</span>
            </div>
          </div>
        </section>

        {/* ======== PROJECT 4 — E-Commerce (white tile) ======== */}
        <section className="tile tile--white">
          <div className="tile__inner reveal">
            <p className="tile__overline">PHP / Laravel MVC</p>
            <h2 className="tile__headline tile__headline--lg">E-Commerce System</h2>
            <p className="tile__tagline">
              Full-featured online shopping with admin management.
            </p>
            <p className="tile__challenge">
              Challenge: Building a complete e-commerce flow — product catalog,
              cart management, secure checkout, and admin dashboard —
              following MVC architecture with proper authentication and role-based access.
            </p>
            <div className="tile__ctas">
              <a href="https://github.com/trungkiendev203/WebBanHang" target="_blank" rel="noreferrer" className="btn-primary">
                View on GitHub
              </a>
            </div>
            <div className="tile__product-img">
              <img src="/images/ecommerce-mockup.png" alt="E-commerce admin dashboard" loading="lazy" />
            </div>
            <div className="feature-list">
              <span className="feature-list__item">Authentication & CRUD</span>
              <span className="feature-list__item">Order processing logic</span>
              <span className="feature-list__item">MySQL schema design</span>
              <span className="feature-list__item">Laravel MVC architecture</span>
            </div>
          </div>
        </section>

        {/* ======== SKILLS GRID (parchment tile) ======== */}
        <section id="skills" className="tile tile--parchment">
          <div className="tile__inner">
            <div className="reveal">
              <h2 className="tile__headline tile__headline--lg" style={{ marginBottom: 48 }}>
                Tools of the trade.
              </h2>
            </div>
            {/* S-01: Fixed bento grid — filled all gaps */}
            <div className="bento-grid reveal">
              <div className="bento-card bento-card--wide">
                <div className="terminal">
                  <div className="terminal__header">
                    <div className="terminal__dot red"></div>
                    <div className="terminal__dot yellow"></div>
                    <div className="terminal__dot green"></div>
                  </div>
                  <div className="terminal__line">guest@portfolio:~$ whoami</div>
                  <div className="terminal__line" style={{ color: '#fff', marginBottom: 12 }}>Trung Kien - Backend Developer Intern</div>
                  <div className="terminal__line">guest@portfolio:~$ cat skills.json</div>
                  <div className="terminal__line" style={{ color: '#fff' }}>
                    {'{'}
                    <br/>&nbsp;&nbsp;"language": ["Java", "PHP", "Python"],
                    <br/>&nbsp;&nbsp;"frameworks": ["Spring Boot", "Laravel"],
                    <br/>&nbsp;&nbsp;"focus": "Scalable Systems & Automation"
                    <br/>{'}'}
                  </div>
                  <div className="terminal__line" style={{ marginTop: 12 }}>
                    guest@portfolio:~$ <span className="terminal__cursor"></span>
                  </div>
                </div>
              </div>
              <div className="bento-card bento-card--tall">
                {/* S-04: SVG icon instead of emoji */}
                <div className="card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3"/>
                    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
                    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
                  </svg>
                </div>
                <h3 className="card__title">Database</h3>
                <p className="card__desc">MySQL schema design, query optimization, SQLite for automation.</p>
              </div>
              <div className="bento-card">
                <div className="card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8V4H8"/>
                    <rect width="16" height="12" x="4" y="8" rx="2"/>
                    <path d="M2 14h2"/><path d="M20 14h2"/>
                    <path d="M15 13v2"/><path d="M9 13v2"/>
                  </svg>
                </div>
                <h3 className="card__title">Automation & AI</h3>
                <p className="card__desc">Playwright scraping, LLM workflows, real-time data pipelines.</p>
              </div>
              <div className="bento-card">
                <div className="card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                </div>
                <h3 className="card__title">DevOps</h3>
                <p className="card__desc">Git/GitHub, Docker, Linux CLI, SSH, CI/CD fundamentals.</p>
              </div>
              {/* S-01: Two new cards to fill grid gaps */}
              <div className="bento-card">
                <div className="card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <h3 className="card__title">API Design</h3>
                <p className="card__desc">RESTful APIs, request validation, error handling patterns.</p>
              </div>
              <div className="bento-card">
                <div className="card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 className="card__title">Teamwork</h3>
                <p className="card__desc">Agile collaboration, code review, clear documentation, pair programming.</p>
              </div>
              <div className="bento-card bento-card--wide" style={{ background: 'var(--color-canvas-parchment)', border: 'none' }}>
                <div className="marquee-wrapper">
                  <div className="marquee-content">
                    <span className="marquee-item">Java</span>
                    <span className="marquee-item">•</span>
                    <span className="marquee-item">Spring Boot</span>
                    <span className="marquee-item">•</span>
                    <span className="marquee-item">PHP</span>
                    <span className="marquee-item">•</span>
                    <span className="marquee-item">Laravel</span>
                    <span className="marquee-item">•</span>
                    <span className="marquee-item">MySQL</span>
                    <span className="marquee-item">•</span>
                    <span className="marquee-item">Python</span>
                    <span className="marquee-item">•</span>
                    <span className="marquee-item">Playwright</span>
                    <span className="marquee-item">•</span>
                    <span className="marquee-item">Docker</span>
                    {/* Duplicate for infinite effect */}
                    <span className="marquee-item">•</span>
                    <span className="marquee-item">Java</span>
                    <span className="marquee-item">•</span>
                    <span className="marquee-item">Spring Boot</span>
                    <span className="marquee-item">•</span>
                    <span className="marquee-item">PHP</span>
                    <span className="marquee-item">•</span>
                    <span className="marquee-item">Laravel</span>
                    <span className="marquee-item">•</span>
                    <span className="marquee-item">MySQL</span>
                    <span className="marquee-item">•</span>
                    <span className="marquee-item">Python</span>
                    <span className="marquee-item">•</span>
                    <span className="marquee-item">Playwright</span>
                    <span className="marquee-item">•</span>
                    <span className="marquee-item">Docker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======== ABOUT (dark-3 tile) — A-01 Expanded ======== */}
        <section className="tile tile--dark-3">
          <div className="tile__inner reveal">
            <h2 className="tile__headline tile__headline--lg">About me.</h2>
            <div className="about-content">
              <p className="about-bio">
                Final-year IT student at Thuy Loi University, passionate about
                backend systems, automation, and building tools that solve
                real problems. Currently seeking a Backend Developer Internship
                to grow into a professional engineer.
              </p>
              <div className="strengths-grid">
                <div className="strength-item">
                  <div className="strength-item__icon">⚡</div>
                  <h4 className="strength-item__title">Problem Solver</h4>
                  <p className="strength-item__desc">
                    Love debugging complex systems and finding elegant solutions to tricky technical challenges.
                  </p>
                </div>
                <div className="strength-item">
                  <div className="strength-item__icon">🔄</div>
                  <h4 className="strength-item__title">Fast Learner</h4>
                  <p className="strength-item__desc">
                    Self-taught new frameworks and tools — from Spring Boot to AI pipelines — through hands-on projects.
                  </p>
                </div>
                <div className="strength-item">
                  <div className="strength-item__icon">🎯</div>
                  <h4 className="strength-item__title">Ship & Iterate</h4>
                  <p className="strength-item__desc">
                    Built and deployed 4+ projects from scratch, iterating based on real-world usage and feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ======== FOOTER ======== */}
      <footer id="contact" className="footer">
        <div className="footer__inner">
          <div className="footer__grid">
            <div className="footer__col">
              <h4 className="footer__col-title">Connect</h4>
              <a href="https://github.com/trungkiendev203" target="_blank" rel="noreferrer" className="footer__col-link">GitHub</a>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Contact</h4>
              <a href="mailto:trungkiendev203@gmail.com" className="footer__col-link">trungkiendev203@gmail.com</a>
              <a href="tel:0966313528" className="footer__col-link">0966 313 528</a>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Education</h4>
              <span className="footer__col-link">Thuy Loi University</span>
              <span className="footer__col-link">IT – Software Engineering</span>
              <span className="footer__col-link">2022 – 2026</span>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Resume</h4>
              {/* A-03: CV download in footer */}
              <a href="/Nguyen-Trung-Kien-CV-v1.pdf" target="_blank" rel="noreferrer" className="footer__col-link">
                Download CV (PDF) ↓
              </a>
            </div>
          </div>
          <div className="footer__legal">
            Copyright © {new Date().getFullYear()} Nguyen Trung Kien. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
