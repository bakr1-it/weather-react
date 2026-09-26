import IconLoad from "./IconLoad"
export default function Loading() {


  return (
    <div className='fixed inset-0 overflow-hidden  min-h-[100vh] flex justify-center  items-center bg-weather-glass w-full z-50  '>
  <section className=' '>
    <IconLoad />
  </section>
    </div>
  )
}
