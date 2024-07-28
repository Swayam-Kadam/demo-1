import React from 'react'
import PropTypes from 'prop-types';
// import {a} from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">  
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about us">{props.about}</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/">Action</a></li>
            <li><a class="dropdown-item" href="/">Another action</a></li>
            <li><a class="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input mx-1" onClick={props.toggelMode}type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode} Mode</label>
</div>
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes = {title : PropTypes.string,  //propType object is use href d/fne property type and validation htmlFor our props
                    about : PropTypes.string
}

Navbar.defaultProps = {title : 'set title here',  //defaultProps object is use href a/ply default value htmlFor our props when props is not loaded
    about : 'About text here'
};

//comment is nothing but a component inside we can pass veriables,values etc
//when we use props then write props in function
///* props.title props  and we can change dynamically using app.js file*/
//propType object is use href v/lidation forour props
//here (PropTypes.string.isRequired)  isRequired keyword is use href m/st a define our props,no any one isRequire props not defined