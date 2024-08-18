import React from 'react';
import { subtitle, title } from './primitives';

const Presentation = () => {
  return (
    <div className="inline-block text-center justify-center text-xs md:text-base lg:text-lg" style={{ width: '50%' }}>
      <h1 className={title()}>Hi 👋, I'm &nbsp;</h1>
      <h1 className={title({ color: "orange" })}>Julien Guillochon&nbsp;</h1>
      <br />
      <h1 className={title()}>
        The Full-Stack Engineer you're looking for.
      </h1>
    </div>
  );
};

export default Presentation;