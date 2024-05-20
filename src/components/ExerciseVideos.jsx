import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ExerciseVideos = ({exerciseVideo,name}) => {
    console.log(exerciseVideo);
  return (
    <Box sx={{marginTop:{lg:"160px",xs:"30px"}}} mb="30px" p="20px">
        <Typography variant='h3' mb="33px">
            Watch <span style={{color:"#ff2925", textTransform:"capitalize"}} >{name}{' '}</span>exercise videos
        </Typography>
        <Stack justifyContent="center" flexWrap="wrap" alignItems="center"
        sx={{flexDirection:"row",gap:{lg:"80px",sm:"50",xs:"20px"}}}
        >
            {exerciseVideo.slice(0,6).map((item,index)=>(
                <a 
                key={index}
                className='exercise-video'
                target='_blank'
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                >
                    <img src={item.video.thumbnails[0].url} alt={item.video.title} loading='lazy'/>
                    <Box>
                        <Typography color="#000" variant='h5'>
                            {item.video.title}
                        </Typography >
                        <Typography color="#000" variant='h6'>
                            {item.video.channelName}
                        </Typography>
                    </Box>
                </a>
            ))}
        </Stack>
    </Box>
  )
}

export default ExerciseVideos