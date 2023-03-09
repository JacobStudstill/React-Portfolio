import Container from '@mui/material/Container'
import React, { Component } from 'react';
import imageName from  "../../assets/pfp.jpg"


function Body() {
return (
	<Container maxWidth="lg">
        <div className='about'>
                    <p>
                        <span><img src={imageName}/></span> Hello, my name is Jacob Studstill. This page will provide information on who I am, examples of my work that I have
                        created or have been apart of, and how to contact me. This portfolio will constantly be changing so feel free to check in                        every couple of weeks to see new additions to the page.<br /> My background is in Information technology. I am currently enrolled in the University of Central Florida Full-Stack Development Coding Bootcamp which will come to an end in March of 2023. I will receive a UCF Certificate of Completion for completing the bootcamp. At that point I will be fully equipped for front and back end development. This means I will be proficient but not limited to 
                        : HTML, CSS, JavaScript, React.js, MySQL, Bootstrap, MongroDB, Express.js. I will be completing my Associates Degree in Programming & Analysis in the Fall of 2023. I will then obtain my bachelor degree for Programming & Analysis in the Fall of 2024. <br /> I currently reside in Winter Park, FL. Following the UCF Full-Stack Bootcamp I will be seeking out work in the Greater Orlando area. I will be searching for full-stack, front-end, and back-end developement jobs. Check out the contact tabs at the bottom of the page to see more of the projects I am working on and
                        reach out if you have any questions.
                    </p>
        
        </div>
	</Container>
    );
}
export default Body;