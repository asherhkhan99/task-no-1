import React from 'react'

import Header from '../components/Headers/Header'
import Cardsec from '../sections/Cardsec'
import Mapsec from '../sections/Mapsec'
import Servfooter from '../components/Servfooter'

import {Sdata, Heading_data, Pdata, Headerdata, Headerdata_left, Headerdata_detail} from '../Data/Home_Data'


function Contactus2(){
    return(
        <>
    <div className='wraper' >
      <Header
      heading = {Headerdata[2].heading}
      l1 = {Headerdata[2].l1}
      />
      <Cardsec/>
      <Mapsec/>
      </div> 
      <Servfooter/>
     
      


        </>
    )
}

export default Contactus2;