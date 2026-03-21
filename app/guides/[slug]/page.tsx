import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getGuideBySlug, getAllGuides } from "@/lib/posts";

export async function generateStaticParams() {
  const guides = await getAllGuides();
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const guide = await getGuideBySlug(params.slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.excerpt,
    openGraph: {
      title: `${guide.title} — MangaInsight`,
      description: guide.excerpt,
      url: `https://mangainsight.com/guides/${guide.slug}`,
    },
  };
}

const THEME_STYLES: Record<string, { accent: string; bg: string; border: string }> = {
  purple: { accent: "text-brand-400", bg: "from-brand-900/40", border: "border-brand-500/20" },
  blue:   { accent: "text-blue-300",  bg: "from-blue-900/40",  border: "border-blue-500/20" },
  green:  { accent: "text-emerald-300", bg: "from-emerald-900/40", border: "border-emerald-500/20" },
  orange: { accent: "text-orange-300", bg: "from-orange-900/40", border: "border-orange-500/20" },
  red:    { accent: "text-red-300",   bg: "from-red-900/40",   border: "border-red-500/20" },
};

export default async function GuidePage({ params }: { params: { slug: string } }) {
  const guide = await getGuideBySlug(params.slug);
  if (!guide) notFound();

  const t = THEME_STYLES[guide.theme] || THEME_STYLES.purple;

  return (
    <div className="min-h-screen">
      <style>{`
        .hero-grid { background-image: linear-gradient(rgba(139,92,246,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.05) 1px,transparent 1px); background-size:40px 40px; }
        .prose-guide h2 { font-family:'Bebas Neue',sans-serif; font-size:1.6rem; letter-spacing:0.04em; color:#fff; margin: 2rem 0 0.75rem; }
        .prose-guide h3 { font-size:1rem; font-weight:700; color:#e2e8f0; margin: 1.5rem 0 0.5rem; }
        .prose-guide p { font-size:0.92rem; color:rgba(255,255,255,0.65); line-height:1.8; margin-bottom:1rem; }
        .prose-guide strong { color:#fff; font-weight:700; }
        .prose-guide ul, .prose-guide ol { padding-left:1.25rem; margin-bottom:1rem; }
        .prose-guide li { font-size:0.9rem; color:rgba(255,255,255,0.6); line-height:1.75; margin-bottom:0.35rem; }
        .prose-guide li strong { color:#fff; }
        .prose-guide blockquote { border-left:3px solid #8b5cf6; padding:12px 18px; background:rgba(139,92,246,0.08); border-radius:0 10px 10px 0; margin:1.5rem 0; }
        .prose-guide blockquote p { color:rgba(255,255,255,0.75); margin:0; font-style:italic; }
        .prose-guide hr { border:none; border-top:1px solid rgba(255,255,255,0.07); margin:2rem 0; }
        .prose-guide table { width:100%; border-collapse:collapse; margin:1.5rem 0; font-size:0.85rem; }
        .prose-guide th { text-align:left; padding:10px 14px; background:rgba(139,92,246,0.12); color:#a78bfa; font-weight:700; font-size:0.75rem; letter-spacing:0.08em; text-transform:uppercase; border-bottom:1px solid rgba(255,255,255,0.08); }
        .prose-guide td { padding:10px 14px; color:rgba(255,255,255,0.6); border-bottom:1px solid rgba(255,255,255,0.05); }
        .prose-guide tr:hover td { background:rgba(255,255,255,0.02); }
        .prose-guide code { font-family:monospace; font-size:0.82em; background:rgba(255,255,255,0.08); padding:2px 6px; border-radius:4px; color:#a78bfa; }
      `}</style>

      {/* HERO article */}
      <section className={`relative overflow-hidden px-6 md:px-12 py-14 hero-grid bg-gradient-to-br ${t.bg} to-transparent`}>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/50 to-transparent" />
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-brand-500/12 blur-[60px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <Link href="/guides" className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors mb-6">
            ← Retour aux guides
          </Link>

          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center text-2xl flex-shrink-0 shadow-lg">
              {guide.icon}
            </div>
            <div>
              <span className={`text-[0.65rem] font-bold tracking-[0.12em] uppercase ${t.accent}`}>{guide.category}</span>
              <p className="text-xs text-white/30 mt-0.5">⏱ {guide.readingTime}</p>
            </div>
          </div>

          <h1 style={{ fontFamily: "var(--font-bebas), sans-serif", letterSpacing: "0.04em" }}
            className="text-[clamp(2.2rem,5vw,3.5rem)] text-white leading-[0.95] mb-4">
            {guide.title}
          </h1>
          <p className="text-base text-white/50 leading-relaxed max-w-xl">{guide.excerpt}</p>
        </div>
      </section>

      <div className="h-10 bg-gradient-to-b from-transparent to-[#0b0b10] -mt-0.5 relative z-10" />

      {/* CONTENU */}
      <div className="mx-auto max-w-3xl px-4 md:px-8 pb-24">
        <div className={`border ${t.border} rounded-2xl p-6 md:p-10 bg-white/2`}>
          <div className="prose-guide">
            <MDXRemote source={guide.content} />
          </div>
        </div>

        {/* Footer article */}
        <div className="mt-10 flex items-center justify-between">
          <Link href="/guides"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
            ← Tous les guides
          </Link>
          <Link href="/critiques"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 text-white text-sm font-bold hover:bg-brand-600 transition-colors">
            Voir les critiques →
          </Link>
        </div>
      </div>
    </div>
  );
}
