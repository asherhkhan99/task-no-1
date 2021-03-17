import React from 'react'
import img1 from '../img/team-member-pic.jpg'
import img2 from '../img/team-member-pic2.jpg'
import img3 from '../img/team-member-pic4.jpg'
import img4 from '../img/team-member-pic3.jpg'

const Sdata = [  
    {
        pic: img1,
        name: "Alec Thompson" ,
        position:"Developer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        pic: img4,
        name: "Tania Andrew" ,
        position:"Designer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        pic:img3,
        name: "Christian Mike" ,
        position:"Developer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        pic:img2,
        name: "Rebecca Stormville" ,
        position:"Designer" ,
        content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
]

const Heading_data = [
    {
        title1:"Our ",
        title2:"Team",
        headingcontent:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        title1:"Our",
        title2:"Pricing",
        headingcontent:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

    }

]
//pricingdata
const Pdata = [
    {
        heading : "Personal",
        price : "9$"
    },
    {
        heading : "Ultimate",
        price : "199$"
    },
    {
        heading : "Business",
        price : "99$"
    }

]

//header_data

const Headerdata =[
    {heading:"Services",l1:"Services" },
    // {heading:"Services Detail",l1:"Services", l2:"Service Details"},
    {heading: "About Us",l1: "About Us" },
    {heading: "Contact Us", l1: "Contact Us" },
    {heading: "Portfolio 2 Column", l1: "Portfolio 2 Column"},
    {heading: "Portfolio 3 Column", l1: "Portfolio 3 Column"},
    {heading: "Blog 2 Columns", l1:"Blog 2 Columns"},
    {heading: "Blog 3 Columns", l1:"Blog 3 Columns"},
    {heading:"Blog Right Sidebar", l1:"Blog 3 Columns"},
    {heading:"Blog Left Sidebar", l1:"Blog 3 Columns"}
    // {heading: "Portfolio Details",liClass:"breadcrumb-item active"}
]

const Headerdata_left=[
    {heading: "About Us", l1:"About Us"},
    {heading: "Services", l1:"Services"},
    {heading: "Blog 3 Column", l1:"Blog 3 Column"}
]

const Headerdata_detail=[
    {heading:"Blog Detail", l1:"Blog"},
    {heading:"Service Detail", l1:"Services"},
    {heading:"Portfolio Detail", l1:"Portfolio"}
]


export {Sdata, Heading_data, Pdata, Headerdata, Headerdata_left, Headerdata_detail}