import React from "react";
import ListTabs from "./ListTabs";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
const Lists = () => {
  return (
    <div className="p-5">
      <div className="list mb-4 p-2" style={{backgroundColor: "rgba(237, 224, 221)"}}>
        <Link to="/Lists/newlist" className=" p-2 ms-4 btn"  style={{ backgroundColor: "rgba(208, 110, 83)" }}>New List <AddIcon/></Link>
      </div>
      <h1>Lists</h1>
      <div className="list-container">
        <ListTabs />
      </div>
    </div>
  );
};

export default Lists;
