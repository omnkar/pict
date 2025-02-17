import React from "react";
import "./reports.css";
const Reports = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="box">
            <h5 className="fs-4">Guided reports</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#">Create guided report</a>
              </li>
              <li>
                <a href="#">Create from SQL</a>
              </li>
              <li>
                <a href="#">Use saved</a>
              </li>
            </ul>
            <form class="mt-3">
              <div class="mb-3">
                <label for="search" class="form-label">
                  Search by keyword:
                </label>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    id="search"
                    placeholder=""
                  />
                  <button
                    type="button"
                    class="btn btn-secondary"
                    style={{ backgroundColor: "rgba(208, 110, 83)" }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="listbox">
            <div class="list-section">
              <h6 className="fs-4">Reports dictionary</h6>
              <ul class="list-unstyled">
                <li>
                  <a href="#">View dictionary</a>
                </li>
              </ul>
            </div>

            <div class="list-section">
              <h6 className="fs-4">Statistics wizards</h6>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Acquisitions</a>
                </li>
                <li>
                  <a href="#">Patrons</a>
                </li>
                <li>
                  <a href="#">Catalog</a>
                </li>
                <li>
                  <a href="#">Circulation</a>
                </li>
                <li>
                  <a href="#">Serials</a>
                </li>
                <li>
                  <a href="#">Cash register</a>
                </li>
                <li>
                  <a href="#">Holds</a>
                </li>
              </ul>
            </div>

            <div class="list-section">
              <h6 className="fs-4">Report plugins</h6>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Report plugins</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="list-section">
            <h6 className="fs-4">Top lists</h6>
            <ul class="list-unstyled">
              <li>
                <a href="#">Patrons with the most checkouts</a>
              </li>
              <li>
                <a href="#">Most-circulated items</a>
              </li>
            </ul>
          </div>

          <div class="list-section">
            <h6 className="fs-4">Inactive</h6>
            <ul class="list-unstyled">
              <li>
                <a href="#">Patrons who haven't checked out</a>
              </li>
              <li>
                <a href="#">Items with no checkouts</a>
              </li>
            </ul>
          </div>

          <div class="list-section">
            <h6 className="fs-4">Other</h6>
            <ul class="list-unstyled">
              <li>
                <a href="#">Items lost</a>
              </li>
              <li>
                <a href="#">Orders by fund</a>
              </li>
              <li>
                <a href="#">Catalog by item type</a>
              </li>
              <li>
                <a href="#">Average loan time</a>
              </li>
              <li>
                <a href="#">Koha database schema</a>
              </li>
              <li>
                <a href="#">Koha reports library</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
