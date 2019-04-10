import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Header=(props)=>{
        return (
          <nav className="navbar navbar-light bg-light">
            <div className="container">
              <div className="navbar-header">
                <ul className="nav navbar-nav">
                  <li>
                    <a hreft="#" className="navbar-brand">
                      {props.homeLink}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
    }
export default Header;



