import React, { useState } from "react";
import { TextField } from "@cimpress/react-components";
import "../Styles/bankDetails.css";

function BankDetails() {
  const [input, setInput] = useState({
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

  const [errors, setError] = useState({
    finanzamt: { error: "", status: "" },
    bank: { error: "", status: "" },
    konto: { error: "", status: "" },
    blz: { error: "", status: "" },
    steuernummer: { error: "", status: "" },
    rentenversicherungsnummer: { error: "", status: "" },
    identifikationsnummer: { error: "", status: "" },
  });

  const onBlur = (e) => {
    const { name, value } = e.target;
    if (name === "finanzamt" || name === "bank") {
      if (value === "") {
        setError({
          ...errors,
          [name]: {
            status: "",
            error: "",
          },
        });
      } else if (!/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(value)) {
        setError({
          ...errors,
          [name]: {
            status: "error",
            error: `${name} not valid`,
          },
        });
      } else {
        setError({
          ...errors,
          [name]: {
            status: "",
            error: "",
          },
        });
      }
    }
    if (name === "konto" || name === "blz") {
      if (value === "") {
        setError({
          ...errors,
          [name]: {
            status: "",
            error: "",
          },
        });
      } else if (!/^\s*-?[0-9]{1,10}\s*$/.test(value)) {
        setError({
          ...errors,
          [name]: {
            status: "error",
            error: `${name} not valid`,
          },
        });
      } else {
        setError({
          ...errors,
          [name]: {
            status: "",
            error: "",
          },
        });
      }
    } else if (name === "steuernummer") {
      if (value === "") {
        setError({ ...errors, [name]: { error: "", status: "" } });
      } else if (!/^[A-Z0-9]{13}$/.test(value)) {
        setError({
          ...errors,
          [name]: { error: `${name} not valid`, status: "error" },
        });
      } else {
        setError({ ...errors, [name]: { error: "", status: "" } });
      }
    } else if (name === "rentenversicherungsnummer") {
      if (value === "") {
        setError({ ...errors, [name]: { error: "", status: "" } });
      } else if (!/^[0-9]{8}[A-Z]{1}[0-9]{2}$/.test(value)) {
        setError({
          ...errors,
          [name]: { error: `${name} not valid`, status: "error" },
        });
      } else {
        setError({ ...errors, [name]: { error: "", status: "" } });
      }
    } else if (name === "iban") {
      if (value === "") {
        setError({ ...errors, [name]: { error: "", status: "" } });
      } else if (!/^[A-Z]{2}[0-9]{20}$/.test(value)) {
        setError({
          ...errors,
          [name]: { error: `${name} not valid`, status: "error" },
        });
      } else {
        setError({ ...errors, [name]: { error: "", status: "" } });
      }
    } else if (name === "identifikationsnummer") {
      if (value === "") {
        setError({ ...errors, [name]: { error: "", status: "" } });
      } else if (!/^[1-9]{1}[0-9]{10}$/.test(value)) {
        setError({
          ...errors,
          [name]: { error: `${name} not valid`, status: "error" },
        });
      } else {
        setError({ ...errors, [name]: { error: "", status: "" } });
      }
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <div className="personalData" align="left">
      <h1>
        <b className="title">
          Persönliche steuerliche Daten und Bankverbindung
        </b>
      </h1>
      <div className="title-description">
        Persönliche steuerliche Daten und Bankverbindung
      </div>
      <div className="margin-body">
        <div className="company-radio setMargin">
          Bitte tragen Sie hier Ihre steuerlichen Daten und Ihre Bankverbindung
          ein.
        </div>
      </div>

      <div className="row setInputMargin">
        <div className="col-md-6">
          <div className="form-group">
            <TextField
              label="Identifikationsnummer"
              name="identifikationsnummer"
              value={input.identifikationsnummer}
              className="customInput"
              onChange={(e) => handleInput(e)}
              onBlur={onBlur}
              maxLength={11}
              helpText={errors.identifikationsnummer.error}
              status={errors.identifikationsnummer.status}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <TextField
              label="eTIN"
              name="eTIN"
              value={input.eTIN}
              className="customInput"
              onChange={(e) => handleInput(e)}
            />
          </div>
        </div>
      </div>
      <div className="row setInputMargin">
        <div className="col-md-6">
          <div className="form-group">
            <TextField
              label="Finanzamt"
              name="finanzamt"
              value={input.finanzamt}
              className="customInput"
              onChange={(e) => handleInput(e)}
              onBlur={onBlur}
              helpText={errors.finanzamt.error}
              status={errors.finanzamt.status}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <TextField
              label="Steuernummer"
              name="steuernummer"
              value={input.steuernummer}
              className="customInput"
              maxLength={13}
              onBlur={onBlur}
              onChange={(e) => handleInput(e)}
              helpText={errors.steuernummer.error}
              status={errors.steuernummer.status}
            />
          </div>
        </div>
      </div>
      <div className="row setInputMargin">
        <div className="col-md-6">
          <div className="form-group">
            <TextField
              label="Rentenversicherungsnummer"
              name="rentenversicherungsnummer"
              value={input.rentenversicherungsnummer}
              className="customInput"
              onChange={(e) => handleInput(e)}
              onBlur={onBlur}
              maxLength={11}
              helpText={errors.rentenversicherungsnummer.error}
              status={errors.rentenversicherungsnummer.status}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <TextField
              label="Rentenversicherungsträger"
              name="rentenversicherungsträger"
              value={input.rentenversicherungsträger}
              className="customInput"
              onChange={(e) => handleInput(e)}
            />
          </div>
        </div>
      </div>
      <div className="row setInputMargin">
        <div className="col-md-6">
          <div className="form-group">
            <TextField
              label="Bank"
              name="bank"
              value={input.bank}
              className="customInput"
              onChange={(e) => handleInput(e)}
              onBlur={onBlur}
              helpText={errors.bank.error}
              status={errors.bank.status}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <TextField
              label="IBAN"
              name="iban"
              value={input.iban}
              maxLength={22}
              className="customInput"
              onChange={(e) => handleInput(e)}
              onBlur={onBlur}
              helpText={errors.bank.error}
              status={errors.bank.status}
            />
          </div>
        </div>
      </div>
      <div className="row setInputMargin">
        <div className="col-md-6">
          <div className="form-group">
            <TextField
              label="Konto"
              name="konto"
              value={input.konto}
              className="customInput"
              onChange={(e) => handleInput(e)}
              onBlur={onBlur}
              helpText={errors.konto.error}
              status={errors.konto.status}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <TextField
              label="BLZ"
              name="blz"
              value={input.blz}
              className="customInput"
              onChange={(e) => handleInput(e)}
              onBlur={onBlur}
              helpText={errors.blz.error}
              status={errors.blz.status}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankDetails;
