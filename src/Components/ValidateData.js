export default function ValidateData(values) {
  let errors = {};

  if (!values.vorname.trim()) {
    errors.vorname = "Vorname erforderlich";
  } else if (!/^[A-Za-z]+/.test(values.vorname.trim())) {
    errors.vorname = "Enter a valid Vorname";
  }

  if (!values.nachname.trim()) {
    errors.nachname = "Nachname erforderlich";
  } else if (!/^[A-Za-z]+/.test(values.nachname.trim())) {
    errors.nachname = "Enter a valid Nachname";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.ort.trim()) {
    errors.ort = "ORT erforderlich";
  } else if (!/^[A-Za-z]+/.test(values.ort.trim())) {
    errors.ort = "Enter a valid ORT";
  }

  if (!values.ort.trim()) {
    errors.ort = "PLZ erforderlich";
  } else if (!/^[0-9\b]+$/.test(values.ort.trim())) {
    errors.ort = "Enter a valid PLZ";
  }

  return errors;
}
