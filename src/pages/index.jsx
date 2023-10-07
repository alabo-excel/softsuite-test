import MainLayout from '@/layout/MainLayout'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchElements, selectElement } from '@/store/slices/elementSlice'

export default function Home() {
  const elements = useSelector(selectElement)
  const dispatch = useDispatch()
  dispatch(fetchElements())

  useEffect(() => {
    console.log(elements)
  }, [])
  return (
    <MainLayout>
      <div>
        <div className='d-flex'>
          <div className='text'>Payroll Management</div>
          <img src="./images/icons/chevron-right.png" alt="" />
          <div className='text'>Element Setup</div>
          <img src="./images/icons/chevron-right.png" alt="" />
          <div className='bold-text'>Elements</div>
        </div>
        <div className='container'>
          <div className='bold-text'>Elements</div>
          <div className='heading'>
            <div className='d-flex'>
              <div className='search'>
                <input type="text" placeholder='Search for element' />
                <button>
                  <img src="./images/icons/search.png" alt="" />
                </button>
              </div>
              <button className='filter'>
                <img src="./images/icons/Filter.png" alt="" />
              </button>
            </div>
            <button className='create-btn '>
              Create Element
              <img src="./images/icons/plus.png" alt="" />
            </button>
          </div>
          {elements?.length >= 1 ? <div></div> :
            <div className='warning'>
              <img src="./images/warning.png" alt="" />
              <div className='d-flex'>
                <img src="./images/icons/Iconly.png" alt="" />
                <p className='bold-text'>There are no elements to display</p>
              </div>
            </div>}
        </div>
      </div>
    </MainLayout>
  )
}
