import React, { useState, useRef, useEffect } from "react";
import { Button } from "@cimpress/react-components";

import FormStatus from "./FormStatus";
import ContactDetails from "./ContactDetails";
import PersonalData from "./PersonalData";
import CompanyData from "./CompanyData";
const maxStep = 8;

function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const setVerticalStep = (index) => setActiveStep(index);
  const divRef = useRef(null);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    console.log("windowHeight", windowHeight);
    if (windowHeight) {
      divRef.current.style.height = `${windowHeight}px`;
    }
  });
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
    <div className="home" ref={divRef}>
      <div className="home-left">
        <FormStatus activeStep={activeStep} setVerticalStep={setVerticalStep} />
      </div>
      <div className="home-right">
        <div className="home-save" align="right">
          <Button style={{ background: "#5DA1FA",  border: "1px solid #5DA1FA"}} className="home-button" variant="primary">
            Unterbrechen & Specichern
          </Button>
        </div>
        <div align="left" className="cotainner">
          {body}
          <br />
          <div className="actions">
            <Button onClick={onClickReturn}>Return</Button>
            <Button
              className="home-continue-button"
              style={{
                marginLeft: "15px",
                background: "#2C88FF",
                border: "1px solid #2C88FF",
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
