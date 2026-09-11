import heroImage from '../../assets/banner-stack.png'

function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-[82rem] items-center gap-0 px-6 py-16 md:gap-12 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8 lg:py-32 xl:pt-16 xl:pb-36">
        <div className="max-w-2xl">
          <h1 className="text-center text-3xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl md:text-left md:text-5xl lg:text-6xl xl:text-[4rem]">
            <span className="block">Build Your Ideal</span>
            <span className="brand-gradient-text block">Development Stack</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-center text-xs leading-5 text-slate-600 md:mx-0 md:mt-7 md:text-left md:text-lg md:leading-8">
            Explore frontend, backend, database, and tooling options, compare them side by side,
            and put together the stack that fits your next project.
          </p>

          <div className="mt-6 flex gap-2 md:mt-10 md:gap-3">
            <a
              href="#technologies"
              className="brand-gradient-bg inline-flex min-h-10 flex-1 items-center justify-center rounded-lg px-2 py-2 text-[10px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 md:min-h-11 md:flex-none md:min-w-44 md:px-5 md:py-2.5 md:text-sm"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="inline-flex min-h-10 flex-1 items-center justify-center rounded-lg border border-slate-200 bg-white px-2 py-2 text-[10px] font-semibold text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700 md:min-h-11 md:flex-none md:min-w-44 md:px-8 md:py-2.5 md:text-sm"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="-mt-20 flex translate-y-14 justify-center md:mt-0 md:translate-y-0">
          <img
            src={heroImage}
            alt="A colorful layered visualization of a development technology stack"
            className="h-auto w-[135%] max-w-none md:w-full md:max-w-[26rem] lg:max-w-[30rem] xl:max-w-[32rem]"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
