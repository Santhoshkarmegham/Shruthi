import React, { useEffect, useState } from "react";

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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);

  const closeMenu = () => setMenuOpen(false);
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (!target) return;
    const navHeight = document.querySelector(".nav")?.offsetHeight ?? 72;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
    window.history.replaceState(null, "", `#${sectionId}`);
    closeMenu();
  };

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
          <span className="brand-mark">S</span>
          <span>Shruthi GowriShankar</span>
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
        <button className="nav-resume" type="button" onClick={() => setResumeOpen(true)}>Résumé <span>↗</span></button>
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
            <a className="button button--outline" href="https://www.linkedin.com/in/shruthi-gowrishankar/" target="_blank" rel="noreferrer">View LinkedIn</a>
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
            <h2>Organic can only take you so far.</h2>
          </div>
          <div className="about-copy">
            <p>I'm Shruthi, I help companies build paid social experiences that actually move the needle. I started out helping small businesses with social media out of pure passion, and now I run paid strategy across Meta and Google for brands spanning luxury hospitality, real estate, retail and e-commerce.</p>
            <p>My focus is paid social and search strategy: building audiences, testing relentlessly, and translating performance data into decisions that grow revenue. I care about telling brand stories that resonate at scale, and backing every creative bet with a number.</p>
            <p>Based in Ipswich, UK. MSc International Marketing Management from the University of Leeds, and a background in Computer Science & Engineering that keeps me comfortable in the data.</p>
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
                <article className="service-card" key={service.title}>
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
            <Label>Experience</Label>
            <h2>Where the results happened</h2>
            <div className="experience-list">
              {experience.map((job) => (
                <article className="job" key={`${job.company}-${job.role}`}>
                  <div className="job-heading">
                    <h3>{job.role}</h3>
                    <strong>{job.company}</strong>
                    <span>{job.dates}</span>
                    <span>{job.location}</span>
                  </div>
                  <ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
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
          <article className="case-study">
            <div className="case-image">
              <img src="/uploads/1669478292609.jpeg" alt="Crowd at a mall brand activation event" />
            </div>
            <div>
              <h3>Express Avenue — Korean Fair</h3>
              <p>Led paid social strategy for a culturally themed retail event celebrating Korean lifestyle, beauty and tourism — spanning Meta, Pinterest, Snapchat and LinkedIn with segmented creative, geo-targeting, influencer partnerships and a branded hashtag push (#KWaveChennai, #KoreaAtEA).</p>
              <Metrics items={[["100K+", "visitors across 4 days"], ["32%", "increase in weekend revenue for mall retailers"], ["200K+", "organic video views"], ["4.8%", "average CTR, outperforming industry benchmarks"]]} />
            </div>
          </article>
          <article className="case-study case-study--reverse">
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
                <article className="process-step" key={title}>
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
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="pills">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section container education reveal">
          <div>
            <Label>Education</Label>
            {education.map(([degree, school, dates]) => (
              <article key={degree}><h3>{degree}</h3><strong>{school}</strong><span>{dates}</span></article>
            ))}
          </div>
          <div>
            <Label>Certifications</Label>
            <ul>{certifications.map((certification) => <li key={certification}>{certification}</li>)}</ul>
          </div>
        </section>

        <section className="contact reveal" id="contact">
          <div className="contact-orbit contact-orbit--one" />
          <div className="contact-orbit contact-orbit--two" />
          <h2>Let's grow something together.</h2>
          <p>Open to advertising executive roles and freelance paid-media projects.</p>
          <div className="availability"><i /> Available for selected opportunities</div>
          <div className="contact-actions">
            <a className="button button--dark" href="mailto:shruthi.official.09@gmail.com">shruthi.official.09@gmail.com</a>
            <a className="button button--phone" href="tel:+447769454403">+44 7769 454403</a>
          </div>
          <span>Ipswich, United Kingdom · <a href="https://www.linkedin.com/in/shruthi-gowrishankar/" target="_blank" rel="noreferrer">LinkedIn</a></span>
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
                <small>Or email <a href="mailto:shruthi.official.09@gmail.com">shruthi.official.09@gmail.com</a></small>
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
