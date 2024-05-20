import React, { useEffect, useState } from "react";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercise from "../components/SimilarExercise";
import Details from "../components/Details";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchData, optionsExercises, youtubeOptions } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetails,setExerciseDetails] = useState({});
  const [exerciseVideo,setExerciseVideo] = useState([]);
  const [targelMuscleExercise,setTargelMuscleExercise] = useState([]);
  const [equipmentMuscleExercise,setEquipmentMuscleExercise] = useState([]);

  const {id} = useParams();
  useEffect(()=>{
    const fetchExercisesData = async()=>{
      const exerciseDBUrl = `https://exercisedb.p.rapidapi.com`
      const youtubeDBUrl = `https://youtube-search-and-download.p.rapidapi.com`
      const exerciseDetailsData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`,optionsExercises)
      setExerciseDetails(exerciseDetailsData);

      const exerciseVideoData = await fetchData(`${youtubeDBUrl}/search?query=${exerciseDetailsData.name}`,youtubeOptions)
      setExerciseVideo(exerciseVideoData.contents)
      const targelMuscleExerciseData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailsData.target}`,optionsExercises)
      setTargelMuscleExercise(targelMuscleExerciseData)
      
      const equimentExercisesData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailsData.equipment}`, optionsExercises);
      setEquipmentMuscleExercise(equimentExercisesData);
    }
    fetchExercisesData()
  },[id])

  return (
    <Box>
      <Details exerciseDetails={exerciseDetails}  />
      <ExerciseVideos exerciseVideo={exerciseVideo} name={exerciseDetails.name}/>
      <SimilarExercise equipmentMuscleExercise={equipmentMuscleExercise} targelMuscleExercise={targelMuscleExercise} />
    </Box>
  );
};

export default ExerciseDetail;
