export default function ProsCons({ pros=[], cons=[] as string[] }){
  return (
    <div className="grid md:grid-cols-2 gap-4 not-prose">
      <div className="card p-4">
        <h4 className="font-semibold mb-2">Points forts</h4>
        <ul className="list-disc list-inside space-y-1">{pros.map((p,i)=>(<li key={i}>{p}</li>))}</ul>
      </div>
      <div className="card p-4">
        <h4 className="font-semibold mb-2">Points faibles</h4>
        <ul className="list-disc list-inside space-y-1">{cons.map((c,i)=>(<li key={i}>{c}</li>))}</ul>
      </div>
    </div>
  )
}
