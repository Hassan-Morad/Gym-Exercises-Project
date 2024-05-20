import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ExerciseCard from './ExerciseCard';
import { fetchData, optionsExercises } from '../utils/fetchData';

const Exercise = ({exercises,setExercises,bodyPart}) => {
 const [currentPage,setCurrentPage] = useState(1)
 const exercisePerPage=9;
 const indexOfLastExercise = currentPage * exercisePerPage;
 const indexOfFristExercise =indexOfLastExercise - exercisePerPage;
 const CurrentExercise = exercises.slice(indexOfFristExercise,indexOfLastExercise)


 useEffect(()=>{
  const fetchExerciseData = async()=>{
    let exerciseData = []
    if(bodyPart === "all"){
      exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises?limit=500",optionsExercises)
    }else{
      exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=2000`,optionsExercises)
    }
    setExercises(exerciseData)
  }
  fetchExerciseData()
},[bodyPart])


 const paginate = (e,value)=>{
    setCurrentPage(value)
    window.scrollTo({top:1800,behavior:"smooth"})
 }
  return (
    <Box
    sx={{mt:{lg:"110px"}}}
    mt="50px"
    p="20px"
    id="exercises"
    >
      <Typography variant='h3' mb="46px" >
        Showing Result :
      </Typography>
      <Stack direction="row" sx={{gap:{lg:"110px",xs:"50px"}}}
      flexWrap="wrap" justifyContent="center"
      >
      {CurrentExercise.length > 0 ?  CurrentExercise.map((exercise,index)=>(
        <ExerciseCard exercise={exercise} key={index} />
      )):
      <Typography variant='h6' mb="46px" color="#ff2625" >
       Sorry, we couldn't find any exercises matching your search. Please try different keywords or check out some other exercises.
    </Typography>
      }  
      </Stack>
      <Stack mt="110px" alignItems="center">
        {exercises.length > 9 &&(
          <Pagination  
          color="standard"
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisePerPage)}
          page={currentPage}
          onChange={paginate}
          size='larg'
          />
        )}

      </Stack>
    </Box>
  )
}

export default Exercise