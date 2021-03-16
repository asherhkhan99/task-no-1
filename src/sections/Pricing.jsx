import React from 'react'
import Pricingcard from '../components/Pricing_card'
import {Sdata, Heading_data, Pdata} from '../Data/Home_Data'

function Pricing(){
    return(
        <>
        <section id="pricing">
        <div className="container">           
                <div className="section_heading">
                    <h2>{Heading_data[1].title1} <span>{Heading_data[1].title2}</span></h2>
                    <div className="separator">
                        <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        </ul>
                    </div>
                    <div className="heading_content">
                    {Heading_data[1].headingcontent}
                    </div>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-6 col-xs-12 content_sec'>
                <div className='row' >
                
                            <Pricingcard 
                            heading={Pdata[0].heading}
                            price={Pdata[0].price}
                            card="price_card"
                            l1="deactive"
                            l2="deactive"
                            l3="deactive"
                            
                            />

                            <Pricingcard 
                            heading={Pdata[1].heading}
                            price={Pdata[1].price}
                            card = "price_card ultimate"
                           
                            />

                            <Pricingcard
                            heading={Pdata[2].heading}
                            price={Pdata[2].price} 
                            card="price_card"
                            l3="deactive"
                            
                            />        

                </div>
                </div>

                            
                    <div/>


             </div>
             <div className="clearfix"></div>        
        </section>



        </>
    )
}

export default Pricing;