import React, { useState } from "react";
import {
  Dropdown,
  Radio,
  RadioGroup,
  TextField,
} from "@cimpress/react-components";
import DatePicker from "@cimpress/react-components/lib/DatePicker";

function Marital1() {
  const [input, setInput] = useState({
    Vorname: "",
    Nachname: "",
    Geburtsdatum: "",
    Geburtsort: "",
    Geburtsname: "",
    Geburtsland: "",
    Staatsangehörigkeit: "",
    Beruf: "",
    Arbeitgeber: "",
    Rentenversicherungsnummer: "",
    Rentenversicherungsträger: "",
    Religion: "",
    Identifikationsnummer: "",
    eTIN: "",
    Familienstand: "Familienstand",
  });

  const [errors, setError] = useState({
    Vorname: { error: "", status: "" },
    Nachname: { error: "", status: "" },
    Geburtsdatum: { error: "", status: "" },
    Geburtsort: { error: "", status: "" },
    Geburtsname: { error: "", status: "" },
    Geburtsland: { error: "", status: "" },
    Staatsangehörigkeit: { error: "", status: "" },
    Beruf: { error: "", status: "" },
    Arbeitgeber: { error: "", status: "" },
    Rentenversicherungsnummer: { error: "", status: "" },
    Rentenversicherungsträger: { error: "", status: "" },
    Religion: { error: "", status: "" },
    Identifikationsnummer: { error: "", status: "" },
    eTIN: { error: "", status: "" },
  });

  const onBlur = (e) => {
    const { name, value } = e.target;
    if (
      name === "Vorname" ||
      name === "Nachname" ||
      name === "Arbeitgeber" ||
      name === "Religion"
    ) {
      if (value === "") {
        setError({ ...errors, [name]: { error: "", status: "" } });
      } else if (!/^[a-zA-Z]+$/.test(value)) {
        setError({
          ...errors,
          [name]: { error: `${name} not valid`, status: "error" },
        });
      } else {
        setError({ ...errors, [name]: { error: "", status: "" } });
      }
    } else if (
      name === "Geburtsort" ||
      name === "Geburtsname" ||
      name === "Geburtsland" ||
      name === "Staatsangehörigkeit" ||
      name === "Beruf"
    ) {
      if (value === "") {
        setError({ ...errors, [name]: { error: "", status: "" } });
      } else if (!/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(value)) {
        setError({
          ...errors,
          [name]: { error: `${name} not valid`, status: "error" },
        });
      } else {
        setError({ ...errors, [name]: { error: "", status: "" } });
      }
    } else if (name === "Identifikationsnummer") {
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
    <div>
      <div className="personalData" align="left">
        <h1>
          <b className="title">Familienstand</b>
        </h1>
        <div className="title-description">
          Bitte tragen Sie hier Ihre familiären Daten ein.
        </div>
        <div className="margin-body">
          <div className="row">
            <div className="col-md-6">
              <Dropdown title={input.Familienstand}>
                <button
                  onClick={() =>
                    setInput({ ...input, Familienstand: "Married" })
                  }
                >
                  Married
                </button>
                <button
                  onClick={() =>
                    setInput({ ...input, Familienstand: "Unmarried" })
                  }
                >
                  UnMarried
                </button>
              </Dropdown>
            </div>
            <div className="col-md-6">
              <h4>Leben Sie in einer Gütergemeinschaft?</h4>
              <RadioGroup inline name="radioTest">
                <Radio label="Ja" value="Ja" />
                <Radio label="Nien" value="Nien" />
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className="margin-body">
          <h3>
            <b className="title">Daten zum Ehegatten:in</b>
          </h3>
          <div className="row">
            <div className="col-md-4">
              <TextField
                type="text"
                label="Vorname"
                name="Vorname"
                value={input.Vorname}
                onChange={(e) => handleInput(e)}
                onBlur={onBlur}
                helpText={errors.Vorname.error}
                status={errors.Vorname.status}
              />
            </div>
            <div className="col-md-4">
              <TextField
                type="text"
                id="pad"
                label="Nachname"
                name="Nachname"
                value={input.Nachname}
                onChange={(e) => handleInput(e)}
                status={errors.Nachname.status}
                helpText={errors.Nachname.error}
                onBlur={onBlur}
              />
            </div>
            <div className="col-md-4">
              <DatePicker
                dateFormat="DD/MM/YYYY"
                placeholder="Geburtsdatum"
                className="form-textbox"
                value={input.Geburtsdatum}
                name="Geburtsdatum"
                onChange={(d) => {
                  setInput({ ...input, Geburtsdatum: d });
                }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <TextField
                type="text"
                id="pad"
                label="Geburtsort"
                name="Geburtsort"
                value={input.Geburtsort}
                onChange={(e) => handleInput(e)}
                onBlur={onBlur}
                helpText={errors.Geburtsort.error}
                status={errors.Geburtsort.status}
              />
            </div>
            <div className="col-md-4">
              <TextField
                type="text"
                id="pad"
                label="Geburtsname"
                name="Geburtsname"
                value={input.Geburtsname}
                onChange={(e) => handleInput(e)}
                onBlur={onBlur}
                helpText={errors.Geburtsname.error}
                status={errors.Geburtsname.status}
              />
            </div>
            <div className="col-md-4">
              <TextField
                type="text"
                id="pad"
                label="Geburtsland"
                name="Geburtsland"
                value={input.Geburtsland}
                onChange={(e) => handleInput(e)}
                onBlur={onBlur}
                helpText={errors.Geburtsland.error}
                status={errors.Geburtsland.status}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <TextField
              type="text"
              id="pad"
              label="Staatsangehörigkeit"
              name="Staatsangehörigkeit"
              value={input.Staatsangehörigkeit}
              onChange={(e) => handleInput(e)}
              onBlur={onBlur}
              helpText={errors.Staatsangehörigkeit.error}
              status={errors.Staatsangehörigkeit.status}
            />
          </div>
          <div className="col-md-4">
            <TextField
              type="text"
              id="pad"
              label="Beruf"
              name="Beruf"
              value={input.Beruf}
              onChange={(e) => handleInput(e)}
              onBlur={onBlur}
              helpText={errors.Beruf.error}
              status={errors.Beruf.status}
            />
          </div>
          <div className="col-md-4">
            <TextField
              type="text"
              id="pad"
              label="Arbeitgeber"
              name="Arbeitgeber"
              value={input.Arbeitgeber}
              onChange={(e) => handleInput(e)}
              onBlur={onBlur}
              helpText={errors.Arbeitgeber.error}
              status={errors.Arbeitgeber.status}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <TextField
              type="text"
              id="pad"
              label="Rentenversicherungsnummer"
              name="Rentenversicherungsnummer"
              value={input.Rentenversicherungsnummer}
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className="col-md-4">
            <TextField
              type="text"
              id="pad"
              label="Rentenversicherungsträger"
              name="Rentenversicherungsträger"
              value={input.Rentenversicherungsträger}
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className="col-md-4">
            <TextField
              type="text"
              id="pad"
              label="eTIN"
              name="eTIN"
              value={input.eTIN}
              onChange={(e) => handleInput(e)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <TextField
              type="text"
              id="pad"
              label="Identifikationsnummer"
              name="Identifikationsnummer"
              value={input.Identifikationsnummer}
              onChange={(e) => handleInput(e)}
              maxLength={11}
              status={errors.Identifikationsnummer.status}
              onBlur={onBlur}
              helpText={errors.Identifikationsnummer.error}
            />
          </div>

          <div className="col-md-4">
            <TextField
              type="text"
              id="pad"
              label="Religion"
              name="Religion"
              value={input.Religion}
              onChange={(e) => handleInput(e)}
              onBlur={onBlur}
              helpText={errors.Religion.error}
              status={errors.Religion.status}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Marital1;
