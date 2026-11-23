
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 py-5 bg-[#FFFCF5]">
      <Link to="/" className="text-3xl font-extrabold text-orange-500">
        Baobei.
      </Link>

      <div className="hidden md:flex gap-8 font-medium">
        <Link to="/#home">Home</Link>
        <Link to="/#stories">Stories</Link>
        <Link to="/#about">About</Link>
      </div>

      <Link
        to="/#stories"
        className="bg-orange-500 text-white px-5 py-3 rounded-full"
      >
        Explore Stories
      </Link>
    </nav>
  );
}

export default Navbar;
