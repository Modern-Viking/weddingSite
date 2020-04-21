import React from "react";

const Header = () => {
    return(
        <section class="hero is-primary is-medium">
        <div class="hero-head">
          <nav class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
            </div>
          </nav>
        </div>
      
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title">
              Nick and Mary are Getting Married!!!
            </h1>
            <h2 class="subtitle">
              Subtitle
            </h2>
          </div>
        </div>
      
        <div class="hero-foot">
          <nav class="tabs">
            <div class="container">
              <ul>
                <li class="is-active"><a href="/wedding">Wedding</a></li>
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