import React from 'react';

const HeaderNav = () => {
  return (
    <header >
      <img className='logo' src="./images/logo.png" alt="" />
      <div className='org-toggle'>
        <img className='icon' src="./images/icons/Home.png" alt="" />
        <div>
          <div className='text'>Change Organization</div>
          <div className='bold-text'>PaperSoft Limited</div>
        </div>
        <img className='icon' src="./images/icons/dropdown.png" alt="" />
      </div>
      <div className='search'>
        <input type="text" placeholder='Search for anything...' />
        <button>
          <img src="./images/icons/search.png" alt="" />
        </button>
      </div>
      <img className='icon' src="./images/icons/Notification.png" alt="" />
      <div className='user'>
        <img src="./images/Ellipse.png" alt="" />
        <div>
          <div className='text'>Henry Okoro</div>
          <div className='bold-text'>Payroll Manager</div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;