import React, { useState } from "react";

function MortgageCalculator() {
  const [fields, setFields] = useState({
    loan_amount: "",
    interest_rate: "",
    loan_term: "",
  });
  const [monthlyPayments, setMonthlyPayments] = useState("");
  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: Number(e.target.value),
    });
  };
  const calculateMortgageValue = () => {
    if (
      !fields["loan_amount"] ||
      !fields["interest_rate"] ||
      !fields["loan_term"]
    ) {
      setMonthlyPayments("Invalid input");
      return;
    }
    if (
      fields["loan_amount"] < 0 ||
      fields["interest_rate"] <= 0 ||
      fields["loan_term"] <= 0
    ) {
      setMonthlyPayments("Invalid input");
      return;
    }

    const principalAmount = fields["loan_amount"];
    const r = fields["interest_rate"] / 12 / 100;
    const n = fields["loan_term"] * 12;
    const monthlyPaymentsCalculated =
      principalAmount * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    setMonthlyPayments(Number.parseFloat(monthlyPaymentsCalculated).toFixed(2));
  };
  return (
    <div>
      <h1>Mortgage Calculator</h1>
      <div>
        <label htmlFor="">Loan Amount(INR) : </label>
        <input
          type="number"
          name="loan_amount"
          id=""
          value={fields["loan_amount"]}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="">Annual Interest Rate(%) : </label>
        <input
          type="number"
          name="interest_rate"
          id=""
          value={fields["interest_rate"]}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="">Loan Term (Years) : </label>
        <input
          type="number"
          name="loan_term"
          id=""
          value={fields["loan_term"]}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button type="button" onClick={calculateMortgageValue}>
        Calculate
      </button>
    </div>
  );
}

export default MortgageCalculator;
