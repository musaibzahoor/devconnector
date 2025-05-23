import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
      <Link to="/">Home</Link> | <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
