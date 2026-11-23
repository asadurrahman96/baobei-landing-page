
function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-[#FFF9F0] px-6 py-20 md:px-16 lg:px-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Left Content */}
        <div>
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            ✨ Welcome to Baobei Stories
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-7xl">
            Little Stories.
            <br />
            <span className="text-orange-500">
              Big Lessons.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Magical stories for little hearts. Join Bobo Panda
            and his friends on adventures filled with kindness,
            friendship, honesty, and fun.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#stories"
              className="rounded-full bg-orange-500 px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-600"
            >
              Explore Stories →
            </a>

            <a
              href="#about"
              className="rounded-full border-2 border-orange-200 px-8 py-4 font-bold text-gray-700 transition hover:bg-orange-100"
            >
              Discover Our World
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-gray-600">
            <span>📚 Fun Stories</span>
            <span>💛 Life Lessons</span>
            <span>🌈 Happy Adventures</span>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative flex justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-orange-200 md:h-96 md:w-96"></div>

          <div className="relative flex h-80 w-80 items-center justify-center rounded-[3rem] bg-orange-100 shadow-xl md:h-[450px] md:w-[450px]">
            <div className="text-center">
              <div className="animate-bounce text-[150px] md:text-[200px]">
                🐼
              </div>

              <div className="mx-auto mt-2 w-fit rounded-2xl bg-white px-6 py-4 shadow-md">
                <h3 className="text-xl font-bold text-gray-800">
                  Hi, I'm Bobo!
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Your storytime buddy 💛
                </p>
              </div>
            </div>

            {/* Decorations */}
            <span className="absolute -right-4 top-8 animate-pulse text-4xl">
              ⭐
            </span>

            <span className="absolute -left-6 top-20 text-4xl">
              🌈
            </span>

            <span className="absolute -bottom-4 right-10 animate-pulse text-4xl">
              ✨
            </span>

            <span className="absolute -bottom-2 left-8 text-4xl">
              💛
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
