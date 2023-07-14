import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Message = () => {
    const [formData , setFormData] = useState({
        name:'',
        email:'',
        subject:'',
        message:''
      })
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]:e.target.value
        })
        console.log(formData)
      }
      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          console.log(formData)
          const response = await axios.post('/api/message' , formData)
          const data = await response.data
          window.alert(data.message)
        } catch (error) {
          console.log(error.message)
        }
      }
      const style = {
        background: 'transparent',
        color: '#fff',
        ':focus':{
            background:'transparent'
            ,color:'#fff'
        },
        '::-webkit-input-placeholder':{
            color:'white'
        }
      }
  return (
    <div className='container'>
       <div id="contact" className="contact-section" >
             <div className="row mt-5" >
                 <div className="col-lg-10 col-10 mx-auto" style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}>
                     <div className="form" >
                         <div className="row p-4 text-light d-flex" >
                             
                             <div className="col-12 col-lg-12" >
                                 <h1>Lets <span className="text-primary">Discuss </span></h1>
                                 <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                             </div>
                         </div>
                         <div className="row p-4 text-light">
                             <div className="col-12 col-lg-12 mx-auto">
                                 <form onSubmit={handleSubmit}>
                                     <div className="row mx-auto">
                                         <div className="col-lg-6 col-12">
                                             <input type="text" className="form-control" placeholder="Name" name='name' onChange={handleChange} style={style}/>
                                         </div>
                                         <div className="col-lg-6 col-12">
                                             <input type="text" className="form-control" placeholder="Email" name='email' onChange={handleChange} style={style}/>
                                         </div>
                                         <div className="col-12 col-lg-12">
                                             <input type="text" className="form-control" placeholder="Subject" name='subject' onChange={handleChange} style={style}/>
                                         </div>
                                         <div className="col-12-col-lg-12">
                                                 <textarea  className="form-control" id="" cols="30" rows="5" placeholder="Your Message" name='message' style={style} onChange={handleChange}></textarea>
                                         </div>
                                         <div className="col-12 col-lg-12 mt-3 mx-auto">
                                             <button className="pro-btn btn btn-primary w-100" type='submit'>Send</button>
                                         </div>
                                     </div>
                                     
                                 </form>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
    </div>
  )
}

export default Message
