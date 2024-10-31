import React from 'react';

function ObjOperations (props){
    const name1 = props.name1;
    const name2 = props.name2;
    const method = props.method;
    return (
      <span className='row'>
      <span key={name1} className='column'>
        <span className='row'><label htmlFor={name1}>{name1}</label>
        <input id={name1} type="text" />
        </span>
        <span className='row'><label htmlFor={name2}>{name2}</label>
        <input id={name2} type="text" />
        </span>    
      </span>
      <button onClick={method} id={name1} >Set <br />{name1}
      </button>
      </span>)
    };

export default ObjOperations;