import { Square, Menu, X, User } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleChangeUserType = () => {
    localStorage.removeItem("userType");
    window.location.reload();
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-400">
      <div className="px-3">
        <div className="flex items-center justify-between h-14">
          {/* Logo Wireframe */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border-2 border-gray-400"></div>
            <span className="text-gray-900 text-sm">Campus Eye</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-gray-600" />
            ) : (
              <Menu className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Wireframe */}
        {isMenuOpen && (
          <nav className="py-3 border-t-2 border-gray-300">
            <div className="flex flex-col gap-2">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm py-1">Map</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm py-1">Locations</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm py-1">Categories</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm py-1">Help</a>
              <button 
                onClick={handleChangeUserType}
                className="mt-2 h-9 border-2 border-gray-400 flex items-center justify-center gap-2 hover:border-gray-600"
              >
                <User className="w-3.5 h-3.5 text-gray-600" />
                <span className="text-gray-600 text-sm">Change User Type</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
