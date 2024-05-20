import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HeroBannerImg from "../assets/images/banner.jpg"
const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:"212px",xs:"70px"},ml:{sm:"50px"}}} 
    position="relative"
    p="20px"
    >
        <Typography fontSize="20px" fontWeight="600" color="#ff2625"
         >
            Fitness Club
        </Typography>
        <Typography fontWeight="700" sx={{
            fontSize:{ lg:"44px",xs:"40px"}
            }} 
            mb="23px"
            mt="30px"
            >
            Sweat, Smile <br/> And Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb="20px">
            Check out the most effective exercises
        </Typography>
        <Button  variant="contained" color='error'href='#exercises' >Explore Exercise</Button>
        <Typography
        fontWeight="600"
        color="#FF2526"
        sx={{
            opacity:"0.1",
            display:{lg:"block"}
        }}
        fontSize="200px"
        mt="35px"
        className='exercises-shadow'
        >
            Exercises
        </Typography>
        <img src={HeroBannerImg} alt="bsnner Image" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner