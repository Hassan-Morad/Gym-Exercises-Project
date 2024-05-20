import { Stack, Typography } from '@mui/material'
import React from 'react'
import gymIcon from "../assets/icons/gym.png"
const BodyPart = ({item,bodyPart,setBodyPart}) => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      borderTop:  bodyPart===item?"4px solid #ff2625":"",
      backgroundColor:"#fff",
      borderBottomLeftRadius:"20px",
      width:{lg:"270px",sm:"200px",xs:"120px"},
      height:"280px",
      gap:"47px",
      cursor:"pointer"
    }}
    onClick={()=>{
        setBodyPart(item)
        window.scrollTo({top:1800,left:100,behavior:"smooth"})
    }}
    >
        <img src={gymIcon} alt="gym image" style={{width:"70px" ,height:"70px" }}/>
    <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">
        {item}
    </Typography>
    </Stack>
  )
}

export default BodyPart