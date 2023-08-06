import React, { useState } from 'react'
import Homepage from './Homepage';
import './../Components/Homepage.css';
import pic1 from './../images/pic1.jpg';
import pic2 from './../images/pic2.jpg';
import pic3 from './../images/pic3.jfif';
import pic4 from './../images/pic4.jpg';
import pic5 from './../images/pic5.jpg';



const  Data_reminder = () => {
  const data = [
    {Name : "Ola" , timing :"5 pm" , img : pic1 },
    {Name : "Yasmin" , timing :"8 am" , img : pic2  },
    {Name : "jassar" , timing :"7 am" , img:pic3 },
    {Name : "Latifa" , timing :"1 pm" , img:pic4 },
    {Name : "Diab" , timing :"1.30 pm" , img:pic5 },
 
  ]
  const [ person , useperson]  = useState (data)  ;    
  console.log(person);
  const DeleteFunc = () =>{
    document.getElementById('NoReminder').style.display='block';
    useperson([])
  }  
  const showFunc = () =>{
    document.getElementById('NoReminder').style.display='none';
    useperson(data);
  }
  return (
    <div className='container'>
        <div style={{marginTop:'4%',marginBottom:'4%' , marginRight:'15%' , marginLeft:'15%'}}>
        <h4 className="row pt-5  mb-4 numberOfReminders" style={{paddingLeft:'2.5%'}}>
      You have {person.length} reminders today
    </h4>
    <div className='home pt-3'  style={{borderRadius:'33px'}}>

    {
        person.map((item,index) =>{
  return (

    <Homepage Name={item.Name} timing={item.timing} img={item.img} key={index} id='homepage'></Homepage>
  )
  })}
  <div id='NoReminder' className='pb-3'> No reminders today </div>
    </div>
    </div>

    <div className='d-flex  justify-content-around mb-4'>
  <button className='button' onClick={ ()=>{DeleteFunc() } }>Delete All</button>
  <button className='button' onClick={ ()=>{showFunc() } }>Show All</button>

</div>

    
</div> 
  
  )}
export default Data_reminder