import React from 'react';
import InputData from '../../inputData';

function Piece() {
const property = "piece";

    return ( 
        <div className='objContainer'>
        <h4>Piece</h4>
        <InputData
        property = {property}
        />
        </div>
     );
}

export default Piece;