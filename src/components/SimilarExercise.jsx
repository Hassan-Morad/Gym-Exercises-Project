import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader';

const SimilarExercise = ({targelMuscleExercise,equipmentMuscleExercise}) => {
  return (
    <Box sx={{mt:{lg:"100px",x:"0"}}}>
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
        <Stack direction="row" p="2px" position="relative">
        {targelMuscleExercise.length !== 0 ? <HorizontalScrollbar data={targelMuscleExercise} /> : <Loader />}
        </Stack>
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p:"2px", position: 'relative' }}>
      {equipmentMuscleExercise.length !== 0 ? <HorizontalScrollbar data={equipmentMuscleExercise} /> : <Loader />}
    </Stack>
    </Box>
  )
}

export default SimilarExercise