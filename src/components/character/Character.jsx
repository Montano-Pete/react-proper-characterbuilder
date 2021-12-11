import React from 'react';

export default function Character({ head, torso, pants }) {
  return (
    <section className="entire-character">
      <div className="head">
        <img
          alt="character-head"
          src={`${head}-head.png`}
          width="200"
          height="200"
        ></img>
      </div>

      <div className="torso">
        <img
          alt="character-torso"
          src={`${torso}-torso.png`}
          width="200"
          height="200"
        ></img>
      </div>

      <div className="torso">
        <img
          alt="character-pants"
          src={`${pants}-pants.png`}
          width="200"
          height="200"
        ></img>
      </div>
    </section>
  );
}
