import { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-espresso text-latte shadow-md sticky top-0 z-50">
      {/* Desktop Navbar */}
      <div className="container mx-auto px-4 py-3 hidden md:flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-coffee">☕ BrewTracker</span>
        </Link>

        {/* Desktop Menu */}
        <div className="flex space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/finance">Finance</NavLink>
          <LoginButton />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center p-3">
        <Link to="/" className="text-xl font-coffee">☕ BrewTracker</Link>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-latte focus:outline-none"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-cappuccino bg-opacity-90">
          <div className="flex flex-col space-y-3 px-4 py-2">
            <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/orders" onClick={() => setIsMenuOpen(false)}>Orders</MobileNavLink>
            <MobileNavLink to="/finance" onClick={() => setIsMenuOpen(false)}>Finance</MobileNavLink>
            <MobileLoginButton />
          </div>
        </div>
      )}
    </nav>
  );
};

// Reusable NavLink Component
const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="text-latte hover:text-caramel transition-colors duration-200 font-medium"
  >
    {children}
  </Link>
);

// Mobile-specific NavLink
const MobileNavLink = ({ to, children, onClick }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="block py-2 text-mocha hover:text-caramel"
  >
    {children}
  </Link>
);

// Login/Logout Button Component
const LoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual auth logic

  return (
    <button 
      onClick={() => setIsLoggedIn(!isLoggedIn)}
      className="bg-caramel hover:bg-opacity-90 text-espresso px-4 py-2 rounded-lg transition-all duration-200"
    >
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
};

// Mobile Login Button
const MobileLoginButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <button 
      onClick={() => setIsLoggedIn(!isLoggedIn)}
      className="text-left py-2 text-mocha hover:text-caramel"
    >
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
};

export default Navbar;