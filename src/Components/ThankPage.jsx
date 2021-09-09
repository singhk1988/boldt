import React from "react";

import "../Styles/ThankPage.css";

import { TextField, Radio, RadioGroup } from "@cimpress/react-components";

const ThankPage = () => {
  return (
    <div>
      <div className="companyData" align="left">
        <h1>
          <b className="title">Vielen Dank! </b>
        </h1>
        <div className="title-description">
          Besteht im nächsten Vierteljahr steuerlicher Gesprächsbedarf?
        </div>
        <div className="margin-body">
          <RadioGroup onChange={() => {}} inline name="radioTest">
            <Radio label="Ja" value="Ja" />
            <Radio label="Nein" value="Nein" />
          </RadioGroup>
          <div className="row">
            <div className="col-md-6">
              <TextField label="Terminwunsch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankPage;
