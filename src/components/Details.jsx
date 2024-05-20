import { Button, Stack, Typography } from '@mui/material';
import React from 'react'

import bodyPartIcon from "../assets/icons/body-part.png"
import equipmentIcon from "../assets/icons/equipment.png"
import targetIcon from "../assets/icons/target.png"

const Details = ({exerciseDetails}) => {
    const {bodyPart,target,name,equipment,gifUrl} = exerciseDetails;

    const extraDetails = [
        {
            icon:bodyPartIcon,
            name:bodyPart
        },
        {
            icon:targetIcon,
            name:target
        },
        {
            icon:equipmentIcon,
            name:equipment
        }
    ]

    return (
    <Stack gap="60px" sx={{flexDirection:{lg:"row"},p:"20px",alignItems:"center"}}>
        <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
        <Stack sx={{gap:{lg:"35px",xs:"20px"}}}>
            <Typography variant="h3">
                {name}
            </Typography>
            <Typography variant="h6">
            Exercises keep you strong. {name} {' '}
                is one of the best exercises to target your {target}. it will help you 
                improve your mood and gain energy.
            </Typography>
            {extraDetails.map((item)=>(
                <Stack key={item.name} gap="24px" direction="row" alignItems="center">
                    <Button sx={{background:"#fff2db",width:"100px",height:"100px",borderRadius:"50%"}}>
                        <img src={item.icon} alt={bodyPart} style={{width:"50px", height:"50px"}} />
                    </Button>
                    <Typography textTransform="capitalize" variant='h5'>
                        {item.name}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    </Stack>
  )
}

export default Details