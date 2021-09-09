import React,{useState} from 'react';
import{
    TextField
}from "@cimpress/react-components";
import '../Styles/bankDetails.css'

function BankDetails(){
    const [input, setInput] = useState({
        identifikationsnummer: "",
        eTIN: "",
        finanzamt: "",
        steuernummer: "",
        rentenversicherungsnummer: "",
        rentenversicherungsträger: "",
        bank: "",
        iban: "",
        konto:"",
        blz:"",
        
      });

      const [finanzamt, setfinanzamt]=useState({ error: "", status: "" });
      const [bank, setbank]=useState({ error: "", status: "" });
      const [konto, setkonto]=useState({ error: "", status: "" });
      const [blz, setblz]=useState({ error: "", status: "" });
    const onBlur = (e) => {
        const { name, value } = e.target;
        if (name === "finanzamt") {
                        
            if(value === "") {
                setfinanzamt({
                status: "",
                error: "",
                });
            
            } else if (!/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(value)) {
                setfinanzamt({
                status: "error",
                error: "finanzamt not valid",
                });
            } else {
                setfinanzamt({
                status: "",
                error: "",
                });
            }
        }
        if (name === "bank") {
                        
            if(value === "") {
                setbank({
                status: "",
                error: "",
                });
            
            } else if (!/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(value)) {
                setbank({
                status: "error",
                error: "bank not valid",
                });
            } else {
                setbank({
                status: "",
                error: "",
                });
            }
        }
        if (name === "konto") {
                        
            if(value === "") {
                setkonto({
                status: "",
                error: "",
                });
            
            } else if (!/^\s*-?[0-9]{1,10}\s*$/.test(value)) {
                setkonto({
                status: "error",
                error: "konto not valid",
                });
            } else {
                setkonto({
                status: "",
                error: "",
                });
            }
        }
        if (name === "konto") {
        if(value === "") {
            setblz({
            status: "",
            error: "",
            });
        
        } else if (!/^\s*-?[0-9]{1,10}\s*$/.test(value)) {
            setblz({
            status: "error",
            error: "blz not valid",
            });
        } else {
            setblz({
            status: "",
            error: "",
            });
        }
    }
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput({
          ...input,
          [name]: value,
        });
      };

    return(
        <div className="personalData" align="left">
            <h1>
                <b className="title">Persönliche steuerliche Daten und Bankverbindung</b>
            </h1>
            <div className="title-description">
                Persönliche steuerliche Daten und Bankverbindung
            </div>
            <div className="margin-body">
                <div className="company-radio setMargin">
                Bitte tragen Sie hier Ihre steuerlichen Daten und Ihre Bankverbindung ein.
                </div>
            </div>
            
            <div className="row setInputMargin">
                <div className="col-md-6">
                <TextField 
                    label="Identifikationsnummer" 
                    name="identifikationsnummer" 
                    value={input.identifikationsnummer}  
                    className="customInput"
                    onChange={(e) => handleInput(e)}/>                   
                </div>
                <div className="col-md-6">
                <TextField 
                    label="eTIN" 
                    name="eTIN" 
                    value={input.eTIN}  
                    className="customInput"
                    onChange={(e) => handleInput(e)}/>
                </div>
            </div>
            <div className="row setInputMargin">
                <div className="col-md-6">
                <TextField 
                    label="Finanzamt" 
                    name="finanzamt" 
                    value={input.finanzamt}  
                    className="customInput"
                    onChange={(e) => handleInput(e)}
                    onBlur={onBlur}
                    helpText={finanzamt.error}
                    status={finanzamt.status}
                    />
                </div>
                <div className="col-md-6">
                <TextField 
                    label="Steuernummer" 
                    name="steuernummer" 
                    value={input.steuernummer}  
                    className="customInput"
                    onChange={(e) => handleInput(e)}/>
                </div>
            </div>
            <div className="row setInputMargin">
                <div className="col-md-6">
                <TextField 
                    label="Rentenversicherungsnummer" 
                    name="rentenversicherungsnummer" 
                    value={input.rentenversicherungsnummer}  
                    className="customInput"
                    onChange={(e) => handleInput(e)}/>
                </div>
                <div className="col-md-6">
                <TextField 
                    label="Rentenversicherungsträger" 
                    name="rentenversicherungsträger" 
                    value={input.rentenversicherungsträger}  
                    className="customInput"
                    onChange={(e) => handleInput(e)}/>
                </div>
            </div>
            <div className="row setInputMargin">
                <div className="col-md-6">
                <TextField 
                    label="Bank" 
                    name="bank" 
                    value={input.bank}  
                    className="customInput"
                    onChange={(e) => handleInput(e)}
                    onBlur={onBlur}
                    helpText={bank.error}
                    status={bank.status}
                    />
                </div>
                <div className="col-md-6">
                <TextField 
                    label="IBAN" 
                    name="iban" 
                    value={input.iban}  
                    className="customInput"
                    onChange={(e) => handleInput(e)}/>
                </div>
            </div>
            <div className="row setInputMargin">
                <div className="col-md-6">
                <TextField 
                    label="Konto" 
                    name="konto" 
                    value={input.konto}  
                    className="customInput"
                    onChange={(e) => handleInput(e)}
                    onBlur={onBlur}
                    helpText={konto.error}
                    status={konto.status}
                    />

                </div>
                <div className="col-md-6">
                <TextField 
                    label="BLZ" 
                    name="blz" 
                    value={input.blz}  
                    className="customInput"
                    onChange={(e) => handleInput(e)}
                    onBlur={onBlur}
                    helpText={blz.error}
                    status={blz.status}
                    />
                </div>
            </div>
        </div>    

        );
}

export default BankDetails;