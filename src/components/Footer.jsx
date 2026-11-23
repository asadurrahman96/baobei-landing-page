
function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-12 text-white md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">

        {/* Footer Content */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-extrabold">
              🐼 Baobei Stories
            </h2>

            <p className="mt-4 max-w-sm leading-7 text-gray-400">
              Little Stories. Big Lessons.
              Bringing magical stories and meaningful lessons
              to little hearts around the world.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="transition hover:text-orange-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="transition hover:text-orange-400">
                  About Us
                </a>
              </li>

              <li>
                <a href="#stories" className="transition hover:text-orange-400">
                  Stories
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-orange-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Follow Our Adventures
            </h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-orange-500"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-orange-500"
                aria-label="Instagram"
              >
                📷
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-orange-500"
                aria-label="YouTube"
              >
                ▶
              </a>
            </div>

            <p className="mt-5 text-sm text-gray-400">
              Made with 💛 for little hearts.
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Baobei Stories.
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
