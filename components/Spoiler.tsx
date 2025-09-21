'use client'
import { useState } from 'react'
export default function Spoiler({ children }: { children: React.ReactNode }){
  const [open,setOpen]=useState(false)
  return (
    <div className="not-prose">
      <button className="btn" onClick={()=>setOpen(!open)}>{open? 'Masquer spoiler' : 'Afficher spoiler'}</button>
      {open && <div className="mt-3 card p-4">{children}</div>}
    </div>
  )
}
