import React, { useState } from "react";
import { ShoppingBag, User, Menu, X, ChevronDown, Search } from "lucide-react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <nav className="d-flex align-items-center justify-content-between p-3 shadow-sm bg-white">
        <div className="d-flex align-items-center">
          <img src="/logo.webp" alt="Posterized Logo" className="me-3" style={{ height: "40px" }} />
        </div>

        {/* Desktop Menu */}
        <ul className="d-none d-md-flex list-unstyled m-0 gap-4 text-secondary">
          <li className="position-relative cursor-pointer"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}>
            Shop Posters <ChevronDown size={14} />
            {dropdownOpen && (
              <ul className="position-absolute bg-white shadow-sm list-unstyled p-2 mt-1 rounded" style={{ minWidth: "180px" }}>
                <li className="p-2 hover:bg-light cursor-pointer">Classic Posters</li>
                <li className="p-2 hover:bg-light cursor-pointer">Modern Posters</li>
                <li className="p-2 hover:bg-light cursor-pointer">Minimalist Posters</li>
              </ul>
            )}
          </li>
          <li className="cursor-pointer">Custom Posters</li>
          <li className="cursor-pointer">Wall Collage Kit</li>
          <li className="cursor-pointer">Split Posters</li>
          <li className="cursor-pointer">Reviews</li>
          <li className="cursor-pointer">How To Avail Offer</li>
          <li className="cursor-pointer">Support</li>
        </ul>

        <div className="d-flex align-items-center gap-3">
          {searchOpen ? (
            <input
              type="text"
              className="form-control"
              placeholder="Search posters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onBlur={() => setSearchOpen(false)}
              autoFocus
            />
          ) : (
            <button className="btn border rounded-pill px-3 d-flex align-items-center" onClick={() => setSearchOpen(true)}>
              <Search size={16} className="me-2" /> Search
            </button>
          )}

          <User className="h-5 w-5 text-secondary cursor-pointer" />
          <div className="position-relative">
            <ShoppingBag className="h-5 w-5 text-secondary cursor-pointer" />
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark text-white">
                {cartCount}
              </span>
            )}
          </div>
        </div>

        <button className="d-md-none border-0 bg-transparent" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="d-md-none list-unstyled bg-white shadow-sm p-3 position-absolute w-100">
          <li className="p-2 border-bottom cursor-pointer">Shop Posters</li>
          <li className="p-2 border-bottom cursor-pointer">Custom Posters</li>
          <li className="p-2 border-bottom cursor-pointer">Wall Collage Kit</li>
          <li className="p-2 border-bottom cursor-pointer">Split Posters</li>
          <li className="p-2 border-bottom cursor-pointer">Reviews</li>
          <li className="p-2 border-bottom cursor-pointer">How To Avail Offer</li>
          <li className="p-2 cursor-pointer">Support</li>
        </ul>
      )}

      <div className="w-100">
        <img
          src="/banner.png"
          alt="Promotional Banner"
          className="img-fluid"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </>
  );
}

export default Navbar;
