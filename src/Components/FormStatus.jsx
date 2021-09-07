import React, { useState } from "react";
import logo from "./Logo.jpeg";
import { Stepper } from "@cimpress/react-components";
import { css } from "emotion";
import { Steps } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { ReactComponent as Circle } from "../assets/svg/circle.svg";
const checkmarkIcon = "✓";
const { Step } = Steps;
const getIcon = (activeStep, stepIndext) => {
  return activeStep > stepIndext ? <CheckCircleTwoTone /> : null;
};
const stepperStyle = css({
  height: "350px",
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
          {/* <Steps activeStep={activeStep} direction="vertical">
            <Step onClick={setVerticalStep} icon={getIcon(activeStep, 0)}>
              <div>Kontaktdaten</div>
            </Step>
            <Step onClick={setVerticalStep} icon={getIcon(activeStep, 1)}>
              <div>Persönliche Daten</div>
            </Step>
            <Step
              onClick={setVerticalStep}
              tip="Lorem ipsum tipsum"
              icon={getIcon(activeStep, 2)}
            >
              <div>Berufliche Daten</div>
            </Step>
            <Step onClick={setVerticalStep} icon={getIcon(activeStep, 3)}>
              <div className="formStatus-text">
                Steuerliche Daten und Bankverbindung
              </div>
            </Step>
            <Step onClick={setVerticalStep} icon={getIcon(activeStep, 4)}>
              <div>Familienstand</div>
            </Step>
            <Step onClick={setVerticalStep} icon={getIcon(activeStep, 5)}>
              <div>Daten Ihrer Kinder</div>
            </Step>
            <Step onClick={setVerticalStep} icon={getIcon(activeStep, 6)}>
              <div>Dankeschön</div>
            </Step>
          </Steps> */}

          <Steps direction="vertical" current={activeStep} size="small">
            <Step
              title="Kontaktdaten"
              icon={getIcon(activeStep, 0)}
              onClick={setVerticalStep}
            />
            <Step
              title="Persönliche Daten"
              onClick={setVerticalStep}
              icon={getIcon(activeStep, 1)}
            />
            <Step
              onClick={setVerticalStep}
              title="Berufliche Daten"
              tip="Lorem ipsum tipsum"
              icon={getIcon(activeStep, 2)}
            />
            <Step
              title="Steuerliche Daten und Bankverbindung"
              onClick={setVerticalStep}
              icon={getIcon(activeStep, 3)}
            />

            <Step
              title="Familienstand"
              onClick={setVerticalStep}
              icon={getIcon(activeStep, 4)}
            />
            <Step
              title="Daten Ihrer Kinder"
              onClick={setVerticalStep}
              icon={getIcon(activeStep, 5)}
            />
            <Step
              title="Dankeschön"
              onClick={setVerticalStep}
              icon={getIcon(activeStep, 6)}
            />
          </Steps>
        </div>
      </div>
    </div>
  );
}

export default FormStatus;
