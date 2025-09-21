export default function TagChips({ items=[] as string[] }){
  return (
    <span className="inline-flex flex-wrap gap-2 align-middle not-prose">
      {items.map((t,i)=>(<span key={i} className="chips">#{t}</span>))}
    </span>
  )
}
