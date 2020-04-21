import React from "react";

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
            <h1 className="title">
              Nick and Mary are Getting Married!!!
            </h1>
            <h2 className="subtitle">
              Subtitle
            </h2>
          </div>
        </div>
      
        <div className="hero-foot">
          <nav className="tabs">
            <div className="container">
              <ul>
                <li className="is-active"><a href="/">Wedding</a></li>
                <li><a href="/photos">Photos</a></li>
                <li><a href="/registries">Registries</a></li>
                <li><a href="/rsvp">RSVP</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </section>


    )
};

export default Header;