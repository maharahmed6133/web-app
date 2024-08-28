

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="  min-h-screen w-screen md:bg-fixed  lg:bg-black bg-zinc-900 bg-fixed md:bg-zinc-900">
        <div className="lg:border-gray-950 lg:border-2 lg:w-11/12 lg:min-h-screen md:min-h-screen min-h-screen lg:ml-16 lg:mr-10 lg:bg-zinc-900 relative">
          {/* navbar */}
          <div className="flex flex-auto items-center border-1 bg-zinc-800  text-sm space-x-3 lg:space-x-4 text-center ml-16 mr-5 mt-5 md:ml-32 lg:ml-96 lg:mr-3.5 lg:mt-10 pl-4 lg:pl-7 pt-2 pb-2 font-normal lg:font-semibold w-80 lg:w-96 rounded-3xl fixed top-0 lg:top-0 left-2 lg:left-32 right-0 lg:right-0 z-50">
            <a href="" className="text-justify hover:text-sky-500">About</a>
            <a href="" className="text-justify hover:text-sky-500">Articles</a>
            <a href="" className="text-justify hover:text-sky-500">Projects</a>
            <a href="" className="text-justify hover:text-sky-500">Speaking</a>
            <a href="" className="text-justify hover:text-sky-500">Uses</a>
          </div>
          
            
          {/* picture */}
          <div className="md:top-10 top-10">
            <Image className="rounded-full border border-white w-11 h-11 ml-2 md:ml-10 lg:ml-40 lg:mt-32 animate-bounce "
              src="/avatar.webp"
              alt="an awesome image"
              width={60}
              height={60}
            />
            <div className="mt-10 w-9/12 md:w-5/6  lg:w-3/5 ml-2 md:ml-10 lg:ml-40 lg:mt-11 ">
              <p className="font-bold text-left text-xl md:text-4xl lg:text-5xl tracking-normal">Software designer, founder,</p>
              <p className="font-bold text-left text-xl md:text-4xl lg:text-5xl  tracking-normal"> and amateur astronaut.</p>
              <p className="text-justify text-xs lg:text-base ">I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and  CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.</p>


            </div>
          </div>
          {/* Right Box */}
          <div className="w-72 h-11 ml-0 md:ml-10 lg:ml-40 mt-5 lg:mt-5 ">
            <div>
              <Image className="float-left  pl-4 pt-2"
                src={"/logos.png"}
                alt="awsome image"
                width={40}
                height={30}
              />
            </div>

            <div>
              <Image className="float-left pl-4 pt-2"
                src={"/instagram.png"}
                alt="awsome image"
                width={40}
                height={30}
              />
            </div>

            <div>
              <Image className="float-left pl-4 pt-2"
                src={"/social.png"}
                alt="awsome image"
                width={40}
                height={30}
              />
            </div>

            <div>
              <Image className="float-left pl-4 pt-2"
                src={"/linkedin-logo.png"}
                alt="awsome image"
                width={40}
                height={30}
              />
            </div>
          </div>

          {/* images gallery */}
          <div className="float-left flex items-center pt-11 relative">
            <Image className="rounded-lg rotate-3 md:hidden -ml-16 lg:-ml-20 w-32 h-24 lg:w-48 lg:h-72"
              src="/image-1.webp"
              alt="an awesome image"
              width={200}
              height={50}
            />
            <span><Image className="rounded-lg md:-ml-10 ml-3 lg:ml-16 w-28 h-24 md:w-72 md:h-80 lg:w-60 lg:h-72 -rotate-3"
              src="/image-2.webp"
              alt="an awesome image"
              width={270}
              height={260}
            />
            </span>
            <span><Image className="rounded-lg ml-3 md:ml-3 lg:ml-16 w-28 h-24 md:w-72 md:h-80  lg:w-60 lg:h-72 rotate-2"
              src="/image-3.webp"
              alt="an awesome image"
              width={260}
              height={260}
            />
            </span>
            <span><Image className="rounded-lg ml-3 lg:ml-16 md:ml-10 w-28 h-24 lg:w-60 lg:h-72  md:w-72 md:h-80 -rotate-3 md:-rotate-3 lg:rotate-3"
              src="/image-4.webp"
              alt="an awesome image"
              width={260}
              height={260}
            />
            </span>
            <span><Image className="hidden md:hidden lg:block rounded-lg ml-20 lg:ml-20 w-24 h-24 lg:w-60 lg:h-72 -rotate-3"
              src="/image-5.webp"
              alt="an awesome image"
              width={230}
              height={260}
            />
            </span>



          </div>
          {/* read articles */}
          <div className="lg:w-5/12 md:w-9/12 md:mt-96 w-96 lg:h-50 hover:bg-zinc-800 cursor-pointer mt-44 lg:mt-96 ml-0 md:ml-5  lg:ml-28 rounded-lg z-30 relative transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <p className="pl-4 lg:pl-7 pt-2 lg:pt-4 text-left font-serif font-bold lg:font-black text-white transition-colors duration-300 ease-in-out hover:text-sky-400">
              | August 18, 2024
            </p>
            <p className="pl-4 lg:pl-7  text-justify font-medium pt-3 pb-3 text-white transition-colors duration-300 ease-in-out hover:text-sky-400">
              Crafting a design system for a multiplanetary future
            </p>
            <p className="pl-4 lg:pl-7 pr-5 text-justify text-sm font-extralight text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-300">
              Most companies try to stay ahead of the curve when it comes to visual design, but
              for Planetaria we needed to create a brand that would still inspire us 100 years
              from now when humanity has spread across our entire solar system.
            </p>
            <a href="" className=" pl-4 lg:pl-7 pr-5 text-justify text-sm text-green-500 pt-6 pb-5 transition-colors duration-300 ease-in-out hover:text-green-300 hover:underline">
              <span className="mr-2">→</span> Read article
            </a>
            <div className="pb-6"></div>
          </div>

          {/* second box */}
          <div className="lg:w-5/12 md:w-9/12 md:ml-5   w-96  lg:h-50 hover:bg-zinc-800 cursor-pointer mt-2 lg:mt-10 ml-0 lg:ml-28 rounded-lg z-30 relative transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
            <p className="pl-4 lg:pl-7 pt-4 text-left font-serif font-bold lg:font-black text-white transition-colors duration-300 ease-in-out hover:text-sky-400">
              | August 18, 2024
            </p>
            <p className="pl-4 lg:pl-7 pr-5 text-justify font-medium pt-3 pb-3 text-white transition-colors duration-300 ease-in-out hover:text-sky-400">
              Introducing Animaginary: High performance web animations
            </p>
            <p className="pl-4 lg:pl-7 pr-5 text-justify text-sm font-extralight text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-300">
              When you’re building a website for a company as ambitious as Planetaria, you
              need to make an impression. I wanted people to visit our website and see
              animations that looked more realistic than reality itself.
            </p>
            <a href="" className="pl-4 lg:pl-7 pr-5 text-justify text-sm text-green-500 pt-6 pb-5 transition-colors duration-300 ease-in-out hover:text-green-300 hover:underline">
              <span className="mr-2">→</span> Read article
            </a>
            <div className="pb-6"></div>  
          </div>
          {/* third box */}
          <div className="lg:w-5/12 md:w-9/12 md:ml-5   w-96  lg:h-50 hover:bg-zinc-800 cursor-pointer mt-2 lg:mt-10 ml-0 lg:ml-28 rounded-lg z-30 relative transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
             <p className="pl-4 lg:pl-7 pt-4 text-left font-serif font-bold lg:font-black text-white transition-colors duration-300 ease-in-out hover:text-sky-400 "> | August 18, 2024     </p>
       
            <p className=" pl-4 lg:pl-7 pr-5 text-justifyfont-medium pt-3 pb-3 text-white transition-colors duration-300 ease-in-out hover:text-sky-400">
              Rewriting the cosmOS kernel in Rust
            </p>
            <p className="pl-4 lg:pl-7 pr-5 text-justify text-sm font-extralight text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-300">
              When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful
              programming language with a lot of benefits, but it’s been a while since I’ve seen an article on
              the front page of Hacker News about rewriting some important tool in Go and I see articles on
              there about rewriting things in Rust every single week.
            </p>
            <a href="" className="pl-7 pr-5 text-justify text-sm text-green-500 pt-6 pb-5 transition-colors duration-300 ease-in-out hover:text-green-300 hover:underline">
              <span className="mr-2 ">→</span> Read article
            </a>
          </div>
          <div className="lg:absolute md:relative lg:right-10   md:ml-24 ml-0 mt-11 md:mt-11 lg:mt-72 lg:top-1/3 border  border-zinc-800 w-96 md:w-9/12  lg:w-96 h-48 rounded-lg shadow-lg z-10 animate-pulse">
            {/* Overlay box 1 */}
            <div className=" ">


              <span><Image className=" ml-2 md:ml-2 lg:ml-4 pt-2 md:pt-2 lg:pt-6 float-left "
                src="/mail.png"
                alt="an awesome image"
                width={25}
                height={20}
              />
              </span>
              <p className="pl-14 pt-6 font-medium text-sm">Stay up to date</p>
              <p className="pl-6 pt-4 pr-10 font-light text-sm ">Get notified when I publish something new, and unsubscribe at any time.</p>
              <input
                type="email"
                placeholder="Email address"
                className="border bg-zinc-900 border-zinc-800 float-left font-light text-sm rounded-lg p-2 w-2/3 mt-5 ml-5"
              />
              <button className="text-white rounded-sm text-sm font-medium  bg-gray-600 w-11 h-9 ml-4 mt-5 hover:bg-gray-500">Join</button>
            </div>
          </div>
          {/* Overlay box 2 */}
          <div className="lg:absolute md:relative lg:right-10 md:ml-24 mt-10 mb-5 md:mb-5 md:mt-10 lg:mt-64 lg:top-2/4 border border-zinc-800  w-96 md:w-9/12  lg:w-96 h-96 rounded-lg shadow-lg z-10 animate-pulse">
            <div className=" ">
              <Image className="ml-8 mt-7 float-left"
                src="/briefcase.png"
                alt="an awsome image"
                width={25}
                height={20}

              />
              <p className="font-medium text-sm pl-16 pt-8 ">Work</p>
              <div className=" w-80 h-14 mt-4 ml-7">
                <Image className="border-x-4 border-zinc-600 border-y-4 rounded-full float-left mt-2 ml-2"
                  src={"/planetaria.ecd81ade.svg"}
                  alt="awsome image"
                  width={40}
                  height={40}
                />
                <p className="text-sm font-medium  pl-14 pt-1">Planetaria</p>
                <p className="text-xs text-zinc-400 pl-14 pt-1">CEO</p>
                <p className="absolute right-6 top-24 text-xs text-zinc-500">2019 — Present</p>
              </div>
              <div className=" w-80 h-14 mt-2 ml-7">
                <Image className="border-x-4 border-zinc-600 border-y-4 rounded-full float-left mt-2 ml-2"
                  src={"/airbnb.b4000690.svg"}
                  alt="awsome image"
                  width={40}
                  height={40}
                />
                <p className="text-sm font-medium  pl-14 pt-1">Airbnb</p>
                <p className="text-xs text-zinc-400 pl-14 pt-1">Product Designer</p>
                <p className="absolute right-6 top-40 text-xs text-zinc-500">2014 — 2019</p>
              </div>
              <div className=" w-80 h-14 mt-2 ml-7">
                <Image className="border-x-4 border-zinc-600 border-y-4 rounded-full float-left mt-2 ml-2"
                  src={"/facebook.dd9e7d48.svg"}
                  alt="awsome image"
                  width={40}
                  height={40}
                />
                <p className="text-sm font-medium  pl-14 pt-1">Facebook</p>
                <p className="text-xs text-zinc-400 pl-14 pt-1">iOS Software Engineer</p>
                <p className="absolute right-6 top-56 text-xs text-zinc-500">2011 — 2014</p>
              </div>
              <div className=" w-80 h-14 mt-2 ml-7">
                <Image className="border-x-4 border-zinc-600 border-y-4 rounded-full float-left mt-2 ml-2"
                  src={"/starbucks.4a5bd050.svg"}
                  alt="awsome image"
                  width={40}
                  height={40}
                />
                <p className="text-sm font-medium  pl-14 pt-1">Starbucks</p>
                <p className="text-xs text-zinc-400 pl-14 pt-1">Shift Supervisor</p>
                <p className="absolute right-6 top-72 text-xs text-zinc-500">2008 — 2011</p>
              </div>
              <button className="w-80 h-10 mt-3 ml-7 border rounded-lg hover:bg-zinc-800 text-sm border-zinc-800">Download CV </button>
            </div>
          </div>

          <div className=" border border-zinc-700 max-w-screen">

          </div>

          <div className="text-sm font-bold">
            <p className=" pl-10 pt-10 pb-16 float-left hover:text-green-700 ">About</p>
            <p className=" pl-10 pt-10 pb-10 float-left hover:text-green-700">Projects</p>
            <p className=" pl-10 pt-10 pb-10 float-left hover:text-green-700">Speaking</p>
            <p className=" pl-80 pt-10 pb-10 hover:text-green-700 ">Uses</p>
          </div>

        </div>
      </div>
    </>
  );
}
