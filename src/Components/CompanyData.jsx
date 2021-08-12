import React, { useState } from "react";
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
} from "@cimpress/react-components";

function CompanyData() {
  const [text, setText] = useState("");
  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="companyData" align="left">
      <h1>
        <b className="title">Berufliche steuerliche Daten</b>
      </h1>
      <div className="title-description">
        Bitte tragen Sie hier Ihre Kontaktdaten ein.
      </div>
      <div className="margin-body">
        <div className="company-radio">
          In welchem Arbeitsverhältnis befinden Sie sich aktuell?
        </div>
        <RadioGroup
          onChange={() => {}}
          inline
          defaultSelected={"Arbeitnehmer"}
          name="radioTest"
        >
          <Radio label="Arbeitnehmer" value="Arbeitnehmer" />
          <Radio label="Arbeitgeber" value="Arbeitgeber" />
        </RadioGroup>
        <div className="row">
          <div className="col-md-6">
            <TextField
              name="Geschäftsgründungsdatum"
              label="Geschäftsgründungsdatum"
              value={text}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="col-md-6">
            {" "}
            <TextField
              name="Firmensitz"
              label="Firmensitz"
              value={text}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {" "}
            <TextField
              name="Ust.-ID"
              label="Straße und Hausnummer"
              value={text}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="col-md-6">
            <TextField
              className="postal-code"
              name="Homepage"
              label="Homepage"
              value={text}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <TextField
              name="Steuernummer"
              label="Steuernummer"
              value={text}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="col-md-6">
            <TextField
              name="Finanzamt"
              label="Finanzamt"
              value={text}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <TextField
              name="Konto"
              label="Konto"
              value={text}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="col-md-6">
            <TextField
              name="BLZ"
              label="BLZ"
              value={text}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <TextField
              name="Bank"
              label="Bank"
              value={text}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="col-md-6">
            <TextField
              name="IBAN"
              label="IBAN"
              value={text}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <TextField
              name="BIC"
              label="BIC"
              value={text}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyData;
