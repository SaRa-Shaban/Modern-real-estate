import React from 'react'
import h1 from "./../../images/h1.png"
import h2 from "./../../images/h2.png"
import h3 from "./../../images/h3.png"
import h4 from "./../../images/h4.png"
import h6 from "./../../images/h6.png"



export default function Featured() {
  return (
    
    <>
      {/* Featured  // services*/}
      <div className="container">
        <div className="row py-5">
          <div className="col">
            <div className='text-center bg-white shadow   rounded-3 p-3 mb-5'>
              <div className='w-50 m-auto'>
                <img src={h1} width='100%' alt="" />
              </div>
              <h6 className='fw-bold pt-3 pb-0 mb-1'>Family House</h6>
              <p className='text-muted pt-0'>122 Property</p>
            </div>
          </div>


          <div className="col">
            <div className='text-center bg-white shadow   rounded-3 p-3 mb-5'>
              <div className='w-50 m-auto'>
                <img src={h2} width='100%' alt="" />
              </div>
              <h6 className='fw-bold pt-3 pb-0 mb-1'>Villa/ House</h6>
              <p className='text-muted pt-0'>122 Property</p>
            </div>
          </div>

          <div className="col">
            <div className='text-center bg-white shadow   rounded-3 p-3 mb-5'>
              <div className='w-50 m-auto'>
                <img src={h3} width='100%' alt="" />
              </div>
              <h6 className='fw-bold pt-3 pb-0 mb-1'>Apartment</h6>
              <p className='text-muted pt-0'>720 Property</p>
            </div>
          </div>

          <div className="col">
            <div className='text-center bg-white shadow   rounded-3 p-3 mb-5'>
              <div className='w-50 m-auto'>
                <img src={h4} width='100%' alt="" />
              </div>
              <h6 className='fw-bold pt-3 pb-0 mb-1'>Office & Studio</h6>
              <p className='text-muted pt-0'>80 Property</p>
            </div>
          </div>

          <div className="col">
            <div className='text-center bg-white shadow   rounded-3 p-3 mb-5'>
              <div className='w-50 m-auto'>
                <img src={h6} width='100%' alt="" />
              </div>
              <h6 className='fw-bold pt-3 pb-0 mb-1'>Villa & Condo</h6>
              <p className='text-muted pt-0'>300 Property</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
