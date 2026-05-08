"use client"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Redirect() {
  const navigate = useNavigate()

  useEffect(() => {
    const t = setTimeout(() => navigate("/login"), 900)
    return () => clearTimeout(t)
  }, [navigate])

  return (
    <div className="rd-page">
      <div className="rd-bg" aria-hidden>
        <div className="rd-bg-grid" />
        <div className="rd-bg-orb rd-bg-orb-1" />
        <div className="rd-bg-orb rd-bg-orb-2" />
      </div>

      <div className="rd-card">
        <div className="rd-logo-wrap">
          <svg className="rd-logo" width="44" height="44" viewBox="0 0 24 24" fill="none">
            <path d="M4 6.5C4 4.6 5.6 3 7.5 3h6.7c.5 0 .9.2 1.3.5l4.3 4.3c.3.3.5.8.5 1.3v9.4c0 1.9-1.6 3.5-3.5 3.5h-9C5.6 22 4 20.4 4 18.5v-12Z" fill="url(#rdg)" />
            <path d="M14 3.5V8a1.5 1.5 0 0 0 1.5 1.5H20" stroke="rgba(255,255,255,.55)" strokeWidth="1.4" />
            <defs>
              <linearGradient id="rdg" x1="4" y1="3" x2="20" y2="22"><stop stopColor="#a855f7"/><stop offset="1" stopColor="#6d28d9"/></linearGradient>
            </defs>
          </svg>
          <div className="rd-ring" />
        </div>

        <h1 className="rd-title">Just a moment…</h1>
        <p className="rd-sub">Taking you to sign in.</p>

        <div className="rd-progress"><span /></div>
      </div>

      <style>{`
        .rd-page {
          position: relative;
          min-height: 100vh;
          display: grid; place-items: center;
          padding: 1.5rem;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
          color: #ece8f7;
          background:
            radial-gradient(1100px 700px at 80% -10%, rgba(124,58,237,.20), transparent 60%),
            radial-gradient(900px 600px at 0% 30%, rgba(168,85,247,.12), transparent 60%),
            linear-gradient(180deg, #08070f 0%, #0c0a17 100%);
          overflow: hidden;
        }
        .rd-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
        .rd-bg-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(168,85,247,.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,.045) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse at 50% 50%, #000 30%, transparent 75%);
          -webkit-mask-image: radial-gradient(ellipse at 50% 50%, #000 30%, transparent 75%);
        }
        .rd-bg-orb { position: absolute; border-radius: 50%; filter: blur(90px); opacity: .55; }
        .rd-bg-orb-1 { width: 520px; height: 520px; background: radial-gradient(circle, #7c3aed 0%, transparent 65%); top: -100px; left: -120px; }
        .rd-bg-orb-2 { width: 480px; height: 480px; background: radial-gradient(circle, #a855f7 0%, transparent 65%); bottom: -160px; right: -120px; }

        .rd-card {
          position: relative;
          padding: 2.5rem 2.5rem 2rem;
          background: rgba(14,10,28,.6);
          border: 1px solid rgba(168,85,247,.18);
          border-radius: 22px;
          backdrop-filter: saturate(160%) blur(20px);
          -webkit-backdrop-filter: saturate(160%) blur(20px);
          box-shadow: 0 60px 120px -30px rgba(0,0,0,.7);
          text-align: center;
          width: 100%; max-width: 360px;
          animation: rd-pop .35s cubic-bezier(.65,0,.35,1);
        }
        @keyframes rd-pop {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .rd-logo-wrap {
          position: relative;
          width: 80px; height: 80px;
          margin: 0 auto 1.25rem;
          display: grid; place-items: center;
        }
        .rd-logo {
          filter: drop-shadow(0 8px 20px rgba(124,58,237,.5));
          z-index: 1;
        }
        .rd-ring {
          position: absolute; inset: 0;
          border: 2px solid rgba(168,85,247,.18);
          border-top-color: #c084fc;
          border-radius: 50%;
          animation: rd-spin 1.1s linear infinite;
        }
        @keyframes rd-spin { to { transform: rotate(360deg); } }

        .rd-title {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -.3px;
          margin: 0 0 .35rem;
          background: linear-gradient(90deg, #fff, #d6c5ff);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .rd-sub {
          color: #a59bc4;
          font-size: .88rem;
          margin: 0 0 1.5rem;
        }

        .rd-progress {
          position: relative;
          width: 100%; height: 4px;
          background: rgba(255,255,255,.06);
          border-radius: 999px;
          overflow: hidden;
        }
        .rd-progress span {
          position: absolute; top: 0; left: 0;
          width: 40%; height: 100%;
          background: linear-gradient(90deg, transparent, #a855f7, #c084fc, transparent);
          border-radius: 999px;
          animation: rd-bar 1.2s cubic-bezier(.65,0,.35,1) infinite;
        }
        @keyframes rd-bar {
          0%   { left: -40%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  )
}

export default Redirect
