import React, {useState} from "react";
import "./styles.css";

const date = new Date();

const yyyyCurrent = date.getFullYear();
const mmCurrent = parseInt(String(date.getMonth() + 1).padStart(2, '0')); // Adds leading zero if single digit
const ddCurrent = parseInt(String(date.getDate()).padStart(2, '0'));

function AgeCalculator() {
    const [birthDate,setBirthDate] = useState("");
    const [ageResult,setAgeResult] = useState("");
    const [error,setError] = useState("");
    const onSubmitHandler = () => {
       const today = new Date();
       const birth=new Date(birthDate);
       if(!birthDate){
           setError("Please select a date");
           setAgeResult("");
           return;
       }
       if(birth>today){
           setError("Birthdate cannot be in the future");
           setAgeResult("");
           return;
       }
       let years = today.getFullYear() - birth.getFullYear();
       let months = today.getMonth() - birth.getMonth();
       let days = today.getDate() - birth.getDate();
       if(days<0){
           days += new Date(today.getFullYear(),today.getMonth(),0).getDate();
           months--;
       }
       if(months<0){
           months +=12;
           years--;
       }
       setError("");
       setAgeResult(`${years} years ${months} months ${days} days`);
    }
    return (
        <div className="conatiner">
            <h2 className="title">Age Calculator</h2>
            <label className="label" data-testid="label-birthdate">Enter/Select a birthdate:</label>
            <input
                id="birthdate"
                type="date"
                className="input-date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                data-testid="input-birthdate"

            />
            <button className="btn-calc" onClick={onSubmitHandler} data-testid="btn-calculate">Calculate Age</button>
            <p className="error-msg" data-testid="error-msg">{error}</p>
            <p className="age-result" data-testid="age-result">{ageResult}</p>
        </div>
    );
}

export default AgeCalculator;