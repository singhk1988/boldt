import React, { useState } from "react";
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  Tooltip,
} from "@cimpress/react-components";
import DatePicker from "@cimpress/react-components/lib/DatePicker";

function CompanyData() {
  const [employment, setEmployment] = useState("Arbeitnehmer");

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
    beruf: "",
    arbeitgeber: "",
  });
  const [errors, setErrors] = useState({
    firmensitz: { error: "", status: "" },
    ustID: { error: "", status: "" },
    homepage: { error: "", status: "" },
    steuernummer: { error: "", status: "" },
    finanzamt: { error: "", status: "" },
    konto: { error: "", status: "" },
    blz: { error: "", status: "" },
    bank: { error: "", status: "" },
    iban: { error: "", status: "" },
    bic: { error: "", status: "" },
    beruf: { error: "", status: "" },
    arbeitgeber: { error: "", status: "" },
  });
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "iban") {
      console.log("inside iban");
      if (/[A-Z]{2}\d{6}/.test(value)) {
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

  const onChangeEmploye = (e, value) => {
    setEmployment(value);
  };

  const onBlur = (e) => {
    const { name, value } = e.target;
    //   if (value === "") {
    //     setErrors({ ...errors, [name]: { error: "", status: "" } });
    //   } else if (value.legth > 0) {
    //     if (name === "firmensitz") {
    //       if (!/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(value)) {
    //         setErrors({
    //           ...errors,
    //           [name]: { error: `${name} not valid`, status: "error" },
    //         });
    //       }
    //     } else if (name === "ustID") {
    //       if (!/^(DE|[0-9]*)$/.test(value)) {
    //         setErrors({
    //           ...errors,
    //           [name]: { error: `${name} not valid`, status: "error" },
    //         });
    //       }
    //     } else if (name === "homepage") {
    //       if (!/^[^.]+\.[^.]+$/.test(value)) {
    //         setErrors({
    //           ...errors,
    //           [name]: { error: `${name} not valid`, status: "error" },
    //         });
    //       }
    //     }
    //   } else {
    //     setErrors({ ...errors, [name]: { error: "", status: "" } });
    //   }
    // };

    if (
      name === "firmensitz" ||
      name === "finanzamt" ||
      name === "bank" ||
      name === "beruf" ||
      name === "arbeitgeber"
    ) {
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
    } else if (name === "ustID") {
      console.log("Here::::");
      if (value === "") {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      } else if (!/^(DE|[0-9]*)$/.test(value)) {
        setErrors({
          ...errors,
          [name]: { error: `${name} not valid`, status: "error" },
        });
      } else {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      }
    } else if (name === "homepage") {
      if (value === "") {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      } else if (!/^[^.]+\.[^.]+$/.test(value)) {
        setErrors({
          ...errors,
          [name]: { error: `${name} not valid`, status: "error" },
        });
      } else {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      }
    } else if (name === "steuernummer") {
      if (value === "") {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      } else if (!/^[A-Z0-9]{13}$/.test(value)) {
        setErrors({
          ...errors,
          [name]: { error: `${name} not valid`, status: "error" },
        });
      } else {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      }
    } else if (name === "konto" || name === "blz") {
      if (value === "") {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      } else if (!/^[0-9]{10}$/.test(value)) {
        setErrors({
          ...errors,
          [name]: { error: `${name} not valid`, status: "error" },
        });
      } else {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      }
    } else if (name === "iban") {
      if (value === "") {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      } else if (!/[A-Z]{2}\d{20}/.test(value)) {
        setErrors({
          ...errors,
          [name]: { error: `${name} not valid`, status: "error" },
        });
      } else {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      }
    } else if (name === "bic") {
      if (value === "") {
        setErrors({ ...errors, [name]: { error: "", status: "" } });
      } else if (!/^[A-Z0-9]*$/.test(value)) {
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
    <div className="companyData" align="left">
      <h1>
        <b className="title">Beruflich steuerliche Daten</b>
      </h1>
      <div className="title-description">
        Bitte tragen Sie hier Ihre beruflichen Daten ein.
      </div>
      <div className="margin-body">
        <div className="company-radio">
          In welchem Arbeitsverhältnis befinden Sie sich aktuell?
        </div>
        <RadioGroup
          onChange={() => {}}
          inline
          defaultSelected={employment}
          name="radioTest"
          onChange={onChangeEmploye}
        >
          <Radio label="Arbeitnehmer" value="Arbeitnehmer" />
          <Radio label="Arbeitgeber" value="Arbeitgeber" />
        </RadioGroup>
        {employment === "Arbeitgeber" && (
          <div>
            <div className="row">
              <div className="col-md-6">
                <DatePicker
                  dateFormat="DD/MM/YYYY"
                  placeholder="Geschäftsgründungsdatum"
                  className="form-textbox"
                  value={values.geschäftsgründungsdatum}
                  onChange={(d) => {
                    console.log(`object ::`, d);
                    setValues({ ...values, geschäftsgründungsdatum: d });
                  }}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  name="firmensitz"
                  label="Firmensitz"
                  value={values.firmensitz}
                  onChange={(e) => handleChange(e)}
                  onBlur={onBlur}
                  helpText={errors.firmensitz.error}
                  status={errors.firmensitz.status}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <TextField
                  name="ustID"
                  label="Ust.-ID"
                  maxLength="11"
                  value={values.ustID}
                  onChange={(e) => handleChange(e)}
                  onBlur={onBlur}
                  helpText={errors.ustID.error}
                  status={errors.ustID.status}
                  // rightAddon={(
                  //   <Tooltip direction="top" contents="Please enter the value" show={show}>
                  //   <Button onClick={onClickShow}>
                  //     <MdInfo />
                  //   </Button>
                  //   </Tooltip>
                  //   )}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  // className="postal-code"
                  name="homepage"
                  label="Homepage"
                  value={values.homepage}
                  onChange={(e) => handleChange(e)}
                  onBlur={onBlur}
                  helpText={errors.homepage.error}
                  status={errors.homepage.status}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <TextField
                  name="steuernummer"
                  label="Steuernummer"
                  maxLength="13"
                  value={values.steuernummer}
                  onChange={(e) => handleChange(e)}
                  onBlur={onBlur}
                  helpText={errors.steuernummer.error}
                  status={errors.steuernummer.status}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  name="finanzamt"
                  label="Finanzamt"
                  value={values.finanzamt}
                  onChange={(e) => handleChange(e)}
                  onBlur={onBlur}
                  helpText={errors.finanzamt.error}
                  status={errors.finanzamt.status}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <TextField
                  name="konto"
                  label="Konto"
                  maxLength="10"
                  value={values.konto}
                  onChange={(e) => handleChange(e)}
                  onBlur={onBlur}
                  helpText={errors.konto.error}
                  status={errors.konto.status}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  name="blz"
                  label="BLZ"
                  maxLength="10"
                  value={values.blz}
                  onChange={(e) => handleChange(e)}
                  onBlur={onBlur}
                  helpText={errors.blz.error}
                  status={errors.blz.status}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <TextField
                  name="bank"
                  label="Bank"
                  value={values.bank}
                  onChange={(e) => handleChange(e)}
                  onBlur={onBlur}
                  helpText={errors.bank.error}
                  status={errors.bank.status}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  name="iban"
                  label="IBAN"
                  maxLength="22"
                  value={values.iban}
                  onChange={(e) => handleChange(e)}
                  onBlur={onBlur}
                  helpText={errors.iban.error}
                  status={errors.iban.status}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <TextField
                  name="bic"
                  label="BIC"
                  value={values.bic}
                  onChange={(e) => handleChange(e)}
                  onBlur={onBlur}
                  helpText={errors.bic.error}
                  status={errors.bic.status}
                />
              </div>
            </div>
          </div>
        )}
        {employment === "Arbeitnehmer" && (
          <div className="row">
            <div className="col-md-6">
              <TextField
                name="beruf"
                label="Beruf"
                value={values.beruf}
                onBlur={onBlur}
                onChange={(e) => handleChange(e)}
                helpText={errors.beruf.error}
                status={errors.beruf.status}
              />
            </div>
            <div className="col-md-6">
              <TextField
                name="arbeitgeber"
                label="Arbeitgeber"
                maxLength="22"
                onBlur={onBlur}
                value={values.arbeitgeber}
                onChange={(e) => handleChange(e)}
                helpText={errors.arbeitgeber.error}
                status={errors.arbeitgeber.status}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CompanyData;
