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
  const [childrenStatus, setChildrenStatus] = useState("Nein");

  const [dropValue, setDropValue] = useState({});
  const [value, setRadio] = useState({});

  const [formData, setformData] = useState();
  const [error, seterror] = useState();
  const data = {
    vorname: "",
    nachname: "",
    geburtsdatum: "",
    geburtsort: "",
    geburtsname: "",
    geschlecht: "",
    religion: "",
    kindschaftsverhältnisSteuerpfl: "",
    ausbildungsstand: "",
    identifikationsnummer: "",
    eTIN: "",
    Familienstand: "Familienstand",
    Geschlecht: "Geschlecht",
  };

  const err = {
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
  };

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
  const handleInput = (e, i) => {
    const { name, value } = e.target;
    let newArray = [...formData];
    newArray[i] = { ...newArray[i], [name]: value };
    setformData([...newArray]);
  };

  const handleMenuClick = (e) => {
    setDropValue(e.target.value);
  };
  const onChangeChildren = (e, value) => {
    setChildrenStatus(value);
  };
  const onBlur = (e, i) => {
    const { name, value } = e.target;
    if (
      name === "ausbildungsstand" ||
      name === "religion" ||
      name === "vorname" ||
      name === "nachname" ||
      name === "geburtsort" ||
      name === "geburtsname"
    ) {
      if (value === "") {
        let newArray = [...error];
        newArray[i] = { ...newArray[i], [name]: { error: "", status: "" } };
        seterror([...newArray]);

        // setErrors({ ...errors, [name]: { error: "", status: "" } });
      } else if (!/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(value)) {
        // setErrors(...errors, { error: `${name} not valid`, status: 'error' })
        // setErrors({
        //   ...errors,
        //   [name]: { error: `${name} not valid`, status: "error" },
        // });

        let newArray = [...error];
        newArray[i] = {
          ...newArray[i],
          [name]: { error: `${name} not valid`, status: "error" },
        };
        seterror([...newArray]);
      } else {
        let newArray = [...error];
        newArray[i] = { ...newArray[i], [name]: { error: "", status: "" } };
        seterror([...newArray]);
      }
    } else if (name === "geburtsdatum") {
      if (value === "") {
        let newArray = [...error];
        newArray[i] = { ...newArray[i], [name]: { error: "", status: "" } };
        seterror([...newArray]);
      } else if (
        !/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(
          value
        )
      ) {
        let newArray = [...error];
        newArray[i] = {
          ...newArray[i],
          [name]: { error: `${name} not valid`, status: "error" },
        };
        seterror([...newArray]);
      } else {
        let newArray = [...error];
        newArray[i] = { ...newArray[i], [name]: { error: "", status: "" } };
        seterror([...newArray]);
      }
    } else if (name === "identifikationsnummer") {
      if (value === "") {
        let newArray = [...error];
        newArray[i] = { ...newArray[i], [name]: { error: "", status: "" } };
        seterror([...newArray]);
      } else if (!/^([1-9][0-9]*)|([0]+)$/.test(value)) {
        let newArray = [...error];
        newArray[i] = {
          ...newArray[i],
          [name]: { error: `${name} not valid`, status: "error" },
        };
        seterror([...newArray]);
      } else {
        let newArray = [...error];
        newArray[i] = { ...newArray[i], [name]: { error: "", status: "" } };
        seterror([...newArray]);
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
              // onChange={handleRadio}
              defaultSelected={childrenStatus}
              name="radioTest"
              value={value}
              onChange={onChangeChildren}
            >
              <Radio label="Ja" value={"Ja"} />
              <Radio label="Nein" value={"Nein"} />
            </RadioGroup>
          </div>
          <div className="col-md-6">
            <Dropdown
              title={
                formData ? formData.length : "Wie viele Kinder haben Sie? "
              }
            >
              <Button
                onClick={() => {
                  setformData([data]);
                  seterror([err]);
                }}
              >
                1
              </Button>
              <Button
                onClick={() => {
                  setformData([data, data]);
                  seterror([err, err]);
                }}
              >
                2
              </Button>
              <Button
                onClick={() => {
                  setformData([data, data, data]);
                  seterror([err, err, err]);
                }}
              >
                3
              </Button>
              <Button
                onClick={() => {
                  setformData([data, data, data, data]);
                  seterror([err, err, err, err]);
                }}
              >
                4
              </Button>
            </Dropdown>
          </div>
        </div>
        <div className="card-container">
          <Tabs defaultActiveJey="1" key="1" type="card">
            {formData &&
              formData.length > 0 &&
              formData.map((data, i) => {
                return (
                  <TabPane
                    tab={`Kinder ${i + 1}`}
                    key={i + 1}
                    className="tabColor"
                  >
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <TextField
                            label="Vorname"
                            name="vorname"
                            value={data.vorname}
                            className="customInput"
                            onChange={(e) => handleInput(e, i)}
                            onBlur={(e) => onBlur(e, i)}
                            helpText={error[i].vorname.error}
                            status={error[i].vorname.status}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <TextField
                          label="Nachname"
                          name="nachname"
                          value={data.nachname}
                          className="customInput"
                          onChange={(e) => handleInput(e, i)}
                          onBlur={(e) => onBlur(e, i)}
                          helpText={error[i].nachname.error}
                          status={error[i].nachname.status}
                        />
                      </div>
                      <div className="col-md-4">
                        <TextField
                          label="Geburtsdatum"
                          name="geburtsdatum"
                          value={data.geburtsdatum}
                          className="customInput"
                          onChange={(e) => handleInput(e, i)}
                          onBlur={(e) => onBlur(e, i)}
                          helpText={error[i].geburtsdatum.error}
                          status={error[i].geburtsdatum.status}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <TextField
                          label="Geburtsort"
                          name="geburtsort"
                          value={data.geburtsort}
                          className="customInput"
                          onChange={(e) => handleInput(e, i)}
                          onBlur={(e) => onBlur(e, i)}
                          helpText={error[i].geburtsort.error}
                          status={error[i].geburtsort.status}
                        />
                      </div>
                      <div className="col-md-4">
                        <TextField
                          label="Geburtsname"
                          name="geburtsname"
                          value={data.geburtsname}
                          className="customInput"
                          onChange={(e) => handleInput(e, i)}
                          onBlur={(e) => onBlur(e, i)}
                          helpText={error[i].geburtsort.error}
                          status={error[i].geburtsort.status}
                        />
                      </div>
                      <div className="col-md-4">
                        <Dropdown title={data.Geschlecht} className="dropItem">
                          <Button
                            onClick={() => {
                              let newArray = [...formData];
                              newArray[i] = {
                                ...newArray[i],
                                Geschlecht: "männlich",
                              };
                              setformData([...newArray]);
                            }}
                          >
                            männlich
                          </Button>
                          <Button
                            onClick={() => {
                              let newArray = [...formData];
                              newArray[i] = {
                                ...newArray[i],
                                Geschlecht: "weiblich",
                              };
                              setformData([...newArray]);
                            }}
                          >
                            weiblich
                          </Button>
                        </Dropdown>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <TextField
                          label="Religion"
                          name="religion"
                          value={data.religion}
                          className="customInput"
                          onChange={(e) => handleInput(e, i)}
                          onBlur={(e) => onBlur(e, i)}
                          helpText={error[i].religion.error}
                          status={error[i].religion.status}
                        />
                      </div>
                      <div className="col-md-4">
                        <TextField
                          label="Kindschaftsverhältnis Steuerpfl"
                          name="kindschaftsverhältnisSteuerpfl"
                          value={data.kindschaftsverhältnisSteuerpfl}
                          className="customInput"
                          onChange={(e) => handleInput(e, i)}
                        />
                      </div>
                      <div className="col-md-4">
                        <Dropdown
                          title={data.Familienstand}
                          className="dropItem"
                        >
                          <Button
                            onClick={() => {
                              let newArray = [...formData];
                              newArray[i] = {
                                ...newArray[i],
                                Familienstand: "ledig",
                              };
                              setformData([...newArray]);
                            }}
                          >
                            ledig
                          </Button>
                          <Button
                            onClick={() => {
                              let newArray = [...formData];
                              newArray[i] = {
                                ...newArray[i],
                                Familienstand: "verheiratet",
                              };
                              setformData([...newArray]);
                            }}
                          >
                            verheiratet
                          </Button>
                          <Button
                            onClick={() => {
                              let newArray = [...formData];
                              newArray[i] = {
                                ...newArray[i],
                                Familienstand: "geschieden",
                              };
                              setformData([...newArray]);
                            }}
                          >
                            geschieden
                          </Button>
                          <Button
                            onClick={() => {
                              let newArray = [...formData];
                              newArray[i] = {
                                ...newArray[i],
                                Familienstand:
                                  "inEingetragenerLebenspartnerschaft",
                              };
                              setformData([...newArray]);
                            }}
                          >
                            inEingetragenerLebenspartnerschaft
                          </Button>
                          <Button
                            onClick={() => {
                              let newArray = [...formData];
                              newArray[i] = {
                                ...newArray[i],
                                Familienstand: "nichtBekannt",
                              };
                              setformData([...newArray]);
                            }}
                          >
                            nichtBekannt
                          </Button>
                        </Dropdown>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <TextField
                          label="Ausbildungsstand/Beruf"
                          name="ausbildungsstand"
                          value={data.ausbildungsstand}
                          className="customInput"
                          onChange={(e) => handleInput(e, i)}
                          onBlur={(e) => onBlur(e, i)}
                          helpText={error[i].ausbildungsstand.error}
                          status={error[i].ausbildungsstand.status}
                        />
                      </div>
                      <div className="col-md-4">
                        <TextField
                          label="Identifikationsnummer"
                          name="identifikationsnummer"
                          value={data.identifikationsnummer}
                          className="customInput"
                          onChange={(e) => handleInput(e, i)}
                          onBlur={(e) => onBlur(e, i)}
                          helpText={error[i].identifikationsnummer.error}
                          status={error[i].identifikationsnummer.status}
                        />
                      </div>
                      <div className="col-md-4">
                        <TextField
                          label="eTIN"
                          name="eTIN"
                          value={data.eTIN}
                          className="customInput"
                          onChange={(e) => handleInput(e, i)}
                        />
                      </div>
                    </div>
                  </TabPane>
                );
              })}
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ChildData;
