import React from 'react';
import {
  FaColumns,
} from 'react-icons/fa';



//Header of the login/signup page.
export const HeaderHome = () => { 
return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <span>
          <FaColumns/>
          {'     '}Prossign
          </span>
        </div>

      </nav>
    </header>
  );
};