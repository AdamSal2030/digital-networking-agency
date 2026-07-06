import Link from "next/link";

export type Pub = { name: string; dr: number; url?: string; note?: string };
export type Group = { category: string; pubs: Pub[] };

// A publication's brand icon, resolved from its domain via Google's favicon
// service (reliable for every domain; returns a fallback if none exists).
function logoFor(url?: string): string | null {
  if (!url) return null;
  try {
    return `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=128`;
  } catch {
    return null;
  }
}

export function ArticlesPage({
  plan,
  tagline,
  groups,
  note
}: {
  plan: string;
  tagline: string;
  groups: Group[];
  note?: string;
}) {
  const allPubs = groups.flatMap((g) => g.pubs);
  const total = allPubs.length;
  const topDr = allPubs.reduce((m, p) => Math.max(m, p.dr), 0);

  return (
    <main className="plans-page">
      <header className="plans-top articles-top">
        <Link href="/plans" className="articles-back-btn">
          <span aria-hidden="true">←</span> Back to Plans
        </Link>
        <span className="plans-top-tag">{plan} · Publications</span>
      </header>

      <section className="plans-hero">
        <h1 className="stitle plans-title">{plan} Publications</h1>
        <p className="plans-sub">{tagline}</p>

        {total > 0 ? (
          <div className="articles-stats">
            <div className="articles-stat">
              <span className="articles-stat-num">{total}</span>
              <span className="articles-stat-lbl">Publications</span>
            </div>
            <div className="articles-stat">
              <span className="articles-stat-num">{topDr}</span>
              <span className="articles-stat-lbl">Top Domain Rating</span>
            </div>
            <div className="articles-stat">
              <span className="articles-stat-num">1/mo</span>
              <span className="articles-stat-lbl">Published Feature</span>
            </div>
          </div>
        ) : null}
      </section>

      <section className="plans-section">
        {note ? <div className="articles-note">{note}</div> : null}
        {groups.map((g) => (
          <div className="articles-group" key={g.category}>
            <div className="articles-group-title">
              <span>{g.category}</span>
              <span className="articles-group-count">{g.pubs.length}</span>
            </div>
            <div className="articles-grid">
              {g.pubs.map((p) => {
                const logo = logoFor(p.url);
                const left = (
                  <span className="article-pub-left">
                    {logo ? (
                      <img
                        className="article-pub-logo"
                        src={logo}
                        alt=""
                        loading="lazy"
                      />
                    ) : null}
                    <span className="article-pub-name">{p.name}</span>
                  </span>
                );
                return p.url ? (
                  <a
                    className="article-pub"
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {left}
                    <span className="article-pub-meta">
                      {p.note ? (
                        <span className="article-pub-note">{p.note}</span>
                      ) : null}
                      <span className="article-pub-dr">DR {p.dr}</span>
                      <span className="article-pub-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </span>
                  </a>
                ) : (
                  <div className="article-pub" key={p.name}>
                    {left}
                    <span className="article-pub-meta">
                      {p.note ? (
                        <span className="article-pub-note">{p.note}</span>
                      ) : null}
                      <span className="article-pub-dr">DR {p.dr}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      <div className="articles-cta">
        <div className="articles-cta-text">
          These are live, indexed publications — every feature stays online
          permanently.
        </div>
        <Link href="/plans" className="btn-p articles-cta-btn">
          <span>Choose your plan →</span>
        </Link>
      </div>

      <footer className="plans-foot">
        © 2026 Digital Networking Agency LLC · It&apos;s in our DNA
      </footer>
    </main>
  );
}
