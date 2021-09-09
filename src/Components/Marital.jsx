import React, { useState } from "react";
import {
  Dropdown,
  Radio,
  RadioGroup,
  TextField,
} from "@cimpress/react-components";

function Marital() {
  return (
    <div>
      <div className="personalData" align="left">
        <h1>
          <b className="title">Familienstand</b>
        </h1>
        <div className="title-description">
          Bitte tragen Sie hier Ihre familiären Daten ein.
        </div>

        <div className="margin-body">
          <div className="row">
            <div className="col-md-6">
              <Dropdown title="Familienstand">
                <button>Married</button>
                <button>UnMarried</button>
              </Dropdown>
            </div>

            <div className="col-md-6">
            <h4>Leben Sie in einer Gütergemeinschaft?</h4>
            <RadioGroup
           
          inline
          
          name="radioTest"
         
        >
           <Radio label="Ja" value="Ja" />
                <Radio label="Nien" value="Nien" />
        </RadioGroup>
            </div>
          </div>
        </div>

        <div className="margin-body">
          <h3>
            <b className="title">Daten zum Ehegatten:in</b>
          </h3>
          <div className="row">
            <div className="col-md-4">
              <TextField type="text" id="pad" placeholder="Vorname" />
            </div>
            <div className="col-md-4">
              <TextField type="text" id="pad" placeholder="Nachname" />
            </div>
            <div className="col-md-4">
              <TextField id="pad" type="text" placeholder="Geburtsdatum" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <TextField type="text" id="pad" placeholder="Geburtsort" />
            </div>
            <div className="col-md-4">
              <TextField type="text" id="pad" placeholder="Geburtsname" />
            </div>
            <div className="col-md-4">
              <TextField id="pad" type="text" placeholder="Geburtsland" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <TextField type="text" id="pad" placeholder="Staatsangehörigkeit" />
          </div>
          <div className="col-md-4">
            <TextField type="text" id="pad" placeholder="Beruf" />
          </div>
          <div className="col-md-4">
            <TextField id="pad" type="text" placeholder="Arbeitgeber" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <TextField
              type="text"
              id="pad"
              placeholder="Rentenversicherungsnummer"
            />
          </div>
          <div className="col-md-4">
            <TextField
              type="text"
              id="pad"
              placeholder="Rentenversicherungsträger"
            />
          </div>
          <div className="col-md-4">
            <TextField id="pad" type="text" placeholder="eTIN" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <TextField
              type="text"
              id="pad"
              placeholder="Identifikationsnummer"
            />
          </div>
          <div className="col-md-4">
            <TextField type="text" id="pad" placeholder="Religion" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Marital;
