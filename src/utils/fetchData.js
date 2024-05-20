export const optionsExercises = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '185f25677amshef19d19d173d90ap16b576jsn12af3b8a74e4',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
  };

export  const youtubeOptions = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Key': '185f25677amshef19d19d173d90ap16b576jsn12af3b8a74e4',
	  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
  };



export const fetchData = async(url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();

    return data
}