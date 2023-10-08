import React, { useEffect, useState } from 'react';
import MainLayout from '@/layout/MainLayout'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectElement } from '@/store/slices/elementSlice'

const SingleElement = () => {
  const router = useRouter()
  const elements = useSelector(selectElement)
  const { query } = useRouter()

  // console.log(elements[query.page])

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


          <div className='d-flex mt-2'>
            <div className='single-card'>
              <p className='text'>Element</p>
              <p className='link-text'>{elements[query.page]?.name}</p>
            </div>
            <div className='single-card'>
              <p className='text'>Element Classification</p>
              <p className='link-text'>{elements[query.page]?.classificationValueId}</p>
            </div>
          </div>
          <div className='d-flex'>
            <div className='single-card'>
              <p className='text'>ELEMENT category</p>
              <p className='link-text'>{elements[query.page]?.categoryValueId}</p>
            </div>
            <div className='single-card'>
              <p className='text'>payrun</p>
              <p className='link-text'>{elements[query.page]?.payrun}</p>
            </div>
          </div>
          <div className='d-flex'>
            <div className='single-card'>
              <p className='text'>description</p>
              <p className='link-text'>{elements[query.page]?.description}</p>
            </div>
            <div className='single-card'>
              <p className='text'>reporting Name</p>
              <p className='link-text'>{elements[query.page]?.reportingName}</p>
            </div>
          </div>
          <div className='d-flex'>
            <div className='single-card'>
              <p className='text'>Effective Start Date</p>
              <p className='link-text'>{elements[query.page]?.effectiveStartDate}</p>
            </div>
            <div className='single-card'>
              <p className='text'>Effective END Date</p>
              <p className='link-text'>{elements[query.page]?.effectiveEndDate}</p>
            </div>
          </div>
          <div className='d-flex'>
            <div className='single-card'>
              <p className='text'>PROCESSING TYPE</p>
              <p className='link-text'>{elements[query.page]?.processingType}</p>
            </div>
            <div className='single-card'>
              <p className='text'>PAY frequency</p>
              <p className='link-text'>{elements[query.page]?.payFrequency}</p>
            </div>
          </div>
          <div className='d-flex'>
            <div className='single-card'>
              <p className='text'>Pay Months</p>
              <p className='link-text'>{elements[query.page]?.selectedMonths}</p>
            </div>
            <div className='single-card'>
              <p className='text'>Prorate</p>
              <p className='link-text'>{elements[query.page]?.prorate}</p>
            </div>
          </div>
          <div className='d-flex'>
            <div className='single-card'>
              <p className='text'>Status</p>
              <p className='link-text'>{elements[query.page]?.status}</p>
            </div>
            <div className='single-card'>
              {/* <p className='text'>Prorate</p>
              <p className='link-text'>{elements[query.page]?.prorate}</p> */}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SingleElement;