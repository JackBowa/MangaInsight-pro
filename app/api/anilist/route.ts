import { ANILIST_SEARCH } from "@/lib/anilist";

const ALLOWED_QUERY = ANILIST_SEARCH.replace(/\s+/g, " ").trim();

const rateLimitMap = new Map<string, { count: number; ts: number }>();
const RATE_LIMIT = 20; // requêtes max
const RATE_WINDOW = 60_000; // par minute

export async function POST(req: Request) {
  // Rate limiting par IP
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (entry && now - entry.ts < RATE_WINDOW) {
    if (entry.count >= RATE_LIMIT) {
      return Response.json({ error: "Trop de requêtes" }, { status: 429 });
    }
    entry.count++;
  } else {
    rateLimitMap.set(ip, { count: 1, ts: now });
  }

  // Taille max du body
  const raw = await req.text();
  if (raw.length > 2048) {
    return Response.json({ error: "Requête trop grande" }, { status: 400 });
  }

  let body: { query?: string; variables?: unknown };
  try {
    body = JSON.parse(raw);
  } catch {
    return Response.json({ error: "JSON invalide" }, { status: 400 });
  }

  const { query, variables } = body;

  // Whitelist : seule la query AniList autorisée
  if (!query || query.replace(/\s+/g, " ").trim() !== ALLOWED_QUERY) {
    return Response.json({ error: "Requête non autorisée" }, { status: 403 });
  }

  const res = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  const data = await res.json();
  return Response.json(data);
}
