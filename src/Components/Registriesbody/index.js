import React from 'react';
import "./index.css";

const Registriesbody = () => {
    return (
        <section id="main" className="hero is-medium">
<div className="hero-body">
  <div className="container has-text-centered">
    <div className="columns">
      <div className="column">
    <h1 className="title">
      Target
    </h1>
    <a href="https://www.target.com/gift-registry/giftgiver?registryId=550942f14323439596add4b80532a28b&lnk=registry_custom_url">
    <i id="target" className="fas fa-bullseye fa-5x"></i>
    </a>
    </div>
    <div className="column">
    <h1 className="title">
        Amazon
   </h1>
   <a href="https://www.amazon.com/wedding/share/thomas-wilcox-wedding">
   <i id="amazon" className="fab fa-amazon fa-5x"></i>
   </a>
    </div>
    <div className="column">
    <h1 className="title">
      Crate and Barrel
    </h1>
    <a href="https://www.crateandbarrel.com/gift-registry/nick-thomas-and-mary-wilcox/r6120542">
    <i id="barrel" class="fas fa-home fa-5x"></i>
    </a>
    </div>
    </div>
  </div>
</div>
</section>
    )
};

export default Registriesbody;