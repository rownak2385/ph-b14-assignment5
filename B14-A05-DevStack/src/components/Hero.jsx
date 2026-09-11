import heroImage from '../../assets/banner-stack.png'

function Hero() {
  return (
    <section id="home" className="bg-white">
      <div className="mx-auto grid max-w-[82rem] items-center gap-10 px-6 py-16 sm:gap-12 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8 lg:py-32 xl:pt-16 xl:pb-36">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-extrabold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-6xl xl:text-[4rem]">
            <span className="block">Build Your Ideal</span>
            <span className="brand-gradient-text block">Development Stack</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:mt-7 sm:text-lg sm:leading-8">
            Explore frontend, backend, database, and tooling options, compare them side by side,
            and put together the stack that fits your next project.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <a
              href="#technologies"
              className="brand-gradient-bg inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 sm:min-w-44"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-8 py-2.5 text-sm font-semibold text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700 sm:min-w-44"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="A colorful layered visualization of a development technology stack"
            className="h-auto w-full max-w-[26rem] lg:max-w-[30rem] xl:max-w-[32rem]"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
