
function About() {
  return (
    <section id="about" className="bg-white px-6 py-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            💛 About Baobei Stories
          </span>

          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 md:text-5xl">
            Growing Little Hearts
            <span className="text-orange-500"> Through Stories</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe every story has the power to inspire, teach,
            and bring a smile to a child's face. Baobei Stories creates
            magical moments filled with love, kindness, and meaningful lessons.
          </p>
        </div>

        {/* Features */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-orange-50 p-8 text-center transition hover:-translate-y-2">
            <div className="text-5xl">💖</div>

            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Kindness
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Teaching children to care for others and spread kindness
              wherever they go.
            </p>
          </div>

          <div className="rounded-3xl bg-yellow-50 p-8 text-center transition hover:-translate-y-2">
            <div className="text-5xl">🌱</div>

            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Learning
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Helping little minds discover important life lessons
              through fun adventures.
            </p>
          </div>

          <div className="rounded-3xl bg-purple-50 p-8 text-center transition hover:-translate-y-2">
            <div className="text-5xl">✨</div>

            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Imagination
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Creating magical worlds where imagination has no limits.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
