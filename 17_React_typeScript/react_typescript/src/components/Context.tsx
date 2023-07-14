import React, { useContext } from 'react';

import { AppContext } from '../App';

const Context = () => {
  const details = useContext(AppContext);
  console.log(details);

  return (
    <>
      {details && (
        <div>
          <h2>Linguagem: {details.language}</h2>
          <h4>Linguagem: {details.projects}</h4>
        </div>
      )}
    </>
  );
};

export default Context;
