import React, { useState } from "react";
import { Button } from "@cimpress/react-components";

import FormStatus from "./FormStatus";
import ContactDetails from "./ContactDetails";
import PersonalData from "./PersonalData";
import CompanyData from "./CompanyData";
const maxStep = 8;

function Home() {
  const [activeStep, setActiveStep] = useState(1);
  const setVerticalStep = (index) => setActiveStep(index);

  let body = "";

  if (activeStep === 0) {
    body = <ContactDetails />;
  } else if (activeStep === 1) {
    body = <PersonalData />;
  } else if (activeStep === 2) {
    body = <CompanyData />;
  }

  const onClickContinue = () => {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep < 8 ? nextStep : 7);
  };

  const onClickReturn = () => {
    const prevStep = activeStep - 1;
    setActiveStep(prevStep > 0 ? prevStep : 0);
  };

  return (
    <div className="home">
      <div className="home-left">
        <FormStatus activeStep={activeStep} setVerticalStep={setVerticalStep} />
      </div>
      <div className="home-right">
        <div className="home-save" align="right">
          <Button style={{ background: "#5DA1FA", border: "1px solid #5DA1FA" }} variant="primary">
            Unterbrechen & Specichern
          </Button>
        </div>
        <div align="left" className="cotainner">
          {body}
          <div className="actions">
            <Button onClick={onClickReturn}>Return</Button>
            <Button
              style={{
                marginLeft: "15px",
                background: "#5DA1FA",
                border: "1px solid #5DA1FA",
              }}
              onClick={onClickContinue}
              variant="primary"
            >
              Continue
            </Button>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Home;
