
function CTA() {
  return (
    <section className="px-6 py-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-orange-500 px-8 py-16 text-center text-white md:px-16">

        <div className="mb-6 text-5xl">
          🐼 🌈 ✨
        </div>

        <h2 className="text-3xl font-extrabold md:text-5xl">
          Ready for a Magical Adventure?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-orange-50">
          Join Bobo and his friends on wonderful adventures.
          Discover stories that inspire kindness, creativity,
          and a love for learning.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-full bg-white px-8 py-4 font-bold text-orange-500 shadow-lg transition hover:scale-105 hover:bg-orange-50">
            Start Exploring Stories →
          </button>

          <button className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-orange-500">
            Meet Bobo 🐼
          </button>
        </div>

      </div>
    </section>
  );
}

export default CTA;
