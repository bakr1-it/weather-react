

export default function DotDark() {
  return (
    <div className='overflow-hidden absolute inset-0'>
{[...Array(50)].map((_,i)=>{
    return (
        <div 
        key={i}
        className='absolute w-2 h-2 rounded-full opacity-60 shadow-sm pointer-events-none dark:bg-theme-muted shadow-theme-hover'
        
        style={{
left : `${Math.random() * 100}%`,
top : `${Math.random() * 100}%`,
animation : `dot-dark ${15 * Math.random() + 10}s ease-in-out infinite`,
 animationDelay: `${Math.random() * 5}s`,
        }}
        >

            

        </div>
    )
})}


    </div>
  )
}
