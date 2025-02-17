import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import "./list.css";
const NewList = () => {
  return (
    <>
      <h3>Create a New List</h3>
      <div class="form-container">
        <div className="">
          <form className="innercontainer">
            <div class="mb-3">
              <label for="name" class="form-label">
                Name:
              </label>
              <input
                type="text"
                id="name"
                class="form-control"
                placeholder="Required"
              />
              <span class="required-label">Required</span>
            </div>
            <div class="mb-3">
              <label for="sortList" class="form-label">
                Sort this list by:
              </label>
              <select id="sortList" class="form-select">
                <option>Author</option>
                <option>Copyrightdate</option>
                <option value="">Call Number</option>
                <option value="">Date added</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="category" class="form-label">
                Category:
              </label>
              <select id="category" class="form-select">
                <option>Private</option>
                <option>Public</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="allowChanges" class="form-label">
                Allow changes to contents from:
              </label>
              <select id="allowChanges" class="form-select">
                <option value="">Nobody</option>
                <option>Owner only</option>
                <option>Anyone</option>
              </select>
            </div>

            <div class="d-flex justify-content-end">
              <button type="button" className="btn btn-primary me-2" style={{backgroundColor: "rgba(208, 110, 83)"}}>
                Save
              </button>
              <button type="button" className="btn btn-secondary" >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewList;
