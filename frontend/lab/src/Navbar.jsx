import  { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <main className="main">
        <nav className="nav">
          <div className="left">
            <li>Circulation</li>
            <li>Patrons</li>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: "rgba(208, 110, 83)" }}
              >
                Search
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/advancedsearch" className="dropdown-item">
                    Advanced Search
                  </Link>
                </li>
                <li>
                  <Link to="/itemsearch" className="dropdown-item" >
                    Item Search
                  </Link>
                </li>
              </ul>
            </div>
            <li>
              <i className="fa-solid fa-cart-shopping"></i>Cart
            </li>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: "rgba(208, 110, 83)" }}
              >
                More
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    List
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cataloging
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Acquisitions
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Authorities
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Serials
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Reports
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Suggestions
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Tools
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Administration
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    About Koha
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <li>libadmin</li>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: "rgba(208, 110, 83)" }}
              >
                Pune Institute of Computer Technology
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Set Library
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    My Account
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    My Checkouts
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            <li>Help</li>
          </div>
          <button className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </button>
        </nav>
        {isMenuOpen && (
          <div className="mobile-menu">
            <li>Circulation</li>
            <li>Patrons</li>
            <li>Search</li>
            <li>Cart</li>
            <li>More</li>
            <li>libadmin</li>
            <li>Pune Institute of Computer Technology</li>
            <li>Help</li>
          </div>
        )}
        <div className="container">
          <div className="row mt-4 under_nav">
            <div className="col-2">
              <li
                className="text"
                style={{ fontSize: "50px", listStyleType: "none" }}
              >
                <img src="/images/pict.jpg" alt="" className=""/>
              </li>
            </div>
            <div className="col-10 left_sec">
              <p>{activeTab}</p>
              <span>
                <input type="text" />
              </span>
              <span>
                <button>Submit</button>
              </span>
              <ul className="nav nav-tabs tab">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current=""
                    href="#"
                    onClick={() =>
                      handleTabClick("Enter patron card number or partial name")
                    }
                  >
                    Checkout
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() =>
                      handleTabClick("Scan a barcode to check in:")
                    }
                  >
                    Check in
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => handleTabClick("Scan a barcode to renew:")}
                  >
                    Renew
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-disabled="true"
                    onClick={() =>
                      handleTabClick(
                        "Enter patron card number or partial name:"
                      )
                    }
                  >
                    Search Patrons
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-disabled="true"
                    onClick={() => handleTabClick("Enter search keywords:")}
                  >Search The Catalog</a>
                    
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;
