import React, { useEffect, useState } from 'react'
import axios from "../../Utlis/axios"
import requests from "../../Utlis/requiste.js"
import "./Banner.css"
function Banner() {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                console.log(request)
                setMovie(
                    request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                    ]
                );
            } catch (error) {
                console.log("error:", error);
            }
        })(); // ✅ close async IIFE properly
    }, []); // ✅ close useEffect properly
    return (
        <>

        </>
    )
}


export default Banner
