import React from 'react';
import MainLayout from '@/layout/MainLayout'
import { useRouter } from 'next/router'

const SingleElement = () => {
  const router = useRouter()

  return (
    <MainLayout>
      <div>
        <div className='d-flex'>
          <div className='text'>Payroll Management</div>
          <img src="./images/icons/chevron-right.png" alt="" />
          <div className='text'>Element Setup</div>
          <img src="./images/icons/chevron-right.png" alt="" />
          <div className='text'>Elements</div>

          <img src="./images/icons/chevron-right.png" alt="" />
          <div className='bold-text'>Elements</div>
        </div>
        <div className='container'>
          <img onClick={() => router.back()} src="./images/icons/Arrow-Left-Square.png" alt="" />
          <div className='bold-text'>Element Details</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SingleElement;