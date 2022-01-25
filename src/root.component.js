import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import TransactionsPage from "./transactions-page/transactions-page.component.js";

export default function Root(props) {
  return (
    <BrowserRouter>
      {/* <Route path="/transactions/:personId" component={PeoplePage} /> */}
      <Route path="/transactions" component={TransactionsPage} exact />
    </BrowserRouter>
  );
}
