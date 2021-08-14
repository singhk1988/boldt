import React, { useState } from "react";
import logo from "./Logo.jpeg";
import { Step, Stepper } from "@cimpress/react-components";
import { css } from "emotion";
const checkmarkIcon = "✓";

const getIcon = (activeStep, stepIndext) => {
  return activeStep > stepIndext ? checkmarkIcon : null;
};
const stepperStyle = css({
  height: "450px",
  padding: "0px 60px",
});
function FormStatus({ activeStep, setVerticalStep }) {
  return (
    <div className="formStatus">
      <img
        className="formStatus-imgLogo"
        src={logo}
        alt="img"
        width="200"
        height="100"
      />
      <div className="formStatus-stepper">
        <div className={stepperStyle}>
          <Stepper activeStep={activeStep} vertical>
            <Step onClick={setVerticalStep} icon={getIcon(activeStep, 0)}>
              <div>Kontaktdaten</div>
            </Step>
            <Step onClick={setVerticalStep} icon={getIcon(activeStep, 1)}>
              <div>Personliche Daten</div>
            </Step>
            <Step
              onClick={setVerticalStep}
              tip="Lorem ipsum tipsum"
              icon={getIcon(activeStep, 2)}
            >
              <div>Beufliche Daten</div>
            </Step>
            <Step onClick={setVerticalStep} icon={getIcon(activeStep, 3)}>
              <div className="formStatus-text">Steuerliche Daten und Bankverbindung</div>
            </Step>
            <Step onClick={setVerticalStep} icon={getIcon(activeStep, 4)}>
              <div>Famillenstand</div>
            </Step>
            <Step onClick={setVerticalStep} icon={getIcon(activeStep, 5)}>
              <div>Daten iherer Kinder</div>
            </Step>
            <Step onClick={setVerticalStep} icon={getIcon(activeStep, 6)}>
              <div>Dankeschon</div>
            </Step>
          </Stepper>
        </div>
      </div>
    </div>
  );
}

export default FormStatus;
