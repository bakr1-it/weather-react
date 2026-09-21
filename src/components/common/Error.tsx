
export default function Error({message="some thik occured error",hideModel} :{message:string,hideModel:()=>void}) {
  return (
<section className=' w-full px-4 py-8' >



<section className='relative mx-auto w-full max-w-lg md:max-w-2xl overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/20 p-6 md:p-10 shadow-2xl backdrop-blur-2xl transition-all duration-300 dark:border-white/10 dark:bg-slate-900/40'>

<div className="p-4 w-full flex  items-center">
    <div className="close  ">
      <button className="bg-slate-200 text-slate-700 font-bold dark:bg-slate-800 p-2 rounded-sm cursor-pointer dark:text-slate-300" onClick={()=>hideModel()}>
        <span>X</span>
      </button>
    </div>
<div className="w-full text text-center flex justify-center ">
  <p className="capitalize text-2xl font-extralight text-center">{message}</p>
</div>
</div>


</section>




</section>

  )
}
