const API_KEY = process.env.REACT_APP_API_KEY
const requistes = {
    fetchTrending: "/treending/all/week?api_key=${API_KEY}&Language-en-US",

    fetchNetflixOriginals: "/discover/tv?api_key=${API_KEY}&with_networks=213",

    fetchTopRatedMovies: "/movie/top_rated?api_key=${API_KEY}&Language-en-US",
    fetchActionMovies: "/discover/movie?api_key=${API_KEY}&with_gennes=28",
    fetchComedyMovies: "/discover/movie?api_key=${API_KEY}&with_gennes=35",
    fetchDocmunteriesMovies: "/discover/movie?api_key=${API_KEY}&with_gennes=99",
}



// https://api.themoviedb.org/3/discover/tv?api_key=281d8efb993a5b62c59d11bec5c65cba&with_networks=213
export default requistes