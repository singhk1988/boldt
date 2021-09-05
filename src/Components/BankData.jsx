import React, { useState } from "react";
import "../Styles/BankData.css";

import { Input } from "antd";

function BankData() {
  const [values, setValues] = useState({
    identifikationsnummer: "",
    eTIN: "",
    finanzamt: "",
    steuernummer: "",
    rentenversicherungsnummer: "",
    rentenversicherungsträger: "",
    bank: "",
    iban: "",
    konto: "",
    blz: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="companyData" align="left">
      <h1>
        <b className="title">
          Persönliche steuerliche Daten und Bankverbindung
        </b>
      </h1>
      <div className="title-description">
        Bitte tragen Sie hier Ihre steuerlichen Daten und Ihre Bankverbindung
        ein.
      </div>
      <div className="margin-body">
        <div className="row">
          <div className="col-md-6">
            <Input
              name="identifikationsnummer"
              placeholder="Identifikationsnummer"
              className="ant-tinput"
              value={values.identifikationsnummer}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="col-md-6">
            <Input
              name="eTIN"
              placeholder="eTIN"
              className="ant-tinput"
              value={values.eTIN}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="finanzamt"
              placeholder="Finanzamt"
              className="ant-tinput"
              value={values.finanzamt}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="col-md-6">
            <Input
              name="steuernummer"
              placeholder="Steuernummer"
              className="ant-tinput"
              value={values.steuernummer}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="rentenversicherungsnummer"
              placeholder="Rentenversicherungsnummer"
              className="ant-tinput"
              value={values.rentenversicherungsnummer}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="col-md-6">
            <Input
              name="rentenversicherungsträger"
              placeholder="Rentenversicherungsträger"
              className="ant-tinput"
              value={values.rentenversicherungsträger}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="bank"
              placeholder="Bank"
              className="ant-tinput"
              value={values.bank}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="col-md-6">
            <Input
              name="iban"
              placeholder="IBAN"
              className="ant-tinput"
              value={values.iban}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="konto"
              placeholder="Konto"
              className="ant-tinput"
              value={values.konto}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="col-md-6">
            <Input
              name="blz"
              placeholder="BLZ"
              className="ant-tinput"
              value={values.blz}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankData;
