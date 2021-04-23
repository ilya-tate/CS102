import { useState } from 'react';

const Header = () => {
  const isShowing = true;

  return (
    <header className="header">
      <h2>TODO List</h2>
      { isShowing ? <button>This is a button</button> : null }
    </header>
  );
}

export default Header;
