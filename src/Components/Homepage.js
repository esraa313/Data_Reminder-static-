import React from 'react';
import './../Components/Homepage.css';


const  Homepage = (props) =>  {
  console.log(props)
  return (

  <div >
  <div className='d-flex ps-3 block' >

  <img src={props.img} style={{width:'62px', borderRadius:'32px',height:'52px'}}></img>
    <div className='ps-3'>
      <p>{props.Name}</p>
      <p>{props.timing}</p>
    </div>
    </div>
    <hr className='ms-5 me-5 '></hr>
    

</div>



   )
}
export default Homepage