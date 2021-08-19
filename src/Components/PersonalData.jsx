import React, { useState } from "react";
import { TextField, Button } from "@cimpress/react-components";
import DatePicker from '@cimpress/react-components/lib/DatePicker';
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
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
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
            onChange={d => {setValues({...values, geburtsdatum: d});}}
            />
           
          </div>
          <div className="col-md-6">
            {" "}
            <TextField
              name="geburtsname"
              label="Geburtsname"
              value={values.geburtsname}
              onChange={(e) => handleChange(e)}
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
            />
          </div>
          <div className="col-md-6">
            <TextField
              name="geburtsland"
              label="Geburtsland"
              value={values.geburtsland}
              onChange={(e) => handleChange(e)}
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
            />
          </div>
          <div className="col-md-6">
            <TextField
              name="staatsangehörigkeit"
              label="Staatsangehörigkeit"
              value={values.staatsangehörigkeit}
              onChange={(e) => handleChange(e)}
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
            />
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
}

export default PersonalData;
