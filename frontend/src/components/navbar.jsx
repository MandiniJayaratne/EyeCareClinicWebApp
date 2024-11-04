import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="bg-red-700 text-white p-4 flex items-center justify-between"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <img
        src="/src/assets/eyesite.png"
        alt="Your Company Logo"
        className="w-10 h-10"
      />
      <ul className="flex space-x-10">
        {" "}
        {}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/ourServices">Our Services</Link>
        </li>
        {}
      </ul>
    </nav>
  );
};

export default Navbar;
