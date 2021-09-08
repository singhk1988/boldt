import React from "react";
import { Select, Radio, Input } from "antd";

function Marital() {
  const { Option } = Select;

  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <>
    <div className="contact" align="left">
    <div className="row">
      <h1>
        <b className="title">Familienstand</b>
      </h1>
      </div>
      <div className="title-description">
      <div className="row">
        Bitte tragen Sie hier Ihre familiären Daten ein.
      </div>
      </div>
      <div className="margin-body">
      <div className="row">
            <div className="col-md-6">
            <div className="row">
      <Select defaultValue="Familienstand" style={{ width: 350 }} >
        <Option value="option1">Married</Option>
        <Option value="option2">UnMarried</Option>
      </Select>
      </div>
      </div>

      <label for="html">Leben Sie in einer Gütergemeinschaft?</label>
      <br />
      <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Ja</Radio>
      <Radio value={2}>Nein</Radio>
      
    </Radio.Group>

    
      
    <div className="row">
      <h3>
        <b className="header">Daten zum Ehegatten:in</b>
      </h3>
      </div>

      <div className="row">
        <div className="col-md-4">
        <Input type="text" id="pad" placeholder="Vorname" />
        </div>
        <div className="col-md-4">
        <Input type="text" id="pad" placeholder="Nachname" />
        </div>
        <div className="col-md-4">
        <Input type="text" id="pad" placeholder="Geburtsdatum" />
        </div>
      </div>
    

    <div className="margin-body">
      <div className="row">
        <div className="col-md-4">
        <Input type="text" id="pad" placeholder="Geburtsort" />
        </div>
        <div className="col-md-4">
        <Input type="text" id="pad" placeholder="Geburtsname" />
        </div>
        <div className="col-md-4">
        <Input type="text" id="pad" placeholder="Geburtsland" />
        </div>
      </div>
    </div>

    <div className="margin-body">
      <div className="row">
        <div className="col-md-4">
        <Input type="text" id="pad" placeholder="Staatsangehörigkeit" />
        </div>
        <div className="col-md-4">
        <Input type="text" id="pad" placeholder="Beruf" />
        </div>
        <div className="col-md-4">
        <Input type="text" id="pad" placeholder="Arbeitgeber" />
        </div>
      </div>
    </div>
   
    <div className="margin-body" >
      <div className="row" >
        <div className="col-md-4">
        <Input type="text" id="pad" placeholder="Rentenversicherungsnummer" />
        </div>
        <div className="col-md-4">
        <Input type="text" id="pad" placeholder="Rentenversicherungsträger" />
        </div>
        <div className="col-md-4">
        <Input id="pad" type="text" placeholder="eTIN" />
        </div>
      </div>
    </div>

    <div className="margin-body">
      <div className="row">
        <div className="col-md-4">
        <Input type="text" id="pad" placeholder="Identifikationsnummer" />
        </div>
        <div className="col-md-4">
        <Input type="text" id="pad" placeholder="Religion" />
        </div>
        </div>
      </div>
    </div>


     </div>
    </div>
    
    </>
  );
}
export default Marital;
