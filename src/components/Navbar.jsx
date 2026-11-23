
function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 py-5 bg-[#FFFCF5]">
      <h1 className="text-3xl font-extrabold text-orange-500">
        Baobei.
      </h1>

      <div className="hidden md:flex gap-8 font-medium">
        <a href="#home">Home</a>
        <a href="#stories">Stories</a>
        <a href="#about">About</a>
      </div>

      <a
        href="#stories"
        className="bg-orange-500 text-white px-5 py-3 rounded-full"
      >
        Explore Stories
      </a>
    </nav>
  );
}

export default Navbar;
