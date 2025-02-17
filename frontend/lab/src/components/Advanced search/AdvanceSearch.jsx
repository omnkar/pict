import React from "react";
import "./AdvanceSearch.css";
import { Link } from "react-router-dom";

const AdvanceSearch = () => {
  return (
    <div className="advance-search">
      <div className="whole-code">
        <div className="advance-search-container">
          <h2 className="title">Advanced Search</h2>
          <Link to="/itemsearch">
            <a className="item-search-link">
              Go to item search
            </a>
          </Link>

          <div className="action-buttons">
            <button className="search-button">Search</button>
            <button className="more-options-button">More options</button>
            <button className="clear-fields-button">Clear fields</button>
          </div>

          <div className="search-section">
            <h3 className="search-label">Search for</h3>
            <div className="search-inputs">
              <div className="search-row">
                <select className="dropdown">
                  <option value="keyword">Keyword</option>
                  <option value="keyword-as-phrase">Keyword as phrase</option>
                  <option value="author">Author</option>
                  <option value="author-as-phrase">Author as phrase</option>
                  <option value="corporate-name">Corporate name</option>
                  <option value="corporate-name-as-phrase">
                    Corporate name as phrase
                  </option>
                  <option value="conference-name">Conference name</option>
                  <option value="conference-name-as-phrase">
                    Conference name as phrase
                  </option>
                  <option value="personal-name">Personal name</option>
                  <option value="personal-name-as-phrase">
                    Personal name as phrase
                  </option>
                  <option value="title">Title</option>
                  <option value="title-as-phrase">Title as phrase</option>
                  <option value="series-title">Series title</option>
                  <option value="subject">Subject</option>
                  <option value="subject-as-phrase">Subject as phrase</option>
                  <option value="barcode">Barcode</option>
                  <option value="shelving-location">Shelving location</option>
                  <option value="standard-number">Standard number</option>
                  <option value="isbn">ISBN</option>
                  <option value="issn">ISSN</option>
                  <option value="call-number">Call number</option>
                  <option value="language">Language</option>
                  <option value="notes-comments">Notes/Comments</option>
                  <option value="curriculum">Curriculum</option>
                  <option value="publisher">Publisher</option>
                  <option value="publisher-location">Publisher location</option>
                  <option value="publication-date">
                    Publication date (yyyy-yyyy)
                  </option>
                  <option value="acquisition-date">
                    Acquisition date (yyyy-mm-dd)
                  </option>
                </select>
                <input
                  type="text"
                  className="input-box"
                  placeholder="Enter keyword"
                />
              </div>

              <div className="search-row">
                <select className="dropdown">
                  <option value="keyword">Keyword</option>
                  <option value="keyword-as-phrase">Keyword as phrase</option>
                  <option value="author">Author</option>
                  <option value="author-as-phrase">Author as phrase</option>
                  <option value="corporate-name">Corporate name</option>
                  <option value="corporate-name-as-phrase">
                    Corporate name as phrase
                  </option>
                  <option value="conference-name">Conference name</option>
                  <option value="conference-name-as-phrase">
                    Conference name as phrase
                  </option>
                  <option value="personal-name">Personal name</option>
                  <option value="personal-name-as-phrase">
                    Personal name as phrase
                  </option>
                  <option value="title">Title</option>
                  <option value="title-as-phrase">Title as phrase</option>
                  <option value="series-title">Series title</option>
                  <option value="subject">Subject</option>
                  <option value="subject-as-phrase">Subject as phrase</option>
                  <option value="barcode">Barcode</option>
                  <option value="shelving-location">Shelving location</option>
                  <option value="standard-number">Standard number</option>
                  <option value="isbn">ISBN</option>
                  <option value="issn">ISSN</option>
                  <option value="call-number">Call number</option>
                  <option value="language">Language</option>
                  <option value="notes-comments">Notes/Comments</option>
                  <option value="curriculum">Curriculum</option>
                  <option value="publisher">Publisher</option>
                  <option value="publisher-location">Publisher location</option>
                  <option value="publication-date">
                    Publication date (yyyy-yyyy)
                  </option>
                  <option value="acquisition-date">
                    Acquisition date (yyyy-mm-dd)
                  </option>
                </select>
                <input
                  type="text"
                  className="input-box"
                  placeholder="Enter keyword"
                />
              </div>

              <div className="search-row">
                <select className="dropdown">
                  <option value="keyword">Keyword</option>
                  <option value="keyword-as-phrase">Keyword as phrase</option>
                  <option value="author">Author</option>
                  <option value="author-as-phrase">Author as phrase</option>
                  <option value="corporate-name">Corporate name</option>
                  <option value="corporate-name-as-phrase">
                    Corporate name as phrase
                  </option>
                  <option value="conference-name">Conference name</option>
                  <option value="conference-name-as-phrase">
                    Conference name as phrase
                  </option>
                  <option value="personal-name">Personal name</option>
                  <option value="personal-name-as-phrase">
                    Personal name as phrase
                  </option>
                  <option value="title">Title</option>
                  <option value="title-as-phrase">Title as phrase</option>
                  <option value="series-title">Series title</option>
                  <option value="subject">Subject</option>
                  <option value="subject-as-phrase">Subject as phrase</option>
                  <option value="barcode">Barcode</option>
                  <option value="shelving-location">Shelving location</option>
                  <option value="standard-number">Standard number</option>
                  <option value="isbn">ISBN</option>
                  <option value="issn">ISSN</option>
                  <option value="call-number">Call number</option>
                  <option value="language">Language</option>
                  <option value="notes-comments">Notes/Comments</option>
                  <option value="curriculum">Curriculum</option>
                  <option value="publisher">Publisher</option>
                  <option value="publisher-location">Publisher location</option>
                  <option value="publication-date">
                    Publication date (yyyy-yyyy)
                  </option>
                  <option value="acquisition-date">
                    Acquisition date (yyyy-mm-dd)
                  </option>
                </select>
                <input
                  type="text"
                  className="input-box"
                  placeholder="Enter keyword"
                />
              </div>
            </div>
          </div>

          <div className="item-type-section">
            <h3 className="item-type-label">Item type</h3>
            <div className="checkbox-container">
              <label className="checkbox-item">
                <input type="checkbox" /> Book
              </label>
              <label className="checkbox-item">
                <input type="checkbox" /> Book Bank
              </label>
              <label className="checkbox-item">
                <input type="checkbox" /> Bound Volume
              </label>
              <label className="checkbox-item">
                <input type="checkbox" /> Donated Book
              </label>
              <label className="checkbox-item">
                <input type="checkbox" /> Grant Books
              </label>
              <label className="checkbox-item">
                <input type="checkbox" /> PICT Book Bank
              </label>
              <label className="checkbox-item">
                <input type="checkbox" /> Reference Books
              </label>
              <label className="checkbox-item">
                <input type="checkbox" /> E-BOOK
              </label>
            </div>
          </div>

          <div className="container">
            {/* Subtype Limits Section */}
            <div className="section">
              <h3>Subtype limits</h3>
              <div className="grid">
                {/* Audience Dropdown */}
                <select>
                  <option value="">Audience</option>
                  <option value="preschool">PreSchool</option>
                  <option value="primary">Primary</option>
                  <option value="preadolescent">Preadolescent</option>
                  <option value="adult">Adult</option>
                  <option value="specialist">Specialist</option>
                  <option value="general">General</option>
                  <option value="juvenile">Juvenile</option>
                </select>

                {/* Any Content Dropdown */}
                <select>
                  <option value="">Any content</option>
                  <option value="fiction">Fiction</option>
                  <option value="non-fiction">Non-Fiction</option>
                  <option value="biography">Biography</option>
                  <option value="musical-recording">Musical Recording</option>
                  <option value="non-musical-recording">
                    Non-Musical Recording
                  </option>
                </select>

                {/* Any Format Dropdown */}
                <select>
                  <option value="">Any format</option>
                  <option value="regular-print">Regular Print</option>
                  <option value="large-print">Large Print</option>
                  <option value="braille">Braille</option>
                  <option value="cd-audio">CD Audio</option>
                  <option value="cd-software">CD Software</option>
                  <option value="dvd-video">DVD Video</option>
                </select>

                {/* Additional Content Types Dropdown */}
                <select>
                  <option value="">Additional content types</option>
                  <option value="abstracts">Abstracts/Summarize</option>
                  <option value="catalogs">Catalogs</option>
                  <option value="dictionaries">Dictionaries</option>
                  <option value="bibliographics">Bibliographics</option>
                  <option value="encyclopedias">Encyclopedias</option>
                  <option value="handbooks">Handbooks</option>
                  <option value="legal-articles">Legal Articles</option>
                  <option value="indexes">Indexes</option>
                  <option value="patent-documents">Patent Documents</option>
                  <option value="discographics">Discographics</option>
                  <option value="thesis">Thesis</option>
                  <option value="survey">Survey</option>
                  <option value="review">Review</option>
                  <option value="programmed-texts">Programmed Texts</option>
                  <option value="filmographics">Filmographics</option>
                  <option value="directories">Directories</option>
                  <option value="statistics">Statistics</option>
                  <option value="technical-reports">Technical Reports</option>
                  <option value="legal-cases">
                    Legal Cases and Case Nodes
                  </option>
                  <option value="law-reports">Law Reports and Digests</option>
                  <option value="treaties">Treaties</option>
                </select>
              </div>
            </div>

            {/* Location and Availability Section */}
            <div className="section">
              <h3>Location and availability</h3>
              <label>
                <input type="checkbox" /> Only items currently available
              </label>
              <label className="block">
                Individual libraries:
                <select>
                  <option value="">All libraries</option>
                  <option value="library1">Library 1</option>
                  <option value="library2">Library 2</option>
                  <option value="library3">Library 3</option>
                </select>
              </label>
            </div>

            {/* Sorting Section */}
            <div className="section">
              <h3>Sorting</h3>
              <label className="block">
                Sort by:
                <select>
                  <option value="">Relevance</option>
                  <optgroup label="Popularity">
                    <option value="popularity-asc">
                      Popularity (Least to Most)
                    </option>
                    <option value="popularity-desc">
                      Popularity (Most to Least)
                    </option>
                  </optgroup>
                  <optgroup label="Author">
                    <option value="author-asc">Author (A-Z)</option>
                    <option value="author-desc">Author (Z-A)</option>
                  </optgroup>
                  <optgroup label="Call Number">
                    <option value="callnumber-asc">
                      Call Number (0-9 to A-Z)
                    </option>
                    <option value="callnumber-desc">
                      Call Number (Z-A to 9-0)
                    </option>
                  </optgroup>
                  <optgroup label="Dates">
                    <option value="pubdate-new-old">
                      Publication/Copyright Date: Newest to Oldest
                    </option>
                    <option value="pubdate-old-new">
                      Publication/Copyright Date: Oldest to Newest
                    </option>
                    <option value="acqdate-new-old">
                      Acquisition Date: Newest to Oldest
                    </option>
                    <option value="acqdate-old-new">
                      Acquisition Date: Oldest to Newest
                    </option>
                  </optgroup>
                  <optgroup label="Title">
                    <option value="title-asc">Title (A-Z)</option>
                    <option value="title-desc">Title (Z-A)</option>
                  </optgroup>
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceSearch;
