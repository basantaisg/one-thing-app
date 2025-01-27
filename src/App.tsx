import './App.css';
import { ArrowRightCircleIcon } from '@heroicons/react/16/solid';

const App = () => {
  return (
    <main className='grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200'>
      <div className='grid place-items-center gap-8 m-8'>
        <h1 className='text-3xl sm:text-6xl font-bold text-center'>
          What is your "One Thing"?
        </h1>
        <form className='flex ring-4 rounded-md ring-slate-200 focus-within:ring-teal-600'>
          <input type='text' />
          <button>
            <ArrowRightCircleIcon className='h-12 w-12' />
          </button>
        </form>
      </div>
    </main>
  );
};

export default App;
