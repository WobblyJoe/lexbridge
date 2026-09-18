import { ArrowLeft, Scale } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isIntake = location.pathname === "/intake";

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          <div className="brand-icon">
            <Scale size={18} />
          </div>

          <span>LEXBRIDGE</span>
        </Link>

        <nav className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/intake">Start a Case</Link>
        </nav>

        {isIntake ? (
          <Link to="/" className="nav-back">
            <ArrowLeft size={15} />
            Exit
          </Link>
        ) : (
          <div className="nav-status">
            <span />
            System Online
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;