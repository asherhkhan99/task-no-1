import React from 'react';
import '../plugins/css/index.css'


function Bar(){

    return(
        <>  
        <div className='container-fluid' >
            <div className="row p-3 " style={{backgroundColor:"#2285d9"}}>
                    <div className='textclr col-lg-6 col-md-12 col-sm-12 col-12  footerBar textalgn ' ><span className='textalgn2' >Copyright © 2018</span> |<span className='textalgn2' >  All Rights Reserved</span> | <a href="https://www.templateshub.net/" className='textclr textalgn2' >Templates Hub</a></div>
                    <div className='textclr col-lg-6 col-md-12 col-sm-12 col-12  footerBar textalgn colalgn' > <a href="" className='textclr textalgn2' > Privacy Policy </a> |<a className='textclr textalgn2' href="" > Terms & Condition</a> |<a className='textclr textalgn2' href=""> FAQ`s</a></div>
                
            </div>
            </div>
        </>
    )
}

export default Bar;