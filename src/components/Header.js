import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1 className="text-center text-primary ">Expensify</h1>
    <div className="navigation">
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Create Expense
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </div>
  </header>
);

export default Header;
