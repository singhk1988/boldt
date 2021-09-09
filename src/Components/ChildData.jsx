import React, { useState } from "react";
import { Tabs, TabPane } from "antd";
import {
  Dropdown,
  Button,
  TextField,
  Radio,
  RadioGroup,
} from "@cimpress/react-components";
import "../Styles/childData.css";

function ChildData() {
  const [employment, setEmployment] = useState("Arbeitnehmer");

  const [dropValue, setDropValue] = useState({});
  const [value, setRadio] = useState({});
  const [input, setInput] = useState({
    Vorname: "",
    Nachname: "",
    Geburtsdatum: "",
    Geburtsort: "",
    Geburtsname: "",
    Geschlecht: "",
    Religion: "",
    KindschaftsverhältnisSteuerpfl: "",
    Ausbildungsstand: "",
    Identifikationsnummer: "",
    eTIN: "",
  });
  const [errors, setErrors] = useState({
    vorname: { error: "", status: "" },
    nachname: { error: "", status: "" },
    geburtsdatum: { error: "", status: "" },
    geburtsort: { error: "", status: "" },
    geburtsname: { error: "", status: "" },
    geschlecht: { error: "", status: "" },
    religion: { error: "", status: "" },
    kindschaftsverhältnisSteuerpfl: { error: "", status: "" },
    ausbildungsstand: { error: "", status: "" },
    identifikationsnummer: { error: "", status: "" },
    eTIN: { error: "", status: "" },
  });
  const { TabPane } = Tabs;
  const handleRadio = (e) => {
    setRadio(e.target.value);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const handleMenuClick = (e) => {
    setDropValue(e.target.value);
  };
  const onChangeEmploye = (e, value) => {
    setEmployment(value);
  };

  const onBlur = (e) => {
    const { name, value } = e.target;
    if (name === "vorname") {
      if (value === "") {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      } else if (!/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(value)) {
        // setErrors(...errors, { error: `${name} not valid`, status: 'error' })
        setErrors({
          ...errors,
          [name]: { error: `${name} not valid`, status: "error" },
        });
      } else {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      }
    } else if (name === "nachname") {
      console.log("Here::::");
      if (value === "") {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      } else if (!/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(value)) {
        setErrors({
          ...errors,
          [name]: { error: `${name} not valid`, status: "error" },
        });
      } else {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      }
    } else if (name === "geburtsdatum") {
      console.log("Here::::");
      if (value === "") {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      } else if (
        !/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(
          value
        )
      ) {
        setErrors({
          ...errors,
          [name]: { error: `${name} not valid`, status: "error" },
        });
      } else {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      }
    } else if (name === "geburtsort") {
      console.log("Here::::");
      if (value === "") {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      } else if (!/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(value)) {
        setErrors({
          ...errors,
          [name]: { error: `${name} not valid`, status: "error" },
        });
      } else {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      }
    } else if (name === "geburtsname") {
      console.log("Here::::");
      if (value === "") {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      } else if (!/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(value)) {
        setErrors({
          ...errors,
          [name]: { error: `${name} not valid`, status: "error" },
        });
      } else {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      }
    }

    // geschlecht

    //  else if (name === 'geschlecht') {
    //   console.log('Here::::')
    //   if (value === '') {
    //     setErrors({ ...errors, [name]: { error: '', status: '' } })
    //   } else if (!/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(value)) {
    //     setErrors({
    //       ...errors,
    //       [name]: { error: `${name} not valid`, status: 'error' },
    //     })
    //   } else {
    //     setErrors({ ...errors, [name]: { error: '', status: '' } })
    //   }
    // }
    else if (name === "religion") {
      if (value === "") {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      } else if (!/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(value)) {
        setErrors({
          ...errors,
          [name]: { error: `${name} not valid`, status: "error" },
        });
      } else {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      }
    } else if (name === "ausbildungsstand") {
      if (value === "") {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      } else if (!/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(value)) {
        setErrors({
          ...errors,
          [name]: { error: `${name} not valid`, status: "error" },
        });
      } else {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      }
    } else if (name === "identifikationsnummer") {
      if (value === "") {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      } else if (!/^([1-9][0-9]*)|([0]+)$/.test(value)) {
        setErrors({
          ...errors,
          [name]: { error: `${name} not valid`, status: "error" },
        });
      } else {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      }
    }
  };

  return (
    <div className="personalData" align="left">
      <h1>
        <b className="title">Daten Ihrer Kinder</b>
      </h1>
      <div className="title-description">
        Bitte tragen Sie hier die Daten Ihrer Kinder ein.
      </div>
      <div className="margin-body">
        <div className="company-radio pd">Haben Sie Kinder?</div>
        <div className="row">
          <div className="col-md-6">
            <RadioGroup
              inline
              onChange={handleRadio}
              name="radioTest"
              value={value}
              onChange={onChangeEmploye}
            >
              <Radio label="Ja" value={"Ja"} />
              <Radio label="Nein" value={"Nein"} />
            </RadioGroup>
          </div>
          <div className="col-md-6">
            <Dropdown title="Wie viele Kinder haben Sie? ">
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>4</Button>
            </Dropdown>
          </div>
        </div>
        <Tabs defaultActiveJey="1" key="1">
          <TabPane tab="Kinder 1" key="1" className="tabColor">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <TextField
                    label="Vorname"
                    name="vorname"
                    value={input.Vorname}
                    className="customInput"
                    onChange={(e) => handleInput(e)}
                    onBlur={onBlur}
                    helpText={errors.vorname.error}
                    status={errors.vorname.status}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <TextField
                  label="Nachname"
                  name="nachname"
                  value={input.Nachname}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                  onBlur={onBlur}
                  helpText={errors.nachname.error}
                  status={errors.nachname.status}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label="Geburtsdatum"
                  name="geburtsdatum"
                  value={input.Geburtsdatum}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                  onBlur={onBlur}
                  helpText={errors.geburtsdatum.error}
                  status={errors.geburtsdatum.status}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <TextField
                  label="Geburtsort"
                  name="geburtsort"
                  value={input.Geburtsort}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                  onBlur={onBlur}
                  helpText={errors.geburtsort.error}
                  status={errors.geburtsort.status}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label="Geburtsname"
                  name="geburtsname"
                  value={input.Geburtsname}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                  onBlur={onBlur}
                  helpText={errors.geburtsort.error}
                  status={errors.geburtsort.status}
                />
              </div>
              <div className="col-md-4">
                <Dropdown title="Geschlecht" className="dropItem">
                  <Button>männlich</Button>
                  <Button>weiblich</Button>
                </Dropdown>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <TextField
                  label="Religion"
                  name="religion"
                  value={input.Religion}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                  onBlur={onBlur}
                  helpText={errors.religion.error}
                  status={errors.religion.status}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label=" Kindschaftsverhältnis Steuerpfl"
                  name="kindschaftsverhältnisSteuerpfl"
                  value={input.KindschaftsverhältnisSteuerpfl}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <Dropdown title="Familienstand" className="dropItem">
                  <Button>ledig</Button>
                  <Button>verheiratet</Button>
                  <Button>geschieden</Button>
                  <Button>inEingetragenerLebenspartnerschaft</Button>
                  <Button>nichtBekannt</Button>
                </Dropdown>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <TextField
                  label="Ausbildungsstand/Beruf"
                  name="ausbildungsstand"
                  value={input.Ausbildungsstand}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                  onBlur={onBlur}
                  helpText={errors.ausbildungsstand.error}
                  status={errors.ausbildungsstand.status}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label="Identifikationsnummer"
                  name="identifikationsnummer"
                  value={input.Identifikationsnummer}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                  onBlur={onBlur}
                  helpText={errors.identifikationsnummer.error}
                  status={errors.identifikationsnummer.status}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label="eTIN"
                  name="eTIN"
                  value={input.eTIN}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
            </div>
          </TabPane>
          <TabPane tab="Kinder 2" key="2" className="tabColor">
            <div className="row">
              <div className="col-md-4">
                <TextField
                  label="Vorname"
                  name="vorname"
                  value={input.Vorname}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label="Nachname"
                  name="nachname"
                  value={input.nachname}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label="Geburtsdatum"
                  name="geburtsdatum"
                  value={input.geburtsdatum}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <TextField
                  label="Geburtsort"
                  name="geburtsort"
                  value={input.geburtsort}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label="Geburtsname"
                  name="geburtsname"
                  value={input.geburtsname}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <Dropdown title="Geschlecht" className="dropItem">
                  <Button>männlich</Button>
                  <Button>weiblich</Button>
                </Dropdown>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <TextField
                  label="Religion"
                  name="religion"
                  value={input.religion}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label=" Kindschaftsverhältnis Steuerpfl"
                  name="kindschaftsverhältnisSteuerpfl"
                  value={input.kindschaftsverhältnisSteuerpfl}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <Dropdown title="Familienstand" className="dropItem">
                  <Button>ledig</Button>
                  <Button>verheiratet</Button>
                  <Button>geschieden</Button>
                  <Button>inEingetragenerLebenspartnerschaft</Button>
                  <Button>nichtBekannt</Button>
                </Dropdown>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <TextField
                  label="Ausbildungsstand/Beruf"
                  name="ausbildungsstand"
                  value={input.ausbildungsstand}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label="Identifikationsnummer"
                  name="identifikationsnummer"
                  value={input.identifikationsnummer}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label="eTIN"
                  name="eTIN"
                  value={input.eTIN}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
            </div>
          </TabPane>
          <TabPane tab="Kinder 3" key="3" className="tabColor">
            <div className="row">
              <div className="col-md-4">
                <TextField
                  label="Vorname"
                  name="vorname"
                  value={input.vorname}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label="Nachname"
                  name="nachname"
                  value={input.nachname}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label="Geburtsdatum"
                  name="geburtsdatum"
                  value={input.geburtsdatum}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <TextField
                  label="Geburtsort"
                  name="geburtsort"
                  value={input.geburtsort}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label="Geburtsname"
                  name="geburtsname"
                  value={input.geburtsname}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <Dropdown title="Geschlecht" className="dropItem">
                  <Button>männlich</Button>
                  <Button>weiblich</Button>
                </Dropdown>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <TextField
                  label="Religion"
                  name="religion"
                  value={input.religion}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label=" Kindschaftsverhältnis Steuerpfl"
                  name="kindschaftsverhältnisSteuerpfl"
                  value={input.kindschaftsverhältnisSteuerpfl}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <Dropdown title="Familienstand" className="dropItem">
                  <Button>ledig</Button>
                  <Button>verheiratet</Button>
                  <Button>geschieden</Button>
                  <Button>inEingetragenerLebenspartnerschaft</Button>
                  <Button>nichtBekannt</Button>
                </Dropdown>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <TextField
                  label="Ausbildungsstand/Beruf"
                  name="ausbildungsstand"
                  value={input.ausbildungsstand}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label="Identifikationsnummer"
                  name="identifikationsnummer"
                  value={input.identifikationsnummer}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label="eTIN"
                  name="eTIN"
                  value={input.eTIN}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
            </div>
          </TabPane>
          <TabPane tab="Kinder 4" key="4" className="tabColor">
            <div className="row">
              <div className="col-md-4">
                <TextField
                  label="Vorname"
                  name="vorname"
                  value={input.vorname}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label="Nachname"
                  name="nachname"
                  value={input.nachname}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label="Geburtsdatum"
                  name="geburtsdatum"
                  value={input.geburtsdatum}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <TextField
                  label="Geburtsort"
                  name="geburtsort"
                  value={input.geburtsort}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label="Geburtsname"
                  name="geburtsname"
                  value={input.geburtsname}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <Dropdown title="Geschlecht" className="dropItem">
                  <Button>männlich</Button>
                  <Button>weiblich</Button>
                </Dropdown>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <TextField
                  label="Religion"
                  name="religion"
                  value={input.religion}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label=" Kindschaftsverhältnis Steuerpfl"
                  name="kindschaftsverhältnisSteuerpfl"
                  value={input.kindschaftsverhältnisSteuerpfl}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <Dropdown title="Familienstand" className="dropItem">
                  <Button>ledig</Button>
                  <Button>verheiratet</Button>
                  <Button>geschieden</Button>
                  <Button>inEingetragenerLebenspartnerschaft</Button>
                  <Button>nichtBekannt</Button>
                </Dropdown>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <TextField
                  label="Ausbildungsstand/Beruf"
                  name="ausbildungsstand"
                  value={input.ausbildungsstand}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label="Identifikationsnummer"
                  name="identifikationsnummer"
                  value={input.identifikationsnummer}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              <div className="col-md-4">
                <TextField
                  label="eTIN"
                  name="eTIN"
                  value={input.eTIN}
                  className="customInput"
                  onChange={(e) => handleInput(e)}
                />
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default ChildData;
