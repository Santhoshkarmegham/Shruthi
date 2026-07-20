import React, { useEffect, useState } from "react";
import { FaAward, FaBuildingColumns, FaGraduationCap } from "react-icons/fa6";
import { FiBarChart2, FiCalendar, FiCheckCircle, FiGitBranch, FiMoon, FiSearch, FiShare2, FiShoppingBag, FiSun } from "react-icons/fi";
import { RiFileExcel2Fill } from "react-icons/ri";
import { SiGoogleads, SiGoogleanalytics, SiGooglemarketingplatform, SiMeta } from "react-icons/si";

const heroStats = [
  ["3.1x+", "Average ROAS"],
  ["45%", "Higher reach"],
  ["24%", "Higher engagement"],
  ["38%", "More leads"],
];

const experience = [
  {
    role: "Advertising Executive",
    company: "Crafted",
    dates: "Sept 2025 – Present",
    location: "Ipswich, UK",
    highlights: ["£100K+ budgets", "500+ ads scaled", "25.21% CTR"],
    bullets: [
      "Managed paid media for 5 high-profile clients across luxury hospitality, real estate and e-commerce with budgets up to £100,000, achieving an average 3:1 ROAS and beating KPIs by 12%.",
      "Scaled 500+ ads across Search Ads 360, Google Studio and Meta for Preferred Hotels & Resorts, automating 70 hours of quarterly data entry and cutting errors by 30%.",
      "Ran 10+ structured A/B tests for MUJI Europe's Instagram, lifting reach 45%, engagement 24% and cutting cost by 11%.",
      "Grew Google Search impression share to 73.5% and CTR from 5.2% to 25.21% on a £60,000+ budget.",
    ],
  },
  {
    role: "Meta Ads Consultant",
    company: "Arctic Bee",
    dates: "Jan 2025 – Mar 2025",
    location: "Leeds, UK",
    highlights: ["3.5x ROAS", "38% more leads", "22% lower CPL"],
    bullets: [
      "Launched 15+ targeted Meta lead-gen campaigns, driving a 38% increase in leads within 8 weeks.",
      "Built and tested 10+ custom and lookalike audiences, improving CTR by 19%.",
      "Increased ROAS from 2.1x to 3.5x while cutting cost per lead by 22%.",
    ],
  },
  {
    role: "Digital Marketing Specialist",
    company: "Express Infrastructure",
    dates: "Dec 2021 – Feb 2023",
    location: "Chennai, India",
    highlights: ["32% revenue growth", "48% more leads", "100+ campaigns"],
    bullets: [
      "Directed social strategy for 3 brands (mall, hotel, residential complex), growing followers 62% and engagement 45%.",
      "Managed 100+ paid campaigns across Instagram, Facebook, LinkedIn and Google, driving a 32% revenue increase and 48% more qualified leads.",
    ],
  },
  {
    role: "Social Media Marketing Consultant",
    company: "Kipling Cafe",
    dates: "Jun 2021 – Jan 2022",
    location: "Chennai, India",
    highlights: ["58% more reach", "5.4% engagement", "31% more shares"],
    bullets: [
      "Grew Instagram reach 58% and post shares 31% through a refreshed content strategy.",
      "Lifted average engagement rate from 3.2% to 5.4%, responding to 200+ messages and comments monthly.",
    ],
  },
];

const skillGroups = [
  {
    title: "Paid Channels & Platforms",
    items: ["Paid Search", "Paid Social", "Google Ads", "Google Marketing Platform", "Search Ads 360", "Meta Ads Manager", "Meta Commerce Manager"],
  },
  {
    title: "Analytics & Reporting",
    items: ["Advanced Excel", "Google Analytics 4", "In-Platform Campaign Data Analytics and Reports", "A/B Testing"],
  },
];

const education = [
  ["MSc International Marketing Management", "University of Leeds", "Sept 2023 – Dec 2024"],
  ["B.Tech Computer Science & Engineering", "SRM Institute of Science and Technology", "Jul 2017 – Jul 2021"],
];

const certifications = [
  "Meta Certified Digital Marketing Associate — 2025",
  "Meta Social Media Marketing Professional Certificate",
  "Microsoft Office Specialist: Excel Associate",
];

const navLinks = ["About", "Services", "Experience", "Work", "Skills", "Contact"];

const services = [
  { number: "01", title: "Paid Social Strategy", description: "Full-funnel Meta campaign planning, audience architecture and creative testing designed around commercial goals.", tags: ["Meta Ads", "Audience testing", "Creative strategy"] },
  { number: "02", title: "Paid Search & Shopping", description: "Search structures that capture demand efficiently, from keyword strategy and bidding to feed-led growth.", tags: ["Google Ads", "Search Ads 360", "Shopping"] },
  { number: "03", title: "Performance Optimisation", description: "Clear reporting, rigorous experimentation and budget decisions that steadily improve ROAS, CPA and lead quality.", tags: ["GA4", "A/B testing", "Reporting"] },
];

const processSteps = [
  ["Discover", "Align on the audience, commercial target and the real problem the campaign needs to solve."],
  ["Build", "Translate strategy into account structure, creative hypotheses, measurement and launch-ready campaigns."],
  ["Learn", "Read performance signals, test deliberately and turn the strongest insights into the next iteration."],
  ["Scale", "Move budget toward proven opportunities while protecting efficiency and maintaining creative momentum."],
];

function Label({ children, light = false }) {
  return <div className={`eyebrow${light ? " eyebrow--light" : ""}`}>{children}</div>;
}

function Metrics({ items }) {
  return (
    <div className="case-metrics">
      {items.map(([value, label]) => (
        <div key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function SkillGroupIcon({ index }) {
  return index === 0 ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16v12H4z"/><path d="m8 15 3-3-3-3M13 15h3"/>
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19V9M12 19V5M19 19v-7"/><path d="M3 19h18"/>
    </svg>
  );
}

const toolIcons = {
  "Paid Search": [FiSearch, "search"],
  "Paid Social": [FiShare2, "social"],
  "Google Ads": [SiGoogleads, "google"],
  "Google Marketing Platform": [SiGooglemarketingplatform, "google"],
  "Search Ads 360": [SiGoogleads, "google"],
  "Meta Ads Manager": [SiMeta, "meta"],
  "Meta Commerce Manager": [FiShoppingBag, "meta"],
  "Advanced Excel": [RiFileExcel2Fill, "excel"],
  "Google Analytics 4": [SiGoogleanalytics, "analytics"],
  "In-Platform Campaign Data Analytics and Reports": [FiBarChart2, "analytics"],
  "A/B Testing": [FiGitBranch, "testing"],
};

function ToolIcon({ name }) {
  const [Icon, tone] = toolIcons[name] ?? [FiBarChart2, "default"];
  return <i className={`tool-icon tool-icon--${tone}`}><Icon aria-hidden="true" /></i>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState("light");

  const closeMenu = () => setMenuOpen(false);
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (!target) return;
    const navHeight = document.querySelector(".nav")?.offsetHeight ?? 72;
    const start = window.scrollY;
    const top = Math.max(0, target.getBoundingClientRect().top + start - navHeight);
    const distance = top - start;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = Math.min(950, Math.max(500, Math.abs(distance) * 0.42));
    const startedAt = performance.now();
    const ease = (value) => value < 0.5 ? 4 * value ** 3 : 1 - ((-2 * value + 2) ** 3) / 2;

    if (reduceMotion) window.scrollTo(0, top);
    else {
      const animate = (now) => {
        const progress = Math.min(1, (now - startedAt) / duration);
        window.scrollTo(0, start + distance * ease(progress));
        if (progress < 1) window.requestAnimationFrame(animate);
      };
      window.requestAnimationFrame(animate);
    }
    window.history.replaceState(null, "", `#${sectionId}`);
    closeMenu();
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    const updateScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);

      const sections = navLinks
        .map((link) => document.getElementById(link.toLowerCase()))
        .filter(Boolean);
      const current = [...sections].reverse().find((section) => section.getBoundingClientRect().top <= 150);
      if (current) setActiveSection(current.id);
    };

    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      }),
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateScroll);
      revealObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const cards = [...document.querySelectorAll(".tilt-card")];
    const onMove = (event) => {
      const card = event.currentTarget;
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      card.style.setProperty("--tilt-x", `${(0.5 - y) * 7}deg`);
      card.style.setProperty("--tilt-y", `${(x - 0.5) * 8}deg`);
      card.style.setProperty("--light-x", `${x * 100}%`);
      card.style.setProperty("--light-y", `${y * 100}%`);
    };
    const onLeave = (event) => {
      event.currentTarget.style.removeProperty("--tilt-x");
      event.currentTarget.style.removeProperty("--tilt-y");
      event.currentTarget.style.removeProperty("--light-x");
      event.currentTarget.style.removeProperty("--light-y");
    };

    cards.forEach((card) => {
      card.addEventListener("pointermove", onMove);
      card.addEventListener("pointerleave", onLeave);
    });
    return () => cards.forEach((card) => {
      card.removeEventListener("pointermove", onMove);
      card.removeEventListener("pointerleave", onLeave);
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = connectOpen || resumeOpen ? "hidden" : "";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setConnectOpen(false);
        setResumeOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [connectOpen, resumeOpen]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/shruthi.official.09@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) throw new Error("Message could not be sent");
      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="site-shell">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <header className="nav">
        <a className="brand" href="#top" onClick={(event) => scrollToSection(event, "top")}>
          <span className="brand-mark"><b>SG</b></span>
          <span className="brand-name">Shruthi <strong>GowriShankar</strong></span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "nav-links nav-links--open" : "nav-links"}>
          {navLinks.map((link) => (
            <a
              className={activeSection === link.toLowerCase() ? "active" : ""}
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(event) => scrollToSection(event, link.toLowerCase())}
            >
              {link}
            </a>
          ))}
          <button className="mobile-resume" type="button" onClick={() => { setResumeOpen(true); closeMenu(); }}>View résumé</button>
        </nav>
        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={() => setTheme((current) => current === "light" ? "dark" : "light")} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`} title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
            {theme === "light" ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
          </button>
          <button className="nav-resume" type="button" onClick={() => setResumeOpen(true)}>Résumé <span>↗</span></button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-glow hero-glow--one" />
          <div className="hero-glow hero-glow--two" />
          <Label light>Performance Marketer · Meta & Google Ads</Label>
          <h1>Paid social & search that turns budget into growth.</h1>
          <p>5 years running paid media for luxury hospitality, real estate and e-commerce brands, consistently landing 3.1x+ ROAS through relentless, data-led optimisation.</p>
          <div className="hero-depth" aria-hidden="true">
            <div className="depth-card depth-card--left">
              <span>ROAS</span>
              <strong>3.1x</strong>
              <small>Consistent growth</small>
            </div>
            <div className="depth-orb"><span>+</span></div>
            <div className="depth-card depth-card--right">
              <span>Campaigns</span>
              <strong>500+</strong>
              <small>Ads scaled</small>
            </div>
          </div>
          <div className="hero-actions">
            <a className="button button--primary" href="mailto:shruthi.official.09@gmail.com">Get in touch</a>
            <a className="button button--outline" href="#work" onClick={(event) => scrollToSection(event, "work")}>View my work <span>↓</span></a>
          </div>
          <div className="hero-stats">
            {heroStats.map(([value, label]) => (
              <div key={label}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to About" onClick={(event) => scrollToSection(event, "about")}><span /></a>
        </section>

        <section className="section about reveal" id="about">
          <div className="section-intro">
            <Label>About</Label>
            <h2 className="about-title" aria-label="Paid media, built around meaningful growth.">
              <span>Organic can</span>
              <span>only take you</span>
              <em>so far</em>
            </h2>
            <p className="about-intro">Strategy, creative testing and performance insight brought together with commercial focus.</p>
            <div className="about-mini-stats">
              <div><strong>5</strong><span>Years in digital marketing</span></div>
              <div><strong>3.1x+</strong><span>Average campaign ROAS</span></div>
            </div>
          </div>
          <div className="about-copy">
            <div className="about-card">
              <p>I'm Shruthi, I help companies build paid social experiences that actually move the needle. I started out helping small businesses with social media out of pure passion, and now I run paid strategy across Meta and Google for brands spanning luxury hospitality, real estate, retail and e-commerce.
            My focus is paid social and search strategy: building audiences, testing relentlessly, and translating performance data into decisions that grow revenue. I care about telling brand stories that resonate at scale, and backing every creative bet with a number.</p>
              <div className="about-skills" aria-label="Core capabilities">
                <span>Paid Social</span><span>Paid Search</span><span>Campaign Strategy</span><span>Creative Testing</span><span>Performance Analytics</span>
              </div>
              <div className="about-credentials">
                <article>
                  <span className="credential-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 9 9-5 9 5-9 5z"/><path d="M7 12v5c3 2 7 2 10 0v-5M21 9v6"/></svg></span>
                  <div><small>Postgraduate degree</small><strong>MSc International Marketing Management</strong><span>University of Leeds</span></div>
                </article>
                <article>
                  <span className="credential-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 9 4 12l4 3M16 9l4 3-4 3M14 6l-4 12"/></svg></span>
                  <div><small>Technical foundation</small><strong>Computer Science & Engineering</strong><span>Data-comfortable by design</span></div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section services reveal" id="services">
          <div className="container">
            <div className="split-heading">
              <div><Label>What I do</Label><h2>Strategy that connects every click to growth.</h2></div>
              <p>From campaign architecture to the final performance report, every decision is tied to a measurable business outcome.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card tilt-card" key={service.title}>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div>{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tinted reveal" id="experience">
          <div className="container">
            <div className="experience-header">
              <div><Label>Experience</Label><h2>Where strategy became measurable growth.</h2></div>
              <p>A career built across agency, consultancy and in-house environments—turning complex paid-media accounts into focused, scalable performance systems.</p>
            </div>
            <div className="experience-summary" aria-label="Experience summary">
              <div><strong>4</strong><span>Performance roles</span></div>
              <div><strong>500+</strong><span>Ads scaled</span></div>
              <div><strong>£100K+</strong><span>Managed budgets</span></div>
              <div><strong>3.5x</strong><span>Peak ROAS</span></div>
            </div>
            <div className="experience-list">
              {experience.map((job, index) => (
                <article className="job tilt-card" key={`${job.company}-${job.role}`}>
                  <div className="job-heading">
                    <div className="job-title-row">
                      <span className="job-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24"><path d="M4 8h16v11H4z"/><path d="M9 8V5h6v3M4 12h16M10 12v2h4v-2"/></svg>
                      </span>
                      <div><small>0{index + 1}</small><h3>{job.role}</h3></div>
                    </div>
                    <strong>{job.company}</strong>
                    <div className="job-meta">
                      <span>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="14" rx="2"/><path d="M8 3v6M16 3v6M4 10h16"/></svg>
                        {job.dates}
                      </span>
                      <span>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <div className="job-content">
                    <div className="job-highlights">{job.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}</div>
                    <ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container reveal" id="work">
          <Label>Featured Work</Label>
          <div className="work-heading">
            <h2>Campaigns built to perform.</h2>
            <p>Selected work combining audience insight, creative testing and commercial results.</p>
          </div>
          <article className="case-study tilt-card">
            <div className="case-image">
              <img src="/uploads/1669478292609.jpeg" alt="Crowd at a mall brand activation event" />
            </div>
            <div>
              <h3>Express Avenue — Korean Fair</h3>
              <p>Led paid social strategy for a culturally themed retail event celebrating Korean lifestyle, beauty and tourism — spanning Meta, Pinterest, Snapchat and LinkedIn with segmented creative, geo-targeting, influencer partnerships and a branded hashtag push (#KWaveChennai, #KoreaAtEA).</p>
              <Metrics items={[["100K+", "visitors across 4 days"], ["32%", "increase in weekend revenue for mall retailers"], ["200K+", "organic video views"], ["4.8%", "average CTR, outperforming industry benchmarks"]]} />
            </div>
          </article>
          <article className="case-study case-study--reverse tilt-card">
            <div className="case-image case-image--hotel">
              <img src="/uploads/preferred-hotels.webp" alt="Preferred Hotels and Resorts luxury campaign" />
            </div>
            <div>
              <h3>Preferred Hotels & Resorts — Meta Account Restructure</h3>
              <p>Rebuilt the Meta ads account structure, consolidating fragmented campaigns, tightening audience segmentation and refreshing creative testing cadence, to improve delivery efficiency and lift qualified bookings.</p>
              <Metrics items={[["3.4%", "CTR"], ["120+", "bookings"], ["20%", "increase in bookings"], ["15%", "lower CPA"]]} />
            </div>
          </article>
        </section>

        <section className="section process reveal">
          <div className="container">
            <div className="split-heading">
              <div><Label>My approach</Label><h2>A clear path from brief to scale.</h2></div>
              <p>A practical process keeps campaigns moving quickly without replacing thoughtful strategy with guesswork.</p>
            </div>
            <div className="process-grid">
              {processSteps.map(([title, description], index) => (
                <article className="process-step tilt-card" key={title}>
                  <span>0{index + 1}</span><h3>{title}</h3><p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--dark reveal" id="skills">
          <div className="container">
            <Label light>Skills</Label>
            <h2>Tools & Platforms</h2>
            <div className="skill-groups">
              {skillGroups.map((group, index) => (
                <div className="tilt-card" key={group.title}>
                  <div className="skill-title">
                    <span><SkillGroupIcon index={index} /></span>
                    <h3>{group.title}</h3>
                  </div>
                  <div className="pills">
                    {group.items.map((item) => (
                      <span key={item}>
                        <ToolIcon name={item} />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section container education reveal">
          <div className="education-column">
            <div className="education-heading">
              <span><FaGraduationCap aria-hidden="true" /></span>
              <div><Label>Education</Label><h2>Academic foundation</h2></div>
            </div>
            <div className="education-list">
            {education.map(([degree, school, dates], index) => (
              <article className="education-card" key={degree}>
                <span className="education-number">0{index + 1}</span>
                <div className="education-degree-icon"><FaGraduationCap aria-hidden="true" /></div>
                <div className="education-card-copy">
                  <h3>{degree}</h3>
                  <strong><FaBuildingColumns aria-hidden="true" />{school}</strong>
                  <span><FiCalendar aria-hidden="true" />{dates}</span>
                </div>
              </article>
            ))}
            </div>
          </div>
          <div className="education-column">
            <div className="education-heading">
              <span><FaAward aria-hidden="true" /></span>
              <div><Label>Certifications</Label><h2>Professional credentials</h2></div>
            </div>
            <div className="certification-list">
              {certifications.map((certification) => {
                const isExcel = certification.includes("Excel");
                return (
                  <article className="certification-card" key={certification}>
                    <span className={`certification-brand${isExcel ? " certification-brand--excel" : ""}`}>
                      {isExcel ? <RiFileExcel2Fill aria-hidden="true" /> : <SiMeta aria-hidden="true" />}
                    </span>
                    <div><small>{isExcel ? "Microsoft" : "Meta"}</small><strong>{certification}</strong></div>
                    <FiCheckCircle className="certification-check" aria-label="Credential" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="contact reveal" id="contact">
          <div className="contact-orbit contact-orbit--one" />
          <div className="contact-orbit contact-orbit--two" />
          <div className="contact-inner">
            <div className="contact-dots" aria-hidden="true"><i /><i /><i /></div>
            <div className="contact-symbol" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M4 6.5h16v11H4z"/><path d="m5 7.5 7 5.5 7-5.5"/></svg>
            </div>
            <Label>Start a conversation</Label>
            <h2>Let's grow something together.</h2>
            <p>Open to paid advertising roles.</p>
            <div className="contact-actions">
              <a className="contact-action contact-action--primary" href="mailto:shruthi.official.09@gmail.com">
                <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.75 5.75h16.5v12.5H3.75z"/><path d="m4.5 6.5 7.5 6 7.5-6"/></svg></span>
                <div><small>Email me</small><strong>shruthi.official.09@gmail.com</strong></div>
                <b>↗</b>
              </a>
              <a className="contact-action" href="tel:+447769454403">
                <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.1 3.8 4.8 5.2c-.7.4-.9 1.3-.6 2 2.7 6.2 6.4 9.9 12.6 12.6.7.3 1.6.1 2-.6l1.4-2.3-4.6-2.2-1.2 1.5c-2.8-1.3-5.3-3.8-6.6-6.6l1.5-1.2z"/></svg></span>
                <div><small>Call me</small><strong>+44 7769 454403</strong></div>
                <b>↗</b>
              </a>
            </div>
            <div className="contact-meta">
              <span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>Ipswich, United Kingdom</span>
              <a href="https://www.linkedin.com/in/shruthi-gowrishankar/" target="_blank" rel="noreferrer">
                <svg className="linkedin-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/>
                </svg>
                LinkedIn <b>↗</b>
              </a>
            </div>
          </div>
        </section>
      </main>

      <button
        className="connect-tab"
        type="button"
        aria-haspopup="dialog"
        aria-expanded={connectOpen}
        onClick={() => {
          setConnectOpen(true);
          setFormStatus("idle");
        }}
      >
        <span>Let’s talk</span>
        <strong>Want to connect?</strong>
      </button>

      {connectOpen && (
        <div className="connect-overlay" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setConnectOpen(false);
        }}>
          <section className="connect-panel" role="dialog" aria-modal="true" aria-labelledby="connect-title">
            <button className="connect-close" type="button" aria-label="Close contact form" onClick={() => setConnectOpen(false)}>×</button>
            <Label>Start a conversation</Label>
            <h2 id="connect-title">Want to connect?</h2>
            <p>Share a little about the role, project or campaign you have in mind. Your message will land directly in my inbox.</p>

            {formStatus === "success" ? (
              <div className="form-success" role="status">
                <span>✓</span>
                <h3>Message sent</h3>
                <p>Thanks for reaching out. I’ll get back to you as soon as I can.</p>
                <button className="button button--dark" type="button" onClick={() => setConnectOpen(false)}>Done</button>
              </div>
            ) : (
              <form className="connect-form" onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="New portfolio enquiry" />
                <input type="hidden" name="_template" value="table" />
                <input className="form-honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" />
                <div className="form-row">
                  <label>
                    Your name
                    <input name="name" type="text" placeholder="Jane Smith" required />
                  </label>
                  <label>
                    Email address
                    <input name="email" type="email" placeholder="jane@company.com" required />
                  </label>
                </div>
                <label>
                  What would you like to discuss?
                  <select name="enquiry_type" defaultValue="">
                    <option value="" disabled>Select an option</option>
                    <option>Job opportunity</option>
                    <option>Freelance project</option>
                    <option>Paid media consultation</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label>
                  Your message
                  <textarea name="message" rows="5" placeholder="Tell me a little about the opportunity, goals and timeline…" required />
                </label>
                {formStatus === "error" && (
                  <p className="form-error" role="alert">The message didn’t send. Please try again or email me directly.</p>
                )}
                <button className="button button--primary form-submit" type="submit" disabled={formStatus === "sending"}>
                  {formStatus === "sending" ? "Sending…" : "Send message"}
                </button>
                <div className="quick-contact" aria-label="Other ways to connect">
                  <span>Or connect directly</span>
                  <div>
                    <a href="mailto:shruthi.official.09@gmail.com" aria-label="Send an email">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.75 5.75h16.5v12.5H3.75z"/><path d="m4.5 6.5 7.5 6 7.5-6"/></svg>
                      <small>Email</small>
                    </a>
                    <a href="tel:+447769454403" aria-label="Call Shruthi">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.1 3.8 4.8 5.2c-.7.4-.9 1.3-.6 2 2.7 6.2 6.4 9.9 12.6 12.6.7.3 1.6.1 2-.6l1.4-2.3-4.6-2.2-1.2 1.5c-2.8-1.3-5.3-3.8-6.6-6.6l1.5-1.2z"/></svg>
                      <small>Call</small>
                    </a>
                  </div>
                </div>
              </form>
            )}
          </section>
        </div>
      )}

      {resumeOpen && (
        <div className="resume-overlay" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setResumeOpen(false);
        }}>
          <section className="resume-panel" role="dialog" aria-modal="true" aria-labelledby="resume-title">
            <button className="connect-close" type="button" aria-label="Close résumé options" onClick={() => setResumeOpen(false)}>×</button>
            <div className="resume-icon" aria-hidden="true">PDF</div>
            <Label>Résumé</Label>
            <h2 id="resume-title">How would you like to open it?</h2>
            <p>Preview Shruthi’s résumé in a new browser tab or save a PDF copy to your device.</p>
            <div className="resume-actions">
              <a className="resume-option resume-option--primary" href="/uploads/Shruthi_Gowri_Shankar_Resume.pdf" target="_blank" rel="noreferrer" onClick={() => setResumeOpen(false)}>
                <span>View in browser</span><small>Opens in a new tab</small><b>↗</b>
              </a>
              <a className="resume-option" href="/uploads/Shruthi_Gowri_Shankar_Resume.pdf" download="Shruthi_Gowri_Shankar_Resume.pdf" onClick={() => setResumeOpen(false)}>
                <span>Download PDF</span><small>Save a copy to your device</small><b>↓</b>
              </a>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
