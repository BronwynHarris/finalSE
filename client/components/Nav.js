import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Nav = () => (
  <nav class="navbar navbar-expand-lg navbar-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/students" activeClassName='active'>Students</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/campuses" activeClassName='active'>Campuses</NavLink>
      </li>
    </ul>
  </div>
</nav>
);

export default withRouter(Nav);
