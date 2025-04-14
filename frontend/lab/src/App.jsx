import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Lists from "./components/Lists/Lists";
import NewList from "./components/Lists/NewList";
import { Circulation } from "./components/Circulation/Circulation";
import Tools from "./components/Tools/Tools";
import Patron from "./components/Patrons/Patrons";
import Reports from "./components/Reports/Reports";
import AdvanceSearch from "./components/Advanced search/AdvanceSearch";
import ItemsSearch from "./components/Item Search/ItemSearch";
import Login from "./components/Login";
import Navbar from "./Navbar";
import LibraryAdmin from "./components/Searching/LibraryAdmin";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <BrowserRouter>
        {isAuthenticated && <Navbar />}
        <Routes>
          {!isAuthenticated ? (
            <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/lists" element={<Lists />} />
              <Route path="/lists/newlist" element={<NewList />} />
              <Route path="/circulation" element={<Circulation />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/patrons" element={<Patron />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/advancedsearch" element={<AdvanceSearch />} />
              <Route path="/itemsearch" element={<ItemsSearch />} />
              <Route path="/search" element={<LibraryAdmin/>} />
              <Route path="*" element={<Navigate to="/" />} />
             
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
