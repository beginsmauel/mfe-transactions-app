import React, { useState, useEffect } from "react";
import TransactionsList from "../transactions-list/transactions-list.component.js";
import axios from "axios";



export default function TransactionsPage() {
  const [transactions, setTransactions] = useState( []);
  useEffect(() => {
    const axiosPosts = () => {
      //const response = axios.get('http://34.124.216.252:8900/vehicle/getAllVehicles')
      const response = axios.get('http://microfrontend.free.beeceptor.com/data')
      .then(function (response) {
        //console.log(response);
        setTransactions(response.data);
      })}
    axiosPosts();
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="p-6">
            <TransactionsList
              transactions={transactions}
            />
        </div>
       
      </div>
    </div>
  );

 
  
}


