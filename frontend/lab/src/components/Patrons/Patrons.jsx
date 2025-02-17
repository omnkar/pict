import React, { useState } from "react";
import "./patrons.css";

const Patron = () => {
  // State to control visibility of the new patron dropdown
  const [showPatronOptions, setShowPatronOptions] = useState(false);
  const [showQuickAddOptions, setShowQuickAddOptions] = useState(false);

  // Toggle dropdown visibility for New Patron
  const togglePatronOptions = () => {
    setShowPatronOptions(!showPatronOptions);
  };

  // Toggle dropdown visibility for Quick Add New Patron
  const toggleQuickAddOptions = () => {
    setShowQuickAddOptions(!showQuickAddOptions);
  };

  return (
    <div className="main-container">
      <div className="filters-container">
        <h2>Filters</h2>
        <div className="filter-group">
          <label htmlFor="search">Search:</label>
          <input type="text" id="search" name="search" className="filter-input" />
        </div>

        <div className="filter-group">
          <label htmlFor="searchFields">Search fields:</label>
          <select id="searchFields" name="searchFields" className="filter-select">
            <option value="Surname">Surname</option>
            <option value="Standard">Standard</option>
            <option value="Card Number">Card Number</option>
            <option value="Primary Email">Primary Email</option>
            <option value="Borrower Number">Borrower Number</option>
            <option value="Username">Username</option>
            <option value="Primary Phone">Primary Phone</option>
            <option value="Address">Address</option>
            <option value="DOB">DOB</option>
            <option value="Sort1">Sort1</option>
            <option value="Sort2">Sort2</option>
            <option value="First Name">First Name</option>
            <option value="Other Name">Other Name</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="searchType">Search type:</label>
          <select id="searchType" name="searchType" className="filter-select">
            <option value="Starts With">Starts With</option>
            <option value="Contains">Contains</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" className="filter-select">
            <option value="Principal">Principal</option>
            <option value="Director">Director</option>
            <option value="ANY">ANY</option>
            <option value="ASSTT. PROFESSOR">ASSTT. PROFESSOR</option>
            <option value="STAFF">STAFF</option>
            <option value="STUDENT BE">STUDENT BE</option>
            <option value="STUDENT PG">STUDENT PG</option>
            <option value="STUDENT PHD">STUDENT PHD</option>
            <option value="STUDENT UG">STUDENT UG</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="library">Library:</label>
          <select id="library" name="library" className="filter-select">
            <option value="Pune Institute of Computer Tech" className="">
              Pune Institute of Computer Tech
            </option>
          </select>
        </div>

        <div className="button-group">
          <button className="filter-button search-button">Search</button>
          <button className="filter-button clear-button">Clear</button>
        </div>
      </div>

      <div className="options-container">
        {/* New Patron button with dropdown toggle */}
        <button className="option-button" onClick={togglePatronOptions}>
          + New patron
        </button>

        {/* Patron type dropdown visible when "+ New patron" is clicked */}
        {showPatronOptions && (
          <div className="patron-dropdown">
            <select id="newPatronType" name="newPatronType" className="filter-select">
              <option value="Principal">Principal</option>
              <option value="Director">Director</option>
              <option value="ASSTT. PROFESSOR">ASSTT. PROFESSOR</option>
              <option value="STAFF">STAFF</option>
              <option value="STUDENT BE">STUDENT BE</option>
              <option value="STUDENT PG">STUDENT PG</option>
              <option value="STUDENT PHD">STUDENT PHD</option>
              <option value="STUDENT UG">STUDENT UG</option>
            </select>
          </div>
        )}

        {/* Quick Add New Patron button with dropdown toggle */}
        <button className="option-button" onClick={toggleQuickAddOptions}>
          + Quick add new patron
        </button>

        {/* Quick Add patron type dropdown visible when "+ Quick add new patron" is clicked */}
        {showQuickAddOptions && (
          <div className="quick-add-dropdown">
            <select id="quickAddPatronType" name="quickAddPatronType" className="filter-select">
              <option value="Principal">Principal</option>
              <option value="Director">Director</option>
              <option value="ASSTT. PROFESSOR">ASSTT. PROFESSOR</option>
              <option value="STAFF">STAFF</option>
              <option value="STUDENT BE">STUDENT BE</option>
              <option value="STUDENT PG">STUDENT PG</option>
              <option value="STUDENT PHD">STUDENT PHD</option>
              <option value="STUDENT UG">STUDENT UG</option>
            </select>
          </div>
        )}

        <button className="option-button">Patron lists</button>
        <div className="browse-section">
          <p>Browse by last name:</p>
          <div className="alphabet-links">
            {[...Array(26)].map((_, i) => (
              <a href="#" key={i} className="alphabet-link">
                {String.fromCharCode(65 + i)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patron;