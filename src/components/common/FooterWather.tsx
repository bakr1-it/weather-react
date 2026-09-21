
interface PropsType{
    typeMark:string,
    mark:string,


}

export default function FooterWather({typeMark , mark } : PropsType) {
   const className= ` flex flex-col  justify-center items-center py-1 `;
  return (
    <div className={className}>
        <span className="text-slate-500 font-extralight ">{typeMark}</span>
        <span className="font-bold">{mark}</span>
      
    </div>
  )
}
