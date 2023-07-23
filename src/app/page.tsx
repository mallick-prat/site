import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
<body>
<header>
  <nav className="px-8 md:mx-auto md:w-full md:max-w-2xl md:box-border flex items-center justify-between pb-8 pt-8 sm:pb-16">
    <a
      href="#main"
      className="text-primary bg-primary fixed z-10 -top-8 left-2 focus:top-4 px-4 py-3 transform -translate-y-12 focus:translate-y-3 transition-transform duration-200"
    >
      Skip to content
    </a>
    <div>
      <button
        className="flex items-center justify-center -ml-2 w-9 h-9 rounded-lg visible transition-shadow hover:ring-2 ring-gray-300 md:hidden"
        aria-label="Toggle menu"
        type="button"
      >
        <svg
          className="absolute w-5 h-5 text-gray-900"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M2.5 7.5H17.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M2.5 12.5H17.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <svg
          className="absolute w-5 h-5 text-gray-900 hidden"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path d="M18 6L6 18"></path>
          <path d="M6 6l12 12"></path>
        </svg>
      </button>
      <ul className="flex items-center -ml-2">
        <li>
          <a
            className="hidden p-1 hover:bg-gray-200 rounded-lg sm:px-3 sm:py-2 md:inline-block font-normal text-gray-600"
            href=""
          >
            about
          </a>
        </li>
        <li>
          <a
            className="hidden p-1 hover:bg-gray-200 rounded-lg sm:px-3 sm:py-2 md:inline-block font-normal text-gray-600"
            href=""
          >
            writing
          </a>
        </li>
        <li>
        <a
                aria-current="page"
                className="hidden p-1 hover:bg-gray-200 rounded-lg sm:px-3 sm:py-2 md:inline-block font-bold text-gray-600"
                href="https://www.vote.org/register-to-vote/" 
                target="_blank"
              >
                🗳️ register to vote
              </a>
        </li>
      </ul>
    </div>
  </nav>
</header>
<main>
<div className="px-8 md:mx-auto md:w-full md:max-w-2xl md:box-border"><h1 className="text-4xl font-bold md:text-5xl text-primary mb-4 tracking-tight">Pratyush Mallick 🇺🇸</h1><div className="prose dark:prose-dark"><p>
I’m a third year at Harvard College studying Government & Computer Science, focusing on civic infrastructure, democracy, and trust.
I’m passionate about civic engagement, electoral innovation, national security, artifical intelligence, American grand strategy, and government-federal technology.</p>
<br></br>
<p>I currently serve as the Vice-President of the Institute of Politics, pursuing and exploring technical and policy roles in Public Interest Tech. </p>
<br></br>
<p>Contact Me: <a href="mailto:pratmallick@college.harvard.edu" target="_blank" rel="noopener noreferrer nofollow" className="dark:hover:text-gray-500 dark:text-gray-400 hover:text-gray-500 text-gray-600 transition">pratmallick@college.harvard.edu </a></p>

<div className = "mt-4 flex flex-grid space-x-4">
  <a className="block hover:font-bold" href="https://twitter.com/mallickprat" target = "_blank"><p>Twitter</p></a>
  <a className="block hover:font-bold" href="https://www.linkedin.com/in/mallickprat/" target = "_blank"><p>LinkedIn</p></a>
  <a className="block  hover:font-bold" href="/https://iop.harvard.edu/" target = "_blank"><p>Harvard IOP</p></a>
  
</div>
<hr className="h-px my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>

<div className="flex mb-4">
  <div className="flex flex-col justify-center w-1/2 h-24 px-4">
    <a href="/" target="_blank">
      <button className="hover:font-bold hover:text-black">
        <div className="text-gray-800 text-lg">Forging the Fourth Offset</div>
        <div className="text-gray-800">July 2023</div>
      </button>
    </a>
  </div>
  <div className="w-1/2 bg-gray-00 h-24"></div>
</div>
</div>

</div>
</main>
</body>

  )
}
