import React from 'react';
import "./index.css";

const Weddingbody = () => {
    return (
        <section id="main" className="hero is-medium">
<div className="hero-body">
  <div className="container has-text-centered">
    <div className="columns">
      <div className="column">
    <h1 className="title">
      The Big Day
    </h1>
    <h2 className="subtitle">
      August 19, 2020
    </h2>
    </div>
    </div>
    <br/>
    <div className="columns">
      <div className="column">
        <h1 className="subtitle">
          We regret to inform everyone that due to Covid-19 restrictions both receptions have been canceled.
          While we would have loved to see and celebrate with all of you we feel it is in the best interest and health of everyone to cancel the receptions.
        </h1>
      </div>
    </div>
    <div className="columns">
    <div className="column">
    <h1 className="title">
      Utah Reception
    </h1>
    <h2 className="subtitle">
      <s>October 17, 2020 in Salt Lake City</s>
    </h2>
    </div>
    <div className="column">
    <h1 className="title">
      California Reception
    </h1>
    <h2 className="subtitle">
      <s>October 24, 2020 in Redlands</s>
    </h2>
    </div>
    </div>
  </div>
</div>
</section>
    )
};

export default Weddingbody;