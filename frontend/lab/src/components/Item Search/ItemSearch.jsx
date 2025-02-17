import React from "react";
import "./ItemSearch.css";

const ItemSearch = () => {
  const dropdownOptions = [
    "All libraries",
    "Pune Institute of Computer Technology",
  ];

  const shelvingOptions = [
    "All locations",
    "Computer Engineering",
    "E&TC Engineering",
    "PG-Computer Engineering",
    "Information Technology",
    "PG-E&TC Engineering",
    "PG-Information Technology",
    "Computer Engineering ||",
    "E&TC Engineering ||",
    "PG-Computer Engineering ||",
    "PG Data Science",
    "PG-Wireless Communication Technology",
    "Artificial Intelligence and Data Science",
    "Electronics and Computer Engineering",
  ];

  const itemTypes = [
    "All item types",
    "Book Bank",
    "PICT Book Bank",
    "Book",
    "Bound Volume",
    "Donated Book",
    "E Book",
    "Grant Books",
    "Reference Books",
  ];
  const collectionOptions = ["All collections", "In Process", "BE COMPUTER"];
  const statuses = ["All statuses", "Damaged", "Lost", "Lost and Replaced"];

  return (
    <div className="library-form">
      <div className="heading-container">
        <h2>Item Search</h2>
        <button className="search-button">Search</button>
      </div>
      <form>
        {/* Library Section */}
        <div className="section">
          <label>
            Home library:
            <div className="dropdown-group">
              <select>
                <option>is</option>
                <option>is not</option>
              </select>
              <select>
                {dropdownOptions.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </select>
            </div>
          </label>

          <label>
            Current library:
            <div className="dropdown-group">
              <select>
                <option>is</option>
                <option>is not</option>
              </select>
              <select>
                {dropdownOptions.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </select>
            </div>
          </label>

          <label>
            Shelving location:
            <div className="dropdown-group">
              <select>
                <option>is</option>
                <option>is not</option>
              </select>
              <select>
                {shelvingOptions.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </select>
            </div>
          </label>
        </div>

        {/* Item Section */}
        <div className="section">
          <label>
            Item type:
            <div className="dropdown-group">
              <select>
                <option>is</option>
                <option>is not</option>
              </select>
              <select>
                {itemTypes.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </select>
            </div>
          </label>

          <label>
            Collection:
            <div className="dropdown-group">
              <select>
                <option>is</option>
                <option>is not</option>
              </select>
              <select>
                {collectionOptions.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </select>
            </div>
          </label>

          <label>
            Status:
            <div className="dropdown-group">
              <select>
                <option>is</option>
                <option>is not</option>
              </select>
              <select>
                {statuses.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </select>
            </div>
          </label>
          <label>
            Lost:
            <div className="dropdown-group">
              <select>
                <option>is</option>
                <option>is not</option>
              </select>
              <select>
                {statuses.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </select>
            </div>
          </label>

          <label>
            Withdrawn:
            <div className="dropdown-group">
              <select>
                <option>is</option>
                <option>is not</option>
              </select>
              <select>
                <option value="">Withdrawn</option>
              </select>
            </div>
          </label>
        </div>

        <div className="section">
          <label>
            Barcode:
            <input type="text" placeholder="Enter barcode" />
          </label>
          <p className="help-text">
            You can use the following wildcard characters: % matches any number
            of characters, _ matches a single character.
          </p>
        </div>

        {/* Number and Date Section */}
        <div className="section">
          <div className="inner-section">
            <label>
              From call number:
              <input type="text" placeholder="Enter number" />
            </label>
            <label>
              To call number:
              <input type="text" placeholder="Enter number" />
            </label>
            <label>
              Damaged:
              <div className="radio-group">
                <label>
                  <input type="radio" name="damaged" /> Ignore
                </label>
                <label>
                  <input type="radio" name="damaged" /> Yes
                </label>
                <label>
                  <input type="radio" name="damaged" /> No
                </label>
              </div>
            </label>
            <label>
              Checkout count:
              <input type="number" min="0" />
            </label>
            <label>
              Last checkout date:
              <input type="date" />
            </label>
          </div>
        </div>

        {/* Output Section */}
        <div className="section output">
          <label>
            Output:
            <div>
              <label>
                <input type="radio" name="output" /> Screen
              </label>
              <label>
                <input type="radio" name="output" /> CSV
              </label>
              <label>
                <input type="radio" name="output" /> Barcodes file
              </label>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default ItemSearch;
