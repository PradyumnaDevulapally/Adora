import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 ">
      <span>
        <Link to="/" className="cursor-pointer text-neutral-600 text-2xl font-serif font-extrabold">
          Arora
        </Link>
      </span>

      <div className="h-10 w-50 flex items-center">
        <span className="grid grid-flow-col gap-8 justify-items-center m-3 font-extralight font-serif">
          <Link to="/" className="cursor-pointer text-neutral-600 text-xl ">
            Home
          </Link>
          <Link to="/collection" className="cursor-pointer text-neutral-600 text-xl">
            Collection
          </Link>
        </span>
      </div>
    </nav>
  );
}
