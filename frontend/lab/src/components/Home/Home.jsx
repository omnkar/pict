// Home.jsx
import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import InfoIcon from "@mui/icons-material/Info";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DeleteIcon from "@mui/icons-material/Delete";
import BuildIcon from "@mui/icons-material/Build";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import LabelIcon from "@mui/icons-material/Label";
import ListAltIcon from "@mui/icons-material/ListAlt";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import RedeemIcon from "@mui/icons-material/Redeem";
import PieChartIcon from "@mui/icons-material/PieChart";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <ButtonGroup
        orientation="vertical"
        disableElevation
        variant="none"
        className="button-group mt-5"
      >
        <Link to="/circulation">
          <Button
            variant="outlined"
            className="inner-button"
            startIcon={<SyncAltIcon />}
          >
            Circulation
          </Button>
        </Link>
        <Link to="/patrons">
          <Button
            variant="outlined"
            className="inner-button"
            startIcon={<DeleteIcon />}
          >
            Patrons
          </Button>
        </Link>
        <Link to="/advancedsearch">
          <Button
            variant="outlined"
            className="inner-button"
            startIcon={<AccountBoxIcon />}
          >
            Advance Search
          </Button>
        </Link>
        <Link to="/lists">
          <Button
            variant="outlined"
            className="inner-button"
            startIcon={<ListAltIcon />}
          >
            Lists
          </Button>
        </Link>
        <Button
          variant="outlined"
          className="inner-button"
          startIcon={<InsertLinkIcon />}
        >
          Authorities
        </Button>
      </ButtonGroup>

      <ButtonGroup
        orientation="vertical"
        className="button-group"
        variant="none"
        aria-label="Basic button group"
      >
        <Button
          variant="outlined"
          className="inner-button"
          startIcon={<LabelIcon />}
        >
          Cataloging
        </Button>
        <Button
          variant="outlined"
          className="inner-button"
          startIcon={<NewspaperIcon />}
        >
          Serials
        </Button>
        <Button
          variant="outlined"
          className="inner-button"
          startIcon={<RedeemIcon />}
        >
          Acquisitions
        </Button>
        <Link to="/reports">
          <Button
            variant="outlined"
            className="inner-button"
            startIcon={<PieChartIcon />}
          >
            Reports
          </Button>
        </Link>
        <Link to="/tools">
          <Button
            variant="outlined"
            className="inner-button"
            startIcon={<BuildIcon />}
          >
            Tools
          </Button>
        </Link>
        <Button
          variant="outlined"
          className="inner-button"
          startIcon={<SettingsSuggestIcon />}
        >
          Administration
        </Button>
        <Button
          variant="outlined"
          className="inner-button"
          startIcon={<InfoIcon />}
        >
          About System
        </Button>
      </ButtonGroup>
    </>
  );
}

export default Home;
