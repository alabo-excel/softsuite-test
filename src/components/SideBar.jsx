import React from 'react';

const SideBar = () => {
  return (
    <aside>
      <div className='org-toggle'>
        <img className='icon' src="./images/icons/tabler_switch-3.png" alt="" />
        <div>
          <div className='text'>Switch Module</div>
          <div className='bold-text'>Payroll Management</div>
        </div>
        <img className='icon' src="./images/icons/dropdown.png" alt="" />
      </div>
      <div className='org-toggle my-2'>
        <img className='icon' src="./images/icons/Category.png" alt="" />
        <div className='text'>Dashboard</div>
      </div>
      <div className='org-toggle my-2'>
        <img className='icon' src="./images/icons/ph_tree-structure-fill.png" alt="" />
        <div className='text'>Payroll Activities</div>
      </div>
      <div className='org-toggle my-2'>
        <img className='icon' src="./images/icons/Activity.png" alt="" />
        <div className='text'>Salary Structure</div>
      </div>
    </aside>
  );
};

export default SideBar;