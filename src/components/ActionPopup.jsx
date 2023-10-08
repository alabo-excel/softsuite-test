import React from 'react';
import { Dropdown } from 'antd';
import Link from 'next/link';

const ActionPopup = ({ index }) => {
  // console.log(index)

  const items = [
    {
      key: '1',
      label: (
        <Link href={`single?page=${index}`}>
          <div className='d-flex'>
            <img className='action-icon-child' src="./images/icons/view.png" alt="" />
            <div className='link-text'>View Element Links</div>
          </div>
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link href={''}>
          <div className='d-flex'>
            <img className='action-icon-child' src="./images/icons/Edit.png" alt="" />
            <div className='link-text'>Edit Element</div>
          </div>
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link href={''}>
          <div className='d-flex'>
            <img className='action-icon-child' src="./images/icons/trash.png" alt="" />
            <div className='text warning'>Delete Element</div>
          </div>
        </Link>
      ),
    },
  ];
  return (
    <div>
      <Dropdown
        menu={{
          items,
        }}
        placement="topLeft"
        arrow={{
          pointAtCenter: true,
        }}
      >
        <img className='action-icon' src="./images/icons/More-Square.png" alt="" />
      </Dropdown>
    </div>
  );
};

export default ActionPopup;