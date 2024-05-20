import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchData, optionsExercises } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercise = ({bodyPart,setBodyPart,setExercises}) => {
  const [search,setSearch] = useState("");
  const [bodyParts,setBodyParts] = useState([]);

  useEffect(()=>{
    const fechExerciseData = async()=>{
      const bodyPartData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",optionsExercises)
    setSearch("")
    setBodyParts(["all",...bodyPartData])
    }
    fechExerciseData()
  },[])

  const handleSearch = async()=>{
    const exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises?limit=500",optionsExercises)

    const searchedExercise = exerciseData.filter((exercise)=>exercise.name.toLowerCase().includes(search)
                                                          ||exercise.target.toLowerCase().includes(search)
                                                          ||exercise.equipment.toLowerCase().includes(search)
                                                          ||exercise.bodyPart.toLowerCase().includes(search)
  )
  setExercises(searchedExercise)
  }

  return (
    <Stack justifyContent="center" alignItems="center" 
    mt="37px"
    p="20px"
    sx={{mt:{xs:"80px"}}}
    >
      <Typography 
      fontWeight="700"
      sx={{
        fontSize:{lg:"44px",xs:"30px"},
      }}
      mb="50px"
      textAlign="center"
      >
        Awesome Exercise you <br/>
         should know
      </Typography>
      <Box 
      position="relative"
      mb="72px"
      >
        <TextField
        sx={{
          input:{
            fontWeight:"700",
            border:"none",
            borderRadius:"4px"
          },
          width:{lg:"1170px",xs:"350px"},
          background:"#fff",
          borderRadius:"40px"
        }}
        height="76px"
        value={search}
        onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
        placeholder='Search Exercises'
        type='text'
        />
        <Button className='search-btn'
        sx={{
          bgcolor:"#FF2526",
          color:"#fff",
          textTransform:"none",
          width:{lg:"150px" , xs:"80px"},
          right:"0",
          fontSize:{lg:"20px",xs:"14px"},
          height:"56px",
          position:"absolute"
        }}
        onClick={()=>handleSearch()}
        >
          Search</Button>
      </Box>
      <Box width="100%"  position="relative" p="20px">
      <HorizontalScrollbar bodyParts  data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercise