import React, { useState } from "react";
import { TextField, Button } from "@cimpress/react-components";
import DatePicker from "@cimpress/react-components/lib/DatePicker";
import { Input } from "antd";
import { string } from "prop-types";

function PersonalData() {
  const [values, setValues] = useState({
    geburtsdatum: "",
    geburtsname: "",
    geburtsort: "",
    geburtsland: "",
    religion: "",
    staatsangehörigkeit: "",
    nationalität: "",
  });
  const [errors, setErrors] = useState({
    geburtsdatum: { error: "", status: "" },
    geburtsname: { error: "", status: "" },
    geburtsort: { error: "", status: "" },
    geburtsland: { error: "", status: "" },
    religion: { error: "", status: "" },
    staatsangehörigkeit: { error: "", status: "" },
    nationalität: { error: "", status: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onBlur = (e) => {
    const { name, value } = e.target;
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
  };

  return (
    <>
      <div className="personalData" align="left">
        <h1>
          <b className="title">Persönliche Daten</b>
        </h1>
        <div className="title-description">
          Bitte tragen Sie hier Ihre persönliche Daten ein.
        </div>
        <div className="margin-body">
          <div className="row">
            <div className="col-md-6">
              <DatePicker
                dateFormat="DD/MM/YYYY"
                placeholder="Geburtsdatum"
                className="form-textbox"
                value={values.geburtsdatumd}
                onChange={(d) => {
                  let selectedDate = d.format("DD/MM/YYYY");
                  setValues({ ...values, geburtsdatum: selectedDate });
                }}
              />
            </div>
            <div className="col-md-6">
              {" "}
              <TextField
                name="geburtsname"
                label="Geburtsname"
                // pattern="[A]*"
                pattern="^([a-zA-Z]+\s)*[a-zA-Z]+$"
                value={values.geburtsname}
                onChange={(e) => e.isValid && handleChange(e)}
                // onBlur={onBlur}
                helpText={errors.geburtsname.error}
                status={errors.geburtsname.status}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {" "}
              <TextField
                name="geburtsort"
                label="Geburtsort"
                value={values.geburtsort}
                onChange={(e) => handleChange(e)}
                onBlur={onBlur}
                helpText={errors.geburtsort.error}
                status={errors.geburtsort.status}
              />
            </div>
            <div className="col-md-6">
              <TextField
                name="geburtsland"
                label="Geburtsland"
                value={values.geburtsland}
                onChange={(e) => handleChange(e)}
                onBlur={onBlur}
                helpText={errors.geburtsland.error}
                status={errors.geburtsland.status}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <TextField
                name="religion"
                label="Religion"
                value={values.religion}
                onChange={(e) => handleChange(e)}
                onBlur={onBlur}
                helpText={errors.religion.error}
                status={errors.religion.status}
              />
            </div>
            <div className="col-md-6">
              <TextField
                name="staatsangehörigkeit"
                label="Staatsangehörigkeit"
                value={values.staatsangehörigkeit}
                onChange={(e) => handleChange(e)}
                onBlur={onBlur}
                helpText={errors.staatsangehörigkeit.error}
                status={errors.staatsangehörigkeit.status}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <TextField
                name="nationalität"
                label="Nationalität"
                value={values.nationalität}
                onChange={(e) => handleChange(e)}
                onBlur={onBlur}
                helpText={errors.nationalität.error}
                status={errors.nationalität.status}
              />
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalData;
