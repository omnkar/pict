import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./Circulation.css";
import InfoIcon from "@mui/icons-material/Info";
export function Circulation() {
  return (
    <>
      <div className="circulation">
        <ButtonGroup
          orientation="vertical"
          disableElevation
          variant="none"
          className="button-group"
        >
          <h3 className="inner-heading">Circulation</h3>
          <Button variant="outlined" className="nner-button">
            Circulation
          </Button>
          <Button variant="outlined" className="nner-button">
            Patrons
          </Button>
          <Button variant="outlined" className="nner-button">
            Advance Search
          </Button>
          <Button variant="outlined" className="nner-button">
            Lists
          </Button>
        </ButtonGroup>

        <ButtonGroup
          orientation="vertical"
          disableElevation
          variant="none"
          className="button-group"
        >
          <h3 className="inner-heading">Holds</h3>
          <Button variant="outlined" className="nner-button">
            <i className="fa fa-task"></i>Holds Queue
          </Button>
          <Button variant="outlined" className="nner-button">
            Hold to pull
          </Button>
          <Button variant="outlined" className="nner-button">
            Hold awaiting pickup
          </Button>
          <Button variant="outlined" className="nner-button">
            Hold ratios
          </Button>
        </ButtonGroup>

        <ButtonGroup
          orientation="vertical"
          disableElevation
          variant="none"
          className="button-group"
        >
          <h3 className="inner-heading">Transfers</h3>
          <Button variant="outlined" className="nner-button">
            Transfer
          </Button>
          <Button variant="outlined" className="nner-button">
            Transfer to recieve
          </Button>
        </ButtonGroup>
        <ButtonGroup
          orientation="vertical"
          disableElevation
          variant="none"
          className="button-group"
        >
          <h3 className="inner-heading">Overdues</h3>
          <Button variant="outlined" className="nner-button">
            Overdues
          </Button>
          <Button variant="outlined" className="nner-button">
            overdues with fines
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
}
