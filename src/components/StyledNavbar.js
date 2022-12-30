import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink 
      to='/' 
      className={({isActive}) =>isActive?'link active' : 'link' }
      
      >Home</NavLink>
      <NavLink to="/about" className={({isActive}) =>isActive?'link active' : 'link' }>About</NavLink>
      {/* <NavLink to="/dashboard" className={({isActive}) =>isActive?'link active' : 'link' }>Dashboard</NavLink> */}
      <NavLink to="/electronics" className={({isActive}) =>isActive?'link active' : 'link' }>Electronics</NavLink>
      {/* <Link to='/error'>Error</Link> */}
      <NavLink to="/Fashion" className={({isActive}) =>isActive?'link active' : 'link' }>Fashion</NavLink>
      <NavLink to="/Foods" className={({isActive}) =>isActive?'link active' : 'link' }>Foods</NavLink>
      <NavLink to="/SignIn" className={({isActive}) =>isActive?'link active' : 'link' }>SignIn</NavLink>
      <NavLink to="/SignUp" className={({isActive}) =>isActive?'link active' : 'link' }>SignUp</NavLink>
    </nav>
  );
};
export default Navbar;
