import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Lists from "./components/Lists/Lists";
import NewList from "./components/Lists/NewList";
import { Circulation } from "./components/Circulation/Circulation";
import Tools from "./components/Tools/Tools";
import Patron from "./components/Patrons/Patrons";
import Reports from "./components/Reports/Reports";
import AdvanceSearch from "./components/Advanced search/AdvanceSearch";
import ItemsSearch from "./components/Item Search/ItemSearch";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lists" element={<Lists/>} />
          <Route path="/lists/newlist" element={<NewList/>} />
          <Route path="/circulation" element={<Circulation/>} />
          <Route path="/tools" element={<Tools/>} />
          <Route path="/patrons" element={<Patron />} />
          <Route path="/reports" element={<Reports/>}/>
          <Route path="/advancedsearch" element={<AdvanceSearch/>}/>
          <Route path="/itemsearch" element={<ItemsSearch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
