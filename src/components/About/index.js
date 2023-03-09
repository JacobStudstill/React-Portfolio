import Container from '@mui/material/Container'
import React from 'react';
import imageName from "../../assets/pfp.jpg"


function Body() {
    return (
        <Container maxWidth="lg">
            <section className='page-section'>
                <div className='about'>
                    <img className="left" src={imageName} />
                    <h2 className='middle'>About Me</h2>
                    <p>
                        Hello, my name is Jacob Studstill. I am an inspiring Full-Stack Developer enrolled in the University of Central Florida Full-Stack Development Coding Bootcamp which will come to an end in March of 2023. I have had my hand in applications which include E-Commerce websites, social media APIs,
                        password generators, and employee tracking systems. Following the bootcamp I will be searching for full-stack, front-end, and back-end developement jobs. The contact portion of the page will link to my GitHub to see the current projects I am working on and
                        reach out if you have any questions.
                    </p>

                </div>
            </section>
        </Container>
    );
}
export default Body;