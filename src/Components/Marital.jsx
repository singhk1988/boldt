import React, { useState } from "react";
import {
  Dropdown,
  Radio,
  RadioGroup,
  TextField,
} from "@cimpress/react-components";
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
  });

  const [Vorname, setVorname] = useState({ error: "", status: "" });
  const [Nachname, setNachname] = useState({ error: "", status: "" });
  const [Arbeitgeber, setArbeitgeber] = useState({ error: "", status: "" });
  const [Religion, setReligion] = useState({ error: "", status: "" });
  const [Geburtsort, setGeburtsort] = useState({ error: "", status: "" });
  const [Geburtsname, setGeburtsname] = useState({ error: "", status: "" });
  const [Geburtsland, setGeburtsland] = useState({ error: "", status: "" });
  const [Staatsangehörigkeit, setStaatsangehörigkeit] = useState({
    error: "",
    status: "",
  });
  const [Beruf, setBeruf] = useState({ error: "", status: "" });
  const onBlur = (e) => {
    const { name, value } = e.target;
    if (name === "Vorname") {
      if (value === "") {
        setVorname({
          status: "",
          error: "",
        });
      } else if (!/^[a-zA-Z]+$/.test(value)) {
        setVorname({
          status: "error",
          error: "vorname not valid",
        });
      } else {
        setVorname({
          status: "",
          error: "",
        });
      }
    }
    if (name === "Nachname") {
      if (value === "") {
        setNachname({
          status: "",
          error: "",
        });
      } else if (!/^[a-zA-Z]+$/.test(value)) {
        setNachname({
          status: "error",
          error: "Nachname not valid",
        });
      } else {
        setNachname({
          status: "",
          error: "",
        });
      }
    }
    if (name === "Arbeitgeber") {
      if (value === "") {
        setArbeitgeber({
          status: "",
          error: "",
        });
      } else if (!/^[a-zA-Z]+$/.test(value)) {
        setArbeitgeber({
          status: "error",
          error: "Arbeitgeber not valid",
        });
      } else {
        setArbeitgeber({
          status: "",
          error: "",
        });
      }
    }
    if (name === "Religion") {
      if (value === "") {
        setReligion({
          status: "",
          error: "",
        });
      } else if (!/^[a-zA-Z]+$/.test(value)) {
        setReligion({
          status: "error",
          error: "Religion not valid",
        });
      } else {
        setReligion({
          status: "",
          error: "",
        });
      }
    }
    if (name === "Geburtsort") {
      if (value === "") {
        setGeburtsort({
          status: "",
          error: "",
        });
      } else if (!/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(value)) {
        setGeburtsort({
          status: "error",
          error: "Geburtsort not valid",
        });
      } else {
        setGeburtsort({
          status: "",
          error: "",
        });
      }
    }
    if (name === "Geburtsname") {
      if (value === "") {
        setGeburtsname({
          status: "",
          error: "",
        });
      } else if (!/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(value)) {
        setGeburtsname({
          status: "error",
          error: "Geburtsname not valid",
        });
      } else {
        setGeburtsname({
          status: "",
          error: "",
        });
      }
    }
    if (name === "Geburtsland") {
      if (value === "") {
        setGeburtsland({
          status: "",
          error: "",
        });
      } else if (!/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(value)) {
        setGeburtsland({
          status: "error",
          error: "Geburtsland not valid",
        });
      } else {
        setGeburtsland({
          status: "",
          error: "",
        });
      }
    }
    if (name === "Staatsangehörigkeit") {
      if (value === "") {
        setStaatsangehörigkeit({
          status: "",
          error: "",
        });
      } else if (!/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(value)) {
        setStaatsangehörigkeit({
          status: "error",
          error: "Staatsangehörigkeit not valid",
        });
      } else {
        setStaatsangehörigkeit({
          status: "",
          error: "",
        });
      }
    }
    if (name === "Beruf") {
      if (value === "") {
        setBeruf({
          status: "",
          error: "",
        });
      } else if (!/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(value)) {
        setBeruf({
          status: "error",
          error: "Beruf not valid",
        });
      } else {
        setBeruf({
          status: "",
          error: "",
        });
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
              <Dropdown title="Familienstand">
                <button>Married</button>
                <button>UnMarried</button>
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
                helpText={Vorname.error}
                status={Vorname.status}
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
                status={Nachname.status}
                helpText={Nachname.error}
                onBlur={onBlur}
              />
            </div>
            <div className="col-md-4">
              <TextField
                dateFormat="DD/MM/YYYY"
                type="text"
                id="pad"
                label="Geburtsdatum"
                name="Geburtsdatum"
                value={input.Geburtsdatum}
                onChange={(e) => handleInput(e)}
                // onChange={(d) => {
                //   let selectedDate = d.format("DD/MM/YYYY");
                //   setInput({ ...input, Geburtsdatum: selectedDate });
                // }}
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
                helpText={Geburtsort.error}
                status={Geburtsort.status}
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
                helpText={Geburtsname.error}
                status={Geburtsname.status}
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
                helpText={Geburtsland.error}
                status={Geburtsland.status}
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
              helpText={Staatsangehörigkeit.error}
              status={Staatsangehörigkeit.status}
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
              helpText={Beruf.error}
              status={Beruf.status}
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
              helpText={Arbeitgeber.error}
              status={Arbeitgeber.status}
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
              helpText={Religion.error}
              status={Religion.status}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Marital1;
