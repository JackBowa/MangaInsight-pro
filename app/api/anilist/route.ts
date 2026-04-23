const rateLimitMap = new Map<string, { count: number; ts: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW = 60_000;

export async function POST(req: Request) {
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

  const raw = await req.text();
  if (raw.length > 4096) {
    return Response.json({ error: "Requête trop grande" }, { status: 400 });
  }

  let body: { query?: string; variables?: unknown };
  try {
    body = JSON.parse(raw);
  } catch {
    return Response.json({ error: "JSON invalide" }, { status: 400 });
  }

  const { query, variables } = body;
  if (!query || typeof query !== "string") {
    return Response.json({ error: "Query manquante" }, { status: 400 });
  }

  // Sécurité : uniquement des queries en lecture (pas de mutation)
  const normalized = query.replace(/\s+/g, " ").trim().toLowerCase();
  if (!normalized.startsWith("query") || normalized.includes("mutation")) {
    return Response.json({ error: "Seules les queries sont autorisées" }, { status: 403 });
  }

  try {
    const res = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ query, variables }),
    });
    const data = await res.json();
    return Response.json(data);
  } catch {
    return Response.json({ error: "AniList inaccessible" }, { status: 502 });
  }
}
