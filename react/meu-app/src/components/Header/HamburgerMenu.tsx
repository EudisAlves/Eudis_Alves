import React, { useState } from 'react';

interface Props {}

const HamburgerMenu: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='nav'>

      <div>
        <button onClick={toggleMenu} className="btn-menu">
          {isOpen ? 'Close' : 'Open'} Menu
        </button>
        {isOpen && (
          <ul id="menu" role="menu">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        )}
      </div>
    </header>
  );
};





export default HamburgerMenu;
