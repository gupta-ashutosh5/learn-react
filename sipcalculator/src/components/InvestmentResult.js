import React,{useState} from "react";

const InvestmentResult = ({totalInvestment, totalReturns, totalAmount}) => {
    return (
        <div>
            <h3>Investment Result</h3>
            <p>Invested amount: {totalInvestment}</p>
            <p>Estimated returns: {totalReturns}</p>
            <p>Total amount: {totalAmount}</p>
        </div>
    )
}

export default InvestmentResult;