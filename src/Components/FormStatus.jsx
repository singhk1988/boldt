import React, { useState } from "react";
import logo from "./Logo.jpeg";
import { Step, Stepper } from "@cimpress/react-components";
import { css } from "emotion";
const checkmarkIcon = '✓';
const stepperStyle = css({
  height: "450px",
  padding: "0px 60px",
});
function FormStatus() {
  const [activeStep, setActiveStep] = useState("0");

  const setVerticalStep = (index) => setActiveStep(index);

  return (
    <div className="status">
      <img
        className="status-imgLogo"
        src={logo}
        alt="img"
        width="200"
        height="100"
      />
      <div className="status-stepper">
        <div className={stepperStyle}>
          <Stepper activeStep={activeStep} vertical >
            <Step onClick={setVerticalStep}>
              <div>Kontaktdaten</div>
            </Step>
            <Step onClick={setVerticalStep} icon={ activeStep > 1 ? checkmarkIcon : null}>
              <div>Personliche Daten</div>
            </Step>
            <Step onClick={setVerticalStep} tip="Lorem ipsum tipsum">
              <div>Beufliche Daten</div>
            </Step>
            <Step onClick={setVerticalStep}>
              <div>Steuerliche Daten und Bankverbindung</div>
            </Step>
            <Step onClick={setVerticalStep}>
              <div>Famillenstand</div>
            </Step>
            <Step onClick={setVerticalStep}>
              <div>Daten iherer Kinder</div>
            </Step>
            <Step onClick={setVerticalStep}>
              <div>Dankeschon</div>
            </Step>
          </Stepper>
        </div>
      </div>
    </div>
  );
}

export default FormStatus;
