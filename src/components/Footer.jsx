function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-10 text-center text-gray-300">
      <p className="text-2xl font-extrabold text-orange-400">Baobei.</p>
      <p className="mt-2 text-sm">
        Little stories, big lessons. 💛
      </p>
      <p className="mt-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Baobei Stories. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;