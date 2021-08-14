import React, { useState } from "react";
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  Tooltip,
} from "@cimpress/react-components";
import DatePicker from '@cimpress/react-components/lib/DatePicker';
import { MdInfo } from "react-icons/md";

function CompanyData() {
  
  const [values, setValues] = useState({
    geschäftsgründungsdatum: "",
    firmensitz: "",
    ustID: "DE",
    homepage: "",
    steuernummer: "",
    finanzamt: "",
    konto: "",
    blz: "",
    bank: "",
    iban: "",
    bic: "",
  });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "iban"){
      console.log("inside iban");
      if(/[A-Z]{2}\d{6}/.test(value)){
        console.log("condition working");
      }
    }
    setValues({
      ...values,
      [name]: value,
    });
  };
  const onClickShow = () => {
    setShow(!show);
  };

  return (
    <div className="companyData" align="left">
      <h1>
        <b className="title">Berufliche steuerliche Daten</b>
      </h1>
      <div className="title-description">
        Bitte tragen Sie hier Ihre Kontaktdaten ein.
      </div>
      <div className="margin-body">
        <div className="company-radio">
          In welchem Arbeitsverhältnis befinden Sie sich aktuell?
        </div>
        <RadioGroup
          onChange={() => {}}
          inline
          defaultSelected={"Arbeitnehmer"}
          name="radioTest"
        >
          <Radio label="Arbeitnehmer" value="Arbeitnehmer" />
          <Radio label="Arbeitgeber" value="Arbeitgeber" />
        </RadioGroup>
        <div className="row">
          <div className="col-md-6">
          <DatePicker
            dateFormat="DD/MM/YYYY"
              placeholder="geschäftsgründungsdatum"
              className="form-textbox"
              value={values.geschäftsgründungsdatum}
              onChange={d => {setValues({...values, geschäftsgründungsdatum: d});}}
            />
          </div>
          <div className="col-md-6">
            {" "}
            <TextField
              name="firmensitz"
              label="Firmensitz"
              value={values.firmensitz.replace(/[^a-zA-Z_ ]/gi, "")}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {" "}
            <TextField
              name="ustID"
              label="Ust.-ID"
              maxLength='11'
              value={values.ustID.replace(/[^DE0-9]/, "")}
              onChange={(e) => handleChange(e)}
              rightAddon={(
                <Tooltip direction="top" contents="Please enter the value" show={show}>
                <Button onClick={onClickShow}>
                  <MdInfo />
                </Button>
                </Tooltip>
                )}
            />
          </div>
          <div className="col-md-6">
            <TextField
              className="postal-code"
              name="homepage"
              label="Homepage"
              value={values.homepage.replace(/\./, "")}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <TextField
              name="steuernummer"
              label="Steuernummer"
              maxLength='13'
              value={values.steuernummer.replace(/[^A-Z0-9]/,"")}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-md-6">
            <TextField
              name="finanzamt"
              label="Finanzamt"
              value={values.finanzamt.replace(/[^a-zA-Z_ ]/gi, "")}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <TextField
              name="konto"
              label="Konto"
              maxLength='10'
              value={values.konto.replace(/\D/g, "")}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-md-6">
            <TextField
              name="blz"
              label="BLZ"
              maxLength='10'
              value={values.blz.replace(/\D/g, "")}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <TextField
              name="bank"
              label="Bank"
              value={values.bank.replace(/[^a-zA-Z_ ]/gi, "")}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-md-6">
            <TextField
              name="iban"
              label="IBAN"
              maxLength='22'
              value={values.iban.replace(/[A-Z]/, "")}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <TextField
              name="bic"
              label="BIC"
              value={values.bic.replace(/[^A-Z0-9]/,"")}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyData;
