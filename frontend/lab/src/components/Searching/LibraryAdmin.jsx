import React, { useState } from "react";

const LibraryAdmin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState(null);

  // Mock data (Replace this with API call)
  const mockUserData = {
    name: "Aditi Thorat",
    cardNumber: "C2K2216",
    borrowNumber: "8844",
    category: "STUDENT UG (STUUG)",
    registrationDate: "28/11/2022",
    expirationDate: "30/06/2026",
    library: "Pune Institute of Computer Technology",
    username: "C2K2216",
    phone: "9937694942",
    email: "aditi.thorat0204@gmail.com",
    gender: "Female",
    branch: "FE COMPUTER",
    rollNo: "1063",
    checkouts: 0,
    holds: 0,
  };

  const handleSearch = () => {
    // Simulate fetching data from API
    if (searchTerm.toLowerCase() === "aditi thorat") {
      setUserData(mockUserData);
    } else {
      setUserData(null);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Library Admin Panel</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      {userData && (
        <div className="card">
          <div className="card-header bg-primary text-white">
            User Details
          </div>
          <div className="card-body">
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Card Number:</strong> {userData.cardNumber}</p>
            <p><strong>Borrower Number:</strong> {userData.borrowNumber}</p>
            <p><strong>Category:</strong> {userData.category}</p>
            <p><strong>Registration Date:</strong> {userData.registrationDate}</p>
            <p><strong>Expiration Date:</strong> {userData.expirationDate}</p>
            <p><strong>Library:</strong> {userData.library}</p>
            <p><strong>Username:</strong> {userData.username}</p>
            <p><strong>Phone:</strong> {userData.phone}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Gender:</strong> {userData.gender}</p>
            <p><strong>Branch:</strong> {userData.branch}</p>
            <p><strong>Roll No:</strong> {userData.rollNo}</p>
            <p><strong>Checkouts:</strong> {userData.checkouts}</p>
            <p><strong>Holds:</strong> {userData.holds}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LibraryAdmin;
