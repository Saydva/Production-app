import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function BuilData() {
    return ( 
        <div>
            <h3>This is build site</h3>
              <div>            
                 <Link to="/buildData/piece">Piece</Link>
                 <Link to="/buildData/subpiece">Subpiece</Link>
                 <Link to="/buildData/model">Model</Link>
              </div>
              <Outlet/>
        </div>
        
         );
}

export default BuilData;