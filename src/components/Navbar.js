import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/electronics">Electronics</Link>
      {/* <Link to='/error'>Error</Link> */}
      <Link to="/Fashion">Fashion</Link>
      <Link to="/Foods">Foods</Link>
      <Link to="/SignIn">SignIn</Link>
      <Link to="/SignUp">SignUp</Link>
    </nav>
  );
};

export default Navbar;
