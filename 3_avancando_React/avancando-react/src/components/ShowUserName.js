//props valor direto,por variável e state
import React from 'react';

const ShowUserName = (props) => {
  return (
    <div>
      <h2>O nome é : {props.name}</h2>
    </div>
  );
};

export default ShowUserName;
