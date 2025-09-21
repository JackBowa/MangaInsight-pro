export default function Rating({ value=0 }: { value?: number }){
  return <div className="text-sm">Note: {value.toFixed(1)} / 10</div>
}
