import React, { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <main className="main">
        <nav className="nav">
          <div className="left">
            <li>Circulation</li>
            <li>Patrons</li>
            <div class="dropdown">
              <button
                class="btn  dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: "rgba(208, 110, 83)" }}
              >
                Search
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Advanced Search
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Item Search
                  </a>
                </li>
              </ul>
            </div>
            <li>
              <i class="fa-solid fa-cart-shopping"></i>Cart
            </li>
            <div class="dropdown">
              <button
                class="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: "rgba(208, 110, 83)" }}
              >
                More
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    List
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Cataloging
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Acquisitions
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Authorities
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Serials
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Reports
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Suggestions
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Tools
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Administration
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    About Koha
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
            <li>libadmin</li>
            <div class="dropdown">
              <button
                class="btn  dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: "rgba(208, 110, 83)" }}
              >
                Pune Institute of Computer Technology
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Set Library
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    My Account
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    My Checkouts
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            <li>Help</li>
          </div>
        </nav>

        <div className="container">
          <div className="row mt-4 under_nav">
            <div className="col-2">
              <li
                className="text"
                style={{ fontSize: "50px", listStyleType: "none" }}
              >
                PICT
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
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
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
                  >
                    Search The Catalog
                  </a>
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
