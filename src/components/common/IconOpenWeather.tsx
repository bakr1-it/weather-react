import { 
  SunIcon, 
  MoonIcon, 
  CloudIcon, 
  BoltIcon, 
  SparklesIcon, 
  CloudArrowDownIcon, 
  Bars3CenterLeftIcon 
} from '@heroicons/react/24/outline';
export default function getIcon({icon} : {icon:string}){
switch (icon) {
    case '01d': 
          return <SunIcon className="w-12 h-12 text-amber-400 drop-shadow-md transition-transform duration-500 hover:rotate-45" />;

    case '01n': 
      return <MoonIcon className="w-12 h-12 text-indigo-200 drop-shadow-md" />;

    case '02d':
      return (
        <div className="relative flex items-center justify-center w-12 h-12">
          <SunIcon className="w-9 h-9 text-amber-400 absolute -top-1 -start-1" />
        </div>
      );

    case '02n': 
      return (
        <div className="relative flex items-center justify-center w-12 h-12">
          <MoonIcon className="w-9 h-9 text-indigo-200 absolute -top-1 -start-1" />
        </div>
      );

    case '03d':
    case '03n': 
      return <CloudIcon className="w-12 h-12 text-slate-300 dark:text-slate-300 drop-shadow-sm" />;

    case '09d':
    case '09n':
      return <CloudArrowDownIcon className="w-12 h-12 text-cyan-300 drop-shadow-md animate-pulse" />;

    case '10d':
    case '10n': 
      return <CloudArrowDownIcon className="w-12 h-12 text-blue-400 drop-shadow-md" />;

    case '11d':
    case '11n': 
      return <BoltIcon className="w-12 h-12 text-amber-300 drop-shadow-lg" />;

    case '13d':
    case '13n': 
      return <SparklesIcon className="w-12 h-12 text-cyan-200 drop-shadow-md" />;

    case '50d':
    case '50n': 
      return <Bars3CenterLeftIcon className="w-12 h-12 text-slate-300 drop-shadow-sm" />;

    default:
      return <CloudIcon className="w-12 h-12 text-slate-300" />;
    }
}