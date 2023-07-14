import Link from 'next/link'
import React from 'react'

const Parent = () => {
  return (
    <div className='container'>
         <div className="parent">
             
             <div className="row">
              <div className="col-lg-10 col-10 mx-auto">
                  <div className="row">
                      <div className="col-lg-5 col-10 mx-auto row1 ">
                      <h1 className="text-light fw-bolder" style={{fontSize: '45px'}}>HAY! I’M KUSHAL</h1>
                      <h1 className="text-primary" style={{fontSize: '45px'}}>I AM A DEVELOPER</h1>
                      <div className="para">
                          <p className="text-light">Looking forward to showcase my innate Potentials and Skills towards my Professional Growth and Bring glory to self and the profession.</p>
                      
                      </div>
                      <button className="btn btn-primary w-50 border-0 front-btn" > <Link href="/projects" style={{color: 'inherit', textDecoration: 'none'}}>Click Here</Link></button>
                      </div>
                      <div className="col-lg-5 col-10 mx-auto mt-5 row2">
                          <div className="row">
                              <div className="col-lg-12 col-sm-10 col-md-9 mx-auto mt-5">
                                  <img src="./assets/4k2ghg8ffto3imclo1b45t5glu.png" alt="" width="100%"/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
             </div>
          
  </div>
      
    </div>
  )
}

export default Parent
