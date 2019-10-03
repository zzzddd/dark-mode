// import React, { useState } from 'react';
// import { useDarkMode } from '../Hook/useDarkMode';

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useDarkMode(false);
//   const toggleMode = e => {
//     e.preventDefault();
//     setDarkMode(!darkMode);
//   };
//   return (
//     <nav className="navbar">
//       <h1>Crypto Tracker</h1>
//       {/* <NavLink>home</NavLink> */}
//       <div className="dark-mode__toggle">
//         <div
//           onClick={toggleMode}
//           className={darkMode ? 'toggle toggled' : 'toggle'}
//         />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { useDarkMode } from '../Hook/useDarkMode';


const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className='navbar'>
      <h1>Crypto Tracker</h1>

      <div className='dark-mode__toggle'>
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;