export async function POST(req: Request){
  const { query, variables } = await req.json()
  const res = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ query, variables })
  })
  const data = await res.json()
  return Response.json(data)
}
