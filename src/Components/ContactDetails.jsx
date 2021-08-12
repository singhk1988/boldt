import React, { useState } from "react";
import { TextField, Button } from "@cimpress/react-components";

function ContactDetails() {
  const [text, setText] = useState("");
  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div className="contact" align="left">
        <h1>
          <b className="title">Kontaktdaten</b>
        </h1>
        <div className='title-description'>Bitte tragen Sie hier Ihre Kontaktdaten ein.</div>
        <div className="margin-body">
          <div className="row">
            <div className="col-md-6">
              <TextField
                name="Vorname"
                label="Vorname"
                value={text}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col-md-6">
              {" "}
              <TextField
                name="Nachname"
                label="Nachname"
                value={text}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {" "}
              <TextField
                name="Vorname"
                label="Straße und Hausnummer"
                value={text}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col-md-6 postal">
              <TextField
                className="postal-code"
                name="PLZ"
                label="PLZ"
                value={text}
                onChange={(e) => onInputChange(e)}
              />

              <TextField
                className="postal-location"
                name="Ort"
                label="Ort"
                value={text}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <TextField
                name="Telefon"
                label="Telefon"
                value={text}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col-md-6">
              <TextField
                name="Telefax"
                label="Telefax"
                value={text}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <TextField
                name="Telefon"
                label="E-Mail Adresse"
                value={text}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
