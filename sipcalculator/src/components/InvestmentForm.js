import React, {useState} from "react";
import Slider from "./Slider";

const InvestmentForm = (
    {installment, 
    rate, 
    time, 
    handleInstallmentChange, 
    handleRateChange, 
    handleTimeChange}) => {
    
    const handleInstallmentChangeChild = (e) => {
        handleInstallmentChange(e.target.value);
    }

    return (
        <form className='d-flex flex-column'>
          <div>
            <div>
                <label>Monthly investment</label>
                <input type="number" value={installment} onChange={handleInstallmentChangeChild}/>
            </div>
            <Slider min={500} max={100000} value={installment} onChange={handleInstallmentChangeChild}/>
          </div>
          <div>
            <div>
                <label>Expected return rate(p.a)</label>
                <input type="number" value={rate} onChange={handleRateChange}/>
            </div>
            <Slider min={1} max={30} value={rate} onChange={handleRateChange}/>
          </div>
          <div>
            <div>
                <label>Time period</label>
                <input type="number" value={time} onChange={handleTimeChange} />
            </div>
            <Slider min={1} max={40} value={time} onChange={handleTimeChange}/>
          </div>
        </form>
    )
}

export default InvestmentForm;

