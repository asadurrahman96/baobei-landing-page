import { Link, useParams } from "react-router-dom";
import { stories } from "../data/stories";

function StoryPage() {
  const { slug } = useParams();
  const index = stories.findIndex((s) => s.slug === slug);
  const story = stories[index];

  if (!story) {
    return (
      <section className="bg-[#FFF9F0] px-6 py-32 text-center">
        <div className="text-6xl">🙈</div>
        <h1 className="mt-4 text-3xl font-extrabold text-gray-900">
          Story not found
        </h1>
        <Link to="/#stories" className="mt-6 inline-block font-semibold text-orange-500">
          ← Back to stories
        </Link>
      </section>
    );
  }

  const next = stories[(index + 1) % stories.length];

  return (
    <article className="bg-[#FFF9F0] px-6 py-16 md:px-16">
      <div className="mx-auto max-w-3xl">
        <Link to="/#stories" className="font-semibold text-orange-500 hover:text-orange-600">
          ← Back to stories
        </Link>

        <div className={`${story.color} mt-8 flex h-64 items-center justify-center rounded-3xl`}>
          <span className="text-9xl">{story.emoji}</span>
        </div>

        <span className="mt-8 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
          Lesson: {story.lesson}
        </span>

        <h1 className="mt-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
          {story.title}
        </h1>

        <div className="mt-8 space-y-6 text-lg leading-8 text-gray-700">
          {story.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-white p-6 text-center shadow-sm">
          <p className="text-gray-600">Want another adventure?</p>
          <Link
            to={`/story/${next.slug}`}
            className="mt-2 inline-block font-bold text-orange-500 hover:text-orange-600"
          >
            Read "{next.title}" {next.emoji} →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default StoryPage;