import React from 'react'
import img1 from '../../img/slide-1.jpg'
import img2 from '../../img/slide-2.jpg'
import img3 from '../../img/slide-3.jpg'
import img4 from '../../img/slide-4.jpg'


function Home3(){
    return(
        <>
        <div className="slider index-3">
    

        <div className="owl-main owl-carousel owl-theme">
 
       <div className="item"> 
       <img className="d-block w-100" src={img1} alt="First slide"/>

        <div className="caption d-md-block">
       <div className="display">Think Big Do Creative Grow Business </div>
       <div className="content">Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
       <a href="about-us-3.html" className="view_more" title="View More">View More</a>
       <a href="contact-us-1.html" className="view_more contact_us" title="Contact Us">Contact Us</a>
       </div>

       </div>


       <div className="item"> 
       <img className="d-block w-100" src={img2} alt="Second slide"/>
       <div className="caption d-md-block">
       <div className="display">Give Wings To Your Business </div>
       <div className="content">Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
       <a href="about-us-3.html" className="view_more" title="View More">View More</a>
       <a href="contact-us-1.html" className="view_more contact_us" title="Contact Us">Contact Us</a>
       </div>

       </div>


       <div className="item"> 
       <img className="d-block w-100" src={img3} alt="Third slide"/>
       <div className="caption d-md-block">
       <div className="display">We Are Your Digital Partners </div>
       <div className="content">Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
       <a href="about-us-3.html" className="view_more" title="View More">View More</a>
       <a href="contact-us-1.html" className="view_more contact_us" title="Contact Us">Contact Us</a>
       </div>

       </div>


       <div className="item"> 
       <img className="d-block w-100" src={img4} alt="Fourth slide"/>
       <div className="caption d-md-block">
       <div className="display">We Are Bizler We Make Brands Shine </div>
       <div className="content">Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
       <a href="about-us-3.html" className="view_more" title="View More">View More</a>
       <a href="contact-us-1.html" className="view_more contact_us" title="Contact Us">Contact Us</a>
       </div>
       </div>   
           

       </div>



 </div>
            
        </>
    )
}

export default Home3;