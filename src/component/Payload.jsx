import React from 'react'
import myImg from "../Images/1.png"
import myImg2 from "../Images/2.png"
import myImg3 from "../Images/3.png"
const Payload = props => {
  return (
    <div>
       <div id='section1'>
     <img id='section1_1' src={myImg} alt='img' width="20%" />
       <div  id='section1_2' >
         <h5> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h5>
         <ul>
  <li>    C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
  </li>
  <li>    C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
  </li>
</ul>  
     <div>
    <img  src={myImg2} alt='img'  width="80%" />
   
    <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
    </div>
       </div>
       </div>

       <div id='section2'>
  <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
     <img className='myImg3' src={myImg3} alt="img"  width="80%"  />
     
       </div>
       <div className='line'></div>
        <div id='section3'>
        <br></br>
             <h6>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h6>
             <p>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
        </div>
    </div>  
  )
}

export default Payload