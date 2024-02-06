import Image from 'next/image'
import Link from 'next/link'
import ViewCounter from '@/components/view-counter'
import { Suspense } from 'react'
import ExpandingArrow from '@/components/expanding-arrow'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="relative flex min-h-screen bg-gray-300 flex-col items-center justify-center">
      <Link
        href="https://page-views.vercel.app/"
        className="group mt-20 sm:mt-0 rounded-full flex space-x-1 bg-slate/50 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
      >
        <p>
     page-views.vercel.app
        </p>
        <ExpandingArrow />
      </Link>
      <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          <Suspense>
            {/* @ts-expect-error Async Server Component */}
            <ViewCounter />
          </Suspense>
      </h1>
      <div className="bg-white/30 p-12 shadow-xl ring-1 ring-slate-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
        <div className="flex justify-between items-center mb-4">
          <div className="space-y-1">
            <h2 className="text-xl text-rose-900 font-semibold">
            <a href="https://nes.jessejesse.com">NES-PS1</a>
            </h2>
            <p className="text-sm text-rose-700">
               ᗧ···ᗣ···ᗣ····♥···ᗣ····
            </p>
          </div>
       <p>Vercel kv + Redis </p>
        </div>
        <div className="flex flex-col text-emerald-800 space-y-4">
          <center><iframe src="https://app-svelte-eight.vercel.app/" scrolling="no" height="300px" width="300px"></iframe></center>
          <h2 className="text-xl font-semibold">
          <a href="https://openai-ufo.vercel.app">Ai (◕_◕)</a>&nbsp;🛸
          </h2>
          </div>
      </div>
      <p className="font-light text-green-900 w-full max-w-lg text-center mt-6">
        
        made in colorado with&nbsp; &#9829;&nbsp;{' '}
        <Link
          href="https://cf-formspree.pages.dev"
          className="font-medium hover:text-rose text-rose-700 transition-colors"
        >
         views.JesseJesse.com&nbsp;
        </Link>
      </p>
      <div className="sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-center items-center">
          
        <Link
          href="https://github.com/sudo-self/page-view-counter"
          className="flex items-center space-x-2"
        >
          <Image
            src="/github.svg"
            alt="GitHub Logo"
            width={24}
            height={24}
            priority
          />
          <p className="font-light">/page-view-counter</p>
        </Link>
      </div>
    </main>
  )
}
