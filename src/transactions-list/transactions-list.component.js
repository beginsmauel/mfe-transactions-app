import React, { Fragment } from "react";
// import { useTable } from 'react-table'


export default function TransactionsList({ transactions }) {
  

  return (
    <div>
      <h1> Transactions List </h1>
      <table id="transactions" width="100%">
        <thead>
              <tr>
              <th><strong>Vehicle Type</strong></th>
                <th><strong>Engine Number</strong></th>
                <th><strong>Vehicle Number</strong></th>
                <th><strong>Plaza ID</strong></th>
                <th><strong>Tag Number</strong></th>
                <th><strong>Lane ID </strong></th>
                <th><strong>Date Time</strong></th>
                <th><strong>File URL </strong></th>
              </tr>
              </thead>
      <Fragment>
        <tbody>
        {transactions.map((transaction, index) => {
          let borderClass = "border-b";
          let originalUrl  = transaction.fileurl;
          let finalUrl  = originalUrl.replace("nginx","34.124.216.252");
          if (index === 0) {
            borderClass = "border-t border-b";
          } else if (index + 1 === transactions.length) {
            borderClass = "";
          }
          return (
              <tr>
             <td> {transaction.vehicleType}</td>
              <td> {transaction.engineNumber}</td>
              <td> {transaction.vehicleNumber}</td>
              <td> {transaction.tollPlazaId}</td>
              <td> {transaction.tagNumber}</td>
              <td> {transaction.laneId}</td>
              <td> {transaction.txnTime}</td>
              <td> {finalUrl} </td>
              </tr>
          );
        })}
       </tbody>
      </Fragment>
      </table>
    </div>
  );
}
