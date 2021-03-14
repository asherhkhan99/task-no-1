import React from 'react';


function Footer(){
    return(
        <>
        <div className='row footeralgn' style={{backgroundColor:"#2285d9"}} >
            {/* <div className='col'></div> */}
            <div className='container col footer ' >
                <a className='p-2 textclr ' title='Home' href="">Home</a>
                <a className='p-2 textclr ' title='About Us' href="">About Us</a>
                <a className='p-2 textclr ' title='Services' href="">Services</a>
                <a className='p-2 textclr ' title='Blog' href="">Blog</a>
                <a className='p-2 textclr ' title='Pages' href="">Portfolio</a>
                <a className='p-2 textclr ' title='Contact Us' href="">Contact Us</a>
                <hr></hr>
            </div>
            {/* <div className='col'></div> */}
        </div>
        </>
    )
}

export default Footer;