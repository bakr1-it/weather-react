import React from 'react'
interface propsType{
    classes?:string,
    fun?:()=>void,
    children:React.ReactNode,
    

}
export default function Button({classes,fun,children} :propsType) {

return (

  <div className="button ">

<button 
onClick={fun }

className= {`cursor-pointer ${classes}
dark:bg-theme-storm 
p-2 
rounded-xl
 font-serif
 font-bold
  text-md
   dark:text-slate-100

      shadow-theme-muted
       hover:shadow-2xl
        transition-all
         duration-300
     text-sm
text-slate-800 
bg-white/80 
hover:bg-white dark:hover:bg-theme-storm/85
active:scale-95
border border-slate-200/80 dark:border-white/10
shadow-sm  hover:shadow-sky-500 dark:hover:drop-shadow-theme-hover
outline-none
focus-visible:ring-2 focus-visible:ring-sky-500/50 dark:focus-visible:ring-sky-400/50


         `}
         >
     {children}     </button>
</div> 
);



}
