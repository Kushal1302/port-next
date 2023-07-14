import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div className='container'>
                 <div className="project-section mt-5" id="projects">
             <div className="row">
                 <div className="col-10 col-lg-10 mx-auto">
                     <div className="writing-section">
                         <p>my work</p>
                         <h1>recent <span className="text-primary">projects</span></h1>
                     </div>
                     <div className="projects">
                         <div className="card images"  style={{width: '18rem',background:'none',color:'#fff', boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}>
                             <img src={'./assets/flipkart.png'} className="card-img-top" alt="..."/>
                             <div className="card-body">
                                 <h5 className="card-title">Flipkart Clone</h5>
                                 <p className="card-text">I am working on a full stack flipkart clone project which is almost complete i have use ReactJs , Redux and MaterialUi in frontend and
                                     NodeJs and ExpressJs in backend and MongoDB for database and
                                     Experience in working with APIs Skills :- ReactJs , Redux , MaterialUi , NodeJs , ExpressJs , MongoDB
                                     , RestAPIs</p>
                                 <Link href="https://github.com/Kushal1302/full-stack-flipkart-clone.git" className="btn btn-primary pro-btn">Github Link</Link>
                             </div>
                         </div>
                         <div className="card images"  style={{width: '18rem',background:'none',color:'#fff', boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}>
                             <img src={'./assets/speech.png'} className="card-img-top" alt="..."/>
                             <div className="card-body">
                               <h5 className="card-title">Speech To Text Converter</h5>
                               <p className="card-text">This web app is use for speech to text convertion</p>
                               <a href="https://github.com/Kushal1302/speech-to-text-react.git" className="btn btn-primary pro-btn">Github Link</a>
                             </div>
                         </div>
                         <div className="card images" style={{width: '18rem', background:'none',color:'#fff', boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}>
                             <img src="./assets/expense.png" className="card-img-top" alt="..."/>
                             <div className="card-body">
                                 <h5 className="card-title">Expense Tracker</h5>
                                 <p className="card-text">Developed expense tracker project i have use ReactJs , Redux and MaterialUi in frontend and
                                     Experience in working with APIs 
                                     Skills :- ReactJs , Redux , MaterialUi
                                     , RestAPIs</p>
                                 <Link href="https://github.com/Kushal1302/expense-tracker.git" className="btn btn-primary pro-btn">Github Link</Link>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      
    </div>
  )
}

export default Project
