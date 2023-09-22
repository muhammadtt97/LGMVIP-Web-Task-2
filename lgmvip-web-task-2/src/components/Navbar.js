import React from 'react';

const Navbar = ({ fetchUsers }) => {
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">My User Card</div>
      </div>
      <button onClick={fetchUsers}>Get Users</button>
    </nav>
  );
};

export default Navbar;
