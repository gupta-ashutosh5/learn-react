import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InvestmentForm from './components/InvestmentForm';
import InvestmentResult from './components/InvestmentResult';
import InvestmentChart from './components/InvestmentChart';
import Hello from './components/Hello';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  const[installment, setInstallment] = useState(500);
  const[rate, setRate] = useState(1);
  const[time, setTime] = useState(1);

  const handleInstallmentChange = (installment) => {
    setInstallment(installment);
  }

  const handleRateChange = (e) => {
      setRate(e.target.value);
  }

  const handleTimeChange = (e) => {
      setTime(e.target.value);
  }

  const calculateReturns = (installment, rate, time) => {
    return (calculateTotalAmount(installment, rate, time) - installment * time * 12);
  }

  const calculateTotalAmount = (installment, rate, time) => {
    const totalInstallment = time * 12;
    const periodicRate = rate / 1200;
    return (installment * (1 + periodicRate) * (Math.pow((1+periodicRate), totalInstallment) - 1) / periodicRate);
  }

  const calculateInvestment = (installment, time) => {
    return installment * time * 12;
  }

  return (
    <div className="App">
      <div>
        <h2>SIP Calculator</h2>
        <Router>
          <Routes>
          <Route path="/" element={<Hello />} />
            <Route 
              path="/investment-form" 
              element={<InvestmentForm 
                installment={installment} 
                rate={rate} 
                time={time}
                handleInstallmentChange={handleInstallmentChange}
                handleRateChange={handleRateChange}
                handleTimeChange={handleTimeChange}
              />} />
            <Route path="/investment-chart" element={<InvestmentChart />} />
            <Route path="/hello-page" element={<Hello />} />
          </Routes>
        </Router>
        <InvestmentChart 
          totalInvestment={calculateInvestment(installment, time)} 
          totalReturns={Math.round(calculateReturns(installment, rate, time))}
          totalAmount={Math.round(calculateTotalAmount(installment, rate, time))}
        />
        <InvestmentResult 
          totalInvestment={calculateInvestment(installment, time)} 
          totalReturns={Math.round(calculateReturns(installment, rate, time))}
          totalAmount={Math.round(calculateTotalAmount(installment, rate, time))}
        />
      </div>
    </div>
  );
}

export default App;
