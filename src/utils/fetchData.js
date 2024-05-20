export const optionsExercises = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7528adb68bmsh6e978a4aa80454cp1931edjsnd68f745e7888',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
  };

export  const youtubeOptions = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Key': '7528adb68bmsh6e978a4aa80454cp1931edjsnd68f745e7888',
	  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
  };



export const fetchData = async(url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();

    return data
}