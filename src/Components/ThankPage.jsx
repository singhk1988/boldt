import React, { useState } from "react";

import "../Styles/ThankPage.css";

import { TextField, Radio, RadioGroup } from "@cimpress/react-components";

const ThankPage = () => {
  const [nextSession, setNextSession] = useState("Ja");

  const onChangeChoice = (e, value) => {
    setNextSession(value);
  };
  return (
    <div>
      <div className="companyData" align="left">
        <h1>
          <b className="title">Vielen Dank! </b>
        </h1>
        <div className="title-description">
          Besteht im nächsten Vierteljahr steuerlicher Gesprächsbedarf?
        </div>
        {/* <div className="margin-body"> */}
        <RadioGroup
          onChange={onChangeChoice}
          defaultSelected={nextSession}
          inline
          name="radioTest"
          style={{ marginBottom: "30px" }}
        >
          <Radio label="Ja" value="Ja" />
          <Radio label="Nein" value="Nein" />
        </RadioGroup>
        <div className="row">
          <div className="col-md-6">
            <TextField label="Terminwunsch" />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ThankPage;
