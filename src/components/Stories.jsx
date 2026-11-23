
function Stories() {
  const stories = [
    {
      emoji: "🐼",
      title: "Bobo Learns Honesty",
      description:
        "Bobo discovers why telling the truth is always the right thing to do.",
      lesson: "Lesson: Honesty",
      color: "bg-orange-100",
    },
    {
      emoji: "🐰",
      title: "The Sharing Bunny",
      description:
        "A little bunny learns that sharing makes friendship even more special.",
      lesson: "Lesson: Sharing",
      color: "bg-pink-100",
    },
    {
      emoji: "🐻",
      title: "A Friend in Need",
      description:
        "A brave little bear helps a friend and discovers the power of kindness.",
      lesson: "Lesson: Kindness",
      color: "bg-yellow-100",
    },
  ];

  return (
    <section id="stories" className="bg-[#FFF9F0] px-6 py-20 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            📚 Our Stories
          </span>

          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 md:text-5xl">
            Magical Stories for
            <span className="text-orange-500"> Little Minds</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Explore fun adventures filled with valuable lessons
            that children will love and remember.
          </p>
        </div>

        {/* Story Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {stories.map((story, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className={`${story.color} flex h-56 items-center justify-center`}
              >
                <span className="text-8xl transition hover:scale-110">
                  {story.emoji}
                </span>
              </div>

              <div className="p-6">
                <span className="text-sm font-semibold text-orange-500">
                  {story.lesson}
                </span>

                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {story.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {story.description}
                </p>

                <button className="mt-5 font-semibold text-orange-500 transition hover:text-orange-600">
                  Read Story →
                </button>
              </div>
            </div>
          ))}

        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <button className="rounded-full border-2 border-orange-400 px-8 py-3 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white">
            Explore All Stories
          </button>
        </div>

      </div>
    </section>
  );
}

export default Stories;
