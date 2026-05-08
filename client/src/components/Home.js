"use client"

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../Home.css"
import { getCookie } from "../redux/userSlice"

function Home() {
  const navigate = useNavigate()
  const auth = getCookie("token")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (auth) navigate("/profile")
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="sf-home">
      <BackgroundFX />

      <nav className={`sf-nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="sf-nav-inner">
          <a className="sf-brand" href="#top">
            <span className="sf-brand-mark" aria-hidden>
              <LogoMark />
            </span>
            <span className="sf-brand-text">Savage Files</span>
          </a>
          <div className="sf-nav-links" aria-label="Primary">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#developers">Developers</a>
            <a href="https://github.com/HaddajiDev/Savage-Files" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div className="sf-nav-cta">
            <Link to="/login" className="sf-btn sf-btn-ghost">Sign in</Link>
            <Link to="/login" className="sf-btn sf-btn-primary">Get started</Link>
          </div>
        </div>
      </nav>

      <header id="top" className="sf-hero">
        <div className="sf-hero-text">
          <span className="sf-pill">
            <span className="sf-pill-dot" />
            v1.0 · Free cloud storage
          </span>
          <h1 className="sf-hero-title">
            Your files,<br />
            <span className="sf-grad">stored savagely</span>{" "}
            simple.
          </h1>
          <p className="sf-hero-sub">
            Upload, organize, and share files securely. 5 GB free,
            public &amp; private links, folders, and a full developer API —
            all behind a fast, dark, focused UI.
          </p>
          <div className="sf-hero-actions">
            <Link to="/login" className="sf-btn sf-btn-primary sf-btn-lg">
              Start for free
              <ArrowRight />
            </Link>
            <a
              href="https://github.com/HaddajiDev/Savage-Files"
              target="_blank"
              rel="noreferrer"
              className="sf-btn sf-btn-ghost sf-btn-lg"
            >
              <GithubIcon />
              View on GitHub
            </a>
          </div>
          <div className="sf-trust">
            <div className="sf-trust-item">
              <CheckIcon /> No credit card
            </div>
            <div className="sf-trust-item">
              <CheckIcon /> Open source
            </div>
            <div className="sf-trust-item">
              <CheckIcon /> JWT-secured
            </div>
          </div>
        </div>

        <div className="sf-hero-visual" aria-hidden>
          <DashboardPreview />
        </div>
      </header>

      <section className="sf-stats">
        <Stat value="5 GB" label="Free storage" />
        <Stat value="5 MB" label="Per-file limit" />
        <Stat value="∞" label="Folders" />
        <Stat value="REST" label="Developer API" />
      </section>

      <section id="features" className="sf-section">
        <div className="sf-section-head">
          <span className="sf-eyebrow">Features</span>
          <h2>Everything you need. Nothing you don't.</h2>
          <p>A focused storage experience built for individuals and developers — no clutter, no upsell.</p>
        </div>

        <div className="sf-bento">
          <div className="sf-bento-card sf-bento-tall">
            <div className="sf-bento-icon"><UploadIcon /></div>
            <h3>Drag &amp; drop uploads</h3>
            <p>Batch up to 5 files at once with live progress. Drop them anywhere on the dashboard.</p>
            <UploadIllustration />
          </div>

          <div className="sf-bento-card">
            <div className="sf-bento-icon"><LockIcon /></div>
            <h3>Public &amp; private</h3>
            <p>Toggle visibility per file with one click.</p>
          </div>

          <div className="sf-bento-card">
            <div className="sf-bento-icon"><FolderIcon /></div>
            <h3>Folders that stay tidy</h3>
            <p>Create, rename, move — the basics, done well.</p>
          </div>

          <div className="sf-bento-card sf-bento-wide">
            <div className="sf-bento-icon"><LinkIcon /></div>
            <h3>One-click shareable links</h3>
            <p>Direct URLs to any public file. Send them anywhere — chat, email, your app.</p>
            <LinkIllustration />
          </div>

          <div className="sf-bento-card">
            <div className="sf-bento-icon"><ShieldIcon /></div>
            <h3>Backblaze B2 backed</h3>
            <p>Durable storage with JWT-protected private access.</p>
          </div>

          <div id="developers" className="sf-bento-card sf-bento-accent">
            <div className="sf-bento-icon"><ApiIcon /></div>
            <h3>Developer API</h3>
            <p>Generate a key. Integrate uploads &amp; management into your own apps.</p>
            <code className="sf-codeline">
              <span className="sf-c-key">POST</span> /api/files
              <span className="sf-c-comment"> // upload</span>
            </code>
          </div>
        </div>
      </section>

      <section id="how" className="sf-section sf-how">
        <div className="sf-section-head">
          <span className="sf-eyebrow">How it works</span>
          <h2>Three steps. That's it.</h2>
        </div>
        <div className="sf-steps">
          <Step n="01" title="Create your account" desc="Sign up in seconds — no card, no commitment." />
          <Step n="02" title="Upload &amp; organize" desc="Drop files, sort them into folders, mark public or private." />
          <Step n="03" title="Share or build" desc="Copy a link, or generate an API key and build with it." />
        </div>
      </section>

      <section className="sf-cta">
        <div className="sf-cta-card">
          <div className="sf-cta-glow" aria-hidden />
          <h2>Get 5 GB of free storage in seconds.</h2>
          <p>No credit card. No trial. Just storage that works.</p>
          <div className="sf-cta-actions">
            <Link to="/login" className="sf-btn sf-btn-primary sf-btn-lg">
              Create free account
              <ArrowRight />
            </Link>
            <a
              href="https://github.com/HaddajiDev/Savage-Files"
              target="_blank"
              rel="noreferrer"
              className="sf-btn sf-btn-ghost sf-btn-lg"
            >
              <GithubIcon />
              Star on GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="sf-footer">
        <div className="sf-footer-inner">
          <div className="sf-brand sf-brand-sm">
            <span className="sf-brand-mark" aria-hidden><LogoMark /></span>
            <span>Savage Files</span>
          </div>
          <p>© {new Date().getFullYear()} Savage Files · Open source · MIT</p>
          <div className="sf-footer-links">
            <a href="https://github.com/HaddajiDev/Savage-Files" target="_blank" rel="noreferrer">GitHub</a>
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ────────────────── sub-components ────────────────── */

function BackgroundFX() {
  return (
    <div className="sf-bg" aria-hidden>
      <div className="sf-bg-grid" />
      <div className="sf-bg-orb sf-bg-orb-1" />
      <div className="sf-bg-orb sf-bg-orb-2" />
      <div className="sf-bg-orb sf-bg-orb-3" />
    </div>
  )
}

function Stat({ value, label }) {
  return (
    <div className="sf-stat">
      <div className="sf-stat-value">{value}</div>
      <div className="sf-stat-label">{label}</div>
    </div>
  )
}

function Step({ n, title, desc }) {
  return (
    <div className="sf-step">
      <span className="sf-step-num">{n}</span>
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      <p>{desc}</p>
    </div>
  )
}

function DashboardPreview() {
  return (
    <div className="sf-preview">
      <div className="sf-preview-glow" />
      <div className="sf-preview-window">
        <div className="sf-preview-bar">
          <span className="sf-dot sf-dot-r" />
          <span className="sf-dot sf-dot-y" />
          <span className="sf-dot sf-dot-g" />
          <div className="sf-preview-url">savage-files.app/profile</div>
        </div>
        <div className="sf-preview-body">
          <aside className="sf-preview-side">
            <div className="sf-side-item active"><FolderIcon /> My Files</div>
            <div className="sf-side-item"><ClockIcon /> Recent</div>
            <div className="sf-side-item"><ShareIcon /> Shared</div>
            <div className="sf-side-item"><ApiIcon /> API</div>
            <div className="sf-side-meter">
              <div className="sf-side-meter-bar"><span style={{ width: "30%" }} /></div>
              <div className="sf-side-meter-text">1.5 GB / 5 GB</div>
            </div>
          </aside>
          <main className="sf-preview-main">
            <div className="sf-preview-row sf-preview-row-head">
              <span>Name</span><span>Size</span><span>Visibility</span>
            </div>
            <PreviewFile name="design-spec.pdf" size="2.4 MB" visibility="public" />
            <PreviewFile name="hero-shot.jpg" size="1.8 MB" visibility="private" />
            <PreviewFile name="release-notes.md" size="48 KB" visibility="public" />
            <PreviewFile name="logo.svg" size="12 KB" visibility="public" />
            <PreviewFile name="contract.pdf" size="3.1 MB" visibility="private" />
          </main>
        </div>
      </div>
      <div className="sf-float sf-float-1">
        <CheckCircle />
        <div>
          <div className="sf-float-title">Upload complete</div>
          <div className="sf-float-sub">design-spec.pdf · 2.4 MB</div>
        </div>
      </div>
      <div className="sf-float sf-float-2">
        <span className="sf-float-key">⌘ K</span>
        <span>Search files</span>
      </div>
    </div>
  )
}

function PreviewFile({ name, size, visibility }) {
  return (
    <div className="sf-preview-row">
      <span className="sf-preview-name"><FileIcon /> {name}</span>
      <span className="sf-preview-size">{size}</span>
      <span className={`sf-vis sf-vis-${visibility}`}>{visibility}</span>
    </div>
  )
}

function UploadIllustration() {
  return (
    <div className="sf-illu sf-illu-upload">
      <div className="sf-illu-drop">
        <UploadIcon />
        <span>Drop files to upload</span>
      </div>
      <div className="sf-illu-progress">
        <div className="sf-illu-progress-row">
          <span>report.pdf</span><span>78%</span>
        </div>
        <div className="sf-illu-bar"><span style={{ width: "78%" }} /></div>
      </div>
    </div>
  )
}

function LinkIllustration() {
  return (
    <div className="sf-illu-link">
      <code>savage-files.app/f/8aF2xQ</code>
      <button type="button" className="sf-illu-copy"><CopyIcon /> Copy</button>
    </div>
  )
}

/* ────────────────── icons ────────────────── */

const LogoMark = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M4 6.5C4 4.6 5.6 3 7.5 3h6.7c.5 0 .9.2 1.3.5l4.3 4.3c.3.3.5.8.5 1.3v9.4c0 1.9-1.6 3.5-3.5 3.5h-9C5.6 22 4 20.4 4 18.5v-12Z" fill="url(#g1)" />
    <path d="M14 3.5V8a1.5 1.5 0 0 0 1.5 1.5H20" stroke="rgba(255,255,255,.55)" strokeWidth="1.4" />
    <defs>
      <linearGradient id="g1" x1="4" y1="3" x2="20" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#a855f7" />
        <stop offset="1" stopColor="#6d28d9" />
      </linearGradient>
    </defs>
  </svg>
)
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
)
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
)
const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12a12 12 0 0 0 8.2 11.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 24 12c0-6.6-5.4-12-12-12z"/></svg>
)
const UploadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
)
const LockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
)
const FolderIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
)
const LinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
)
const ApiIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
)
const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
)
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
)
const ShareIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
)
const FileIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
)
const CopyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
)
const CheckCircle = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="rgba(74,222,128,.15)" stroke="#4ade80" strokeWidth="1.5"/><polyline points="8 12 11 15 16 9" stroke="#4ade80" strokeWidth="2" fill="none"/></svg>
)

export default Home
