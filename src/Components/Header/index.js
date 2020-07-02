import React from "react";
import "./index.css";

const Header = () => {
    return(
        <section className="hero is-primary is-medium header">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
              </div>
            </div>
          </nav>
        </div>
      
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-1">
              Nick and Mary are Getting Married!!!
            </h1>
            <br/>
            <h2 className="subtitle is-size-3">
              August 19, 2020
            </h2>
          </div>
        </div>
      
        <div id="herofoot" className="hero-foot">
          <nav className="tabs">
            <div className="container is-size-5">
              <ul>
                <li className="is-active"><a href="/">Wedding</a></li>
                <li><a href="/photos">Photos</a></li>
                <li><a href="/registries">Registries</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </section>


    )
};

export default Header;