import React from 'react';

export default function Character({ head, torso, pants }) {
  return (
    <section className="entire-character">
      <div className="head">
        <img
          aria-label="head"
          alt="character-head"
          src={`${head}-head.png`}
          width="200"
          height="200"
        ></img>
      </div>

      <div className="torso">
        <img
          aria-label="torso"
          alt="character-torso"
          src={`${torso}-torso.png`}
          width="200"
          height="200"
        ></img>
      </div>

      <div className="pant">
        <img
          aria-label="pant"
          alt="character-pants"
          src={`${pants}-pants.png`}
          width="200"
          height="200"
        ></img>
      </div>
    </section>
  );
}
