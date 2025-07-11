import { ThemeToggle } from "./ThemeToggle";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sand/80 backdrop-blur-sm border-b border-forest/10">
      <div className="container flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl sm:text-2xl font-cormorant font-bold text-forest hover:text-wheat transition-colors flex-shrink-0">
          CYREL E.
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:block">
            <Navigation />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;