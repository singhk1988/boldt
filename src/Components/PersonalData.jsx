import React, { useState } from "react";
import { TextField, Button } from "@cimpress/react-components";

function PersonalData() {
  const [text, setText] = useState("");
  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="personalData" align="left">
      <h1>
        <b className="title">Persönliche Daten</b>
      </h1>
      <div className="title-description">
        Bitte tragen Sie hier Ihre Kontaktdaten ein.
      </div>
      <div className="margin-body">
        <div className="row">
          <div className="col-md-6">
            <TextField
              name="Geburtsdatum"
              label="Geburtsdatum"
              value={text}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="col-md-6">
            {" "}
            <TextField
              name="Geburtsname"
              label="Geburtsname"
              value={text}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {" "}
            <TextField
              name="Geburtsort"
              label="Geburtsort"
              value={text}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="col-md-6">
            <TextField
              name="Geburtsland"
              label="Geburtsland"
              value={text}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <TextField
              name="Religion"
              label="Religion"
              value={text}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="col-md-6">
            <TextField
              name="Staatsangehörigkeit"
              label="Staatsangehörigkeit"
              value={text}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <TextField
              name="Nationalität"
              label="Nationalität"
              value={text}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
}

export default PersonalData;
