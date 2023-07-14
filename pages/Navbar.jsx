import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div className="container">
        <div className="header  ">
            <div className="row">
             <div className="col-lg-10 col-10 mx-auto">
                 <nav className="navbar navbar-expand-lg  " >
                     <div className="container-fluid" >
                       <Link className="navbar-brand text-light" href="/">KUSHAL <img style={{width:'30px'}} src="./assets/indian-flag-4337837.png" alt=""/></Link>
                        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         
                         <input type="checkbox" id="checkbox"/>
                         <label for="checkbox" className="toggle">
                             <div className="bars" id="bar1"></div>
                             <div className="bars" id="bar2"></div>
                             <div className="bars" id="bar3"></div>
                         </label>
                       </button>
                       
                       <div className="collapse navbar-collapse   " id="navbarSupportedContent">
                         <ul className="navbar-nav me-0 mb-2 mb-lg-0 text-light ms-auto">
                           <li className="nav-link"><Link href="/">Home</Link></li>
                           <li className="nav-link"><Link href="/">Projects</Link></li>
                           <li className="nav-link"><Link href="/">Contact</Link></li>
                           <li className="nav-link"><Link href="https://drive.google.com/file/d/1_97qBfp2v_AIT5kDLOr8McORp469k_Er/view?usp=sharing" target="_blank">Resume</Link></li>
                           <li className="nav-link"><Link href="https://www.linkedin.com/in/kushal-kumar-97a085233/" target="_blank">Linkedin</Link></li>
                           <li className="nav-link"><Link href="http://github.com/Kushal1302" target="_blank">Github</Link></li>
                           <li className="nav-link"><Link href="https://api.whatsapp.com/send/?phone=919664386233&text&type=phone_number&app_absent=0">WhatsApp</Link></li>
                         </ul>
                       </div>
                     </div>
                   </nav>
             </div>
            </div>
         </div>
    </div>
  )
}

export default Navbar
