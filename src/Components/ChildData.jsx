import  React,{useState} from "react";
import { Tabs,TabPane  } from 'antd';
import{
    
    Dropdown,
    Button,
    TextField,
    Radio,
    RadioGroup
} from "@cimpress/react-components";
import '../Styles/childData.css'

function ChildData(){
    
    const [dropValue,setDropValue] = useState({});
    const [value, setRadio]= useState({})
    const [input, setInput] = useState({
        Vorname: "",
        Nachname: "",
        Geburtsdatum: "",
        Geburtsort: "",
        Geburtsname: "",
        Geschlecht: "",
        Religion: "",
        KindschaftsverhältnisSteuerpfl: "",
        Ausbildungsstand:"",
        Identifikationsnummer:"",
        eTIN:""
      });
    const { TabPane } = Tabs;
    const handleRadio = (e) =>{
        setRadio(e.target.value);
    }
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput({
          ...input,
          [name]: value,
        });
      };
    const handleMenuClick=(e)=>{
        setDropValue(e.target.value);
    }
 


    return(
        
      <div className="personalData" align="left">
        <h1>
            <b className="title">Daten Ihrer Kinder</b>
         </h1>
          <div className="title-description">
            Bitte tragen Sie hier die Daten Ihrer Kinder ein.
          </div>
          <div className="margin-body">
                <div className="company-radio pd">
                    Haben Sie Kinder?
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <RadioGroup inline onChange={handleRadio} name="radioTest" value={value}>
                        <Radio label="Ja" value={"Ja"} />
                        <Radio label="Nein" value={"Nein"} />
                    </RadioGroup>
                    </div>
                    <div className="col-md-6">
                        <Dropdown title="Wie viele Kinder haben Sie? ">
                            <Button >1</Button>
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
                                <TextField 
                                    label="Vorname" 
                                    name="vorname" 
                                    value={input.vorname}  
                                    className="customInput"
                                    onChange={(e) => handleInput(e)}/>
                            </div>
                            <div className="col-md-4">
                            
                                <TextField label="Nachname" 
                                name="nachname" 
                                value={input.nachname}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/>
                            </div>
                            <div className="col-md-4">
                            <TextField label="Geburtsdatum" 
                                    name="geburtsdatum" 
                                    value={input.geburtsdatum}  
                                    className="customInput"
                                    onChange={(e) => handleInput(e)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                            <TextField label="Geburtsort" 
                                name="geburtsort" 
                                value={input.geburtsort}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/>
                            </div>
                            <div className="col-md-4">
                            <TextField label="Geburtsname" 
                                name="geburtsname" 
                                value={input.geburtsname}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/> 
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
                            <TextField label="Religion" 
                                name="religion" 
                                value={input.religion}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/>
                            </div>
                            <div className="col-md-4">
                            <TextField label=" Kindschaftsverhältnis Steuerpfl" 
                                name="kindschaftsverhältnisSteuerpfl" 
                                value={input.kindschaftsverhältnisSteuerpfl}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/>  
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
                            <TextField label="Ausbildungsstand/Beruf" 
                                name="ausbildungsstand" 
                                value={input.ausbildungsstand}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/>
                            </div>
                            <div className="col-md-4">
                            <TextField label="Identifikationsnummer" 
                                name="identifikationsnummer" 
                                value={input.identifikationsnummer}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/> 
                            </div>
                            <div className="col-md-4">
                            <TextField label="eTIN" 
                                    name="eTIN" 
                                    value={input.eTIN}  
                                    className="customInput"
                                    onChange={(e) => handleInput(e)}/>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Kinder 2" key="2" className="tabColor">
                        <div className="row">
                            <div className="col-md-4">
                                <TextField 
                                    label="Vorname" 
                                    name="vorname" 
                                    value={input.vorname}  
                                    className="customInput"
                                    onChange={(e) => handleInput(e)}/>
                            </div>
                            <div className="col-md-4">
                            
                                <TextField label="Nachname" 
                                name="nachname" 
                                value={input.nachname}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/>
                            </div>
                            <div className="col-md-4">
                            <TextField label="Geburtsdatum" 
                                    name="geburtsdatum" 
                                    value={input.geburtsdatum}  
                                    className="customInput"
                                    onChange={(e) => handleInput(e)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                            <TextField label="Geburtsort" 
                                name="geburtsort" 
                                value={input.geburtsort}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/>
                            </div>
                            <div className="col-md-4">
                            <TextField label="Geburtsname" 
                                name="geburtsname" 
                                value={input.geburtsname}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/> 
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
                            <TextField label="Religion" 
                                name="religion" 
                                value={input.religion}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/>
                            </div>
                            <div className="col-md-4">
                            <TextField label=" Kindschaftsverhältnis Steuerpfl" 
                                name="kindschaftsverhältnisSteuerpfl" 
                                value={input.kindschaftsverhältnisSteuerpfl}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/>  
                            </div>
                                <div className="col-md-4">
                            
                                <Dropdown title="Familienstand" className="dropItem" style={{width:"300px"}}>
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
                            <TextField label="Ausbildungsstand/Beruf" 
                                name="ausbildungsstand" 
                                value={input.ausbildungsstand}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/>
                            </div>
                            <div className="col-md-4">
                            <TextField label="Identifikationsnummer" 
                                name="identifikationsnummer" 
                                value={input.identifikationsnummer}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/> 
                            </div>
                            <div className="col-md-4">
                            <TextField label="eTIN" 
                                    name="eTIN" 
                                    value={input.eTIN}  
                                    className="customInput"
                                    onChange={(e) => handleInput(e)}/>
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
                                    onChange={(e) => handleInput(e)}/>
                            </div>
                            <div className="col-md-4">
                            
                                <TextField label="Nachname" 
                                name="nachname" 
                                value={input.nachname}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/>
                            </div>
                            <div className="col-md-4">
                            <TextField label="Geburtsdatum" 
                                    name="geburtsdatum" 
                                    value={input.geburtsdatum}  
                                    className="customInput"
                                    onChange={(e) => handleInput(e)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                            <TextField label="Geburtsort" 
                                name="geburtsort" 
                                value={input.geburtsort}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/>
                            </div>
                            <div className="col-md-4">
                            <TextField label="Geburtsname" 
                                name="geburtsname" 
                                value={input.geburtsname}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/> 
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
                            <TextField label="Religion" 
                                name="religion" 
                                value={input.religion}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/>
                            </div>
                            <div className="col-md-4">
                            <TextField label=" Kindschaftsverhältnis Steuerpfl" 
                                name="kindschaftsverhältnisSteuerpfl" 
                                value={input.kindschaftsverhältnisSteuerpfl}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/>  
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
                            <TextField label="Ausbildungsstand/Beruf" 
                                name="ausbildungsstand" 
                                value={input.ausbildungsstand}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/>
                            </div>
                            <div className="col-md-4">
                            <TextField label="Identifikationsnummer" 
                                name="identifikationsnummer" 
                                value={input.identifikationsnummer}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/> 
                            </div>
                            <div className="col-md-4">
                            <TextField label="eTIN" 
                                    name="eTIN" 
                                    value={input.eTIN}  
                                    className="customInput"
                                    onChange={(e) => handleInput(e)}/>
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
                                    onChange={(e) => handleInput(e)}/>
                            </div>
                            <div className="col-md-4">
                            
                                <TextField label="Nachname" 
                                name="nachname" 
                                value={input.nachname}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/>
                            </div>
                            <div className="col-md-4">
                            <TextField label="Geburtsdatum" 
                                    name="geburtsdatum" 
                                    value={input.geburtsdatum}  
                                    className="customInput"
                                    onChange={(e) => handleInput(e)}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                            <TextField label="Geburtsort" 
                                name="geburtsort" 
                                value={input.geburtsort}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/>
                            </div>
                            <div className="col-md-4">
                            <TextField label="Geburtsname" 
                                name="geburtsname" 
                                value={input.geburtsname}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/> 
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
                            <TextField label="Religion" 
                                name="religion" 
                                value={input.religion}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/>
                            </div>
                            <div className="col-md-4">
                            <TextField label=" Kindschaftsverhältnis Steuerpfl" 
                                name="kindschaftsverhältnisSteuerpfl" 
                                value={input.kindschaftsverhältnisSteuerpfl}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/>  
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
                            <TextField label="Ausbildungsstand/Beruf" 
                                name="ausbildungsstand" 
                                value={input.ausbildungsstand}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/>
                            </div>
                            <div className="col-md-4">
                            <TextField label="Identifikationsnummer" 
                                name="identifikationsnummer" 
                                value={input.identifikationsnummer}  
                                className="customInput"
                                onChange={(e) => handleInput(e)}/> 
                            </div>
                            <div className="col-md-4">
                            <TextField label="eTIN" 
                                    name="eTIN" 
                                    value={input.eTIN}  
                                    className="customInput"
                                    onChange={(e) => handleInput(e)}/>
                            </div>
                        </div>
                    </TabPane>
                    </Tabs>

          </div>
      </div>
    );
}


export default ChildData;