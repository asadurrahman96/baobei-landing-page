
function App() {
  const stories = [
    {
      emoji: "🐼",
      title: "Bobo Finds a Coin",
      lesson: "Learn the value of honesty.",
      color: "bg-orange-100",
    },
    {
      emoji: "🐰",
      title: "Sharing Is Caring",
      lesson: "Learn to share with others.",
      color: "bg-pink-100",
    },
    {
      emoji: "🐻",
      title: "Helping Mama",
      lesson: "Learn to respect your parents.",
      color: "bg-green-100",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFCF5] text-gray-800">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-5">
        <h1 className="text-3xl font-extrabold text-orange-500">
          Baobei<span className="text-gray-800">.</span>
        </h1>

        <div className="hidden md:flex gap-8 font-medium">
          <a href="#home" className="hover:text-orange-500">Home</a>
          <a href="#stories" className="hover:text-orange-500">Stories</a>
          <a href="#about" className="hover:text-orange-500">About</a>
        </div>

        <a
          href="#stories"
          className="bg-orange-500 text-white px-5 py-3 rounded-full font-semibold hover:bg-orange-600"
        >
          Explore Stories
        </a>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="px-6 md:px-16 py-20 flex flex-col md:flex-row items-center gap-12"
      >
        <div className="flex-1">
          <span className="bg-yellow-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
            Welcome to Baobei Stories ✨
          </span>

          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mt-7">
            Little Stories.
            <span className="text-orange-500"> Big Lessons.</span>
          </h2>

          <p className="text-gray-600 text-lg mt-6 leading-relaxed max-w-xl">
            Fun little adventures that teach children kindness,
            honesty, good habits and beautiful Islamic values.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="#stories"
              className="bg-orange-500 text-white px-7 py-4 rounded-full font-bold hover:bg-orange-600"
            >
              Explore Stories →
            </a>

            <a
              href="#about"
              className="border-2 border-orange-200 px-7 py-4 rounded-full font-bold hover:bg-orange-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="bg-yellow-100 rounded-[45%] w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            <span className="text-[150px] md:text-[210px]">🐼</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-orange-50 px-6 md:px-16 py-20 text-center">
        <h2 className="text-4xl font-extrabold">
          Welcome to Our Little World!
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 mt-5 text-lg leading-relaxed">
          At Baobei, every story is a little adventure with a big lesson.
          We help children discover kindness, gratitude, honesty and
          the beauty of good manners.
        </p>
      </section>

      {/* Stories */}
      <section id="stories" className="px-6 md:px-16 py-20">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-bold">OUR LITTLE ADVENTURES</p>
          <h2 className="text-4xl font-extrabold mt-3">
            Stories with Big Lessons
          </h2>
          <p className="text-gray-500 mt-3">
            Every story teaches something beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-7 shadow-md hover:shadow-xl hover:-translate-y-2 transition"
            >
              <div className={`${story.color} rounded-2xl h-48 flex items-center justify-center`}>
                <span className="text-8xl">{story.emoji}</span>
              </div>

              <h3 className="text-xl font-bold mt-6">
                {story.title}
              </h3>

              <p className="text-gray-500 mt-2">
                {story.lesson}
              </p>

              <a href="#home" className="inline-block text-orange-500 font-bold mt-5">
                Discover More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-20">
        <div className="bg-orange-500 text-white text-center rounded-[35px] px-6 py-16">
          <h2 className="text-4xl font-extrabold">
            Let's Learn and Grow Together!
          </h2>

          <p className="mt-5 text-orange-50 text-lg">
            Small stories can create beautiful hearts.
          </p>

          <a
            href="#stories"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-bold mt-8 hover:bg-orange-50"
          >
            Explore Our Stories
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-orange-100">
        <h2 className="text-2xl font-extrabold text-orange-500">
          Baobei.
        </h2>
        <p className="text-gray-500 mt-2">
          Little Stories. Big Lessons.
        </p>
        <p className="text-gray-400 text-sm mt-4">
          © 2026 Baobei Stories. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;