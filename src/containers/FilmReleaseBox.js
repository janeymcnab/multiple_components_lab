import { useState } from "react";
import FilmReleaseList from "../components/FilmReleaseList";
import ViewMore from "../components/ViewMore";
import "../App.css"
import FilmReleaseForm from "../components/FilmReleaseForm";

const FilmReleaseBox = () => {

    const [films, setFilms] = useState(
        [
            {
              id: 1,
              name: "Spider-Man: Into the Spider-Verse",
              url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
            },
            {
              id: 2,
              name: "Life Itself",
              url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
            },
            {
              id: 3,
              name: "Mary Queen of Scots",
              url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
            },
            {
              id: 4,
              name: "The Lego Movie 2: The Second Part", 
              url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
            },
            {
              id: 5,
              name: "Captain Marvel",
              url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
            }
          ]
    

    )
    
    const addMovie = (submittedMovie) => {
      submittedMovie.id = Date.now();
      const updatedFilms = [...films, submittedMovie];
      setFilms(updatedFilms);
    }

    return (
        <>
        <div className = "film-release-box">
        <h1>Upcoming Film Releases for UK</h1>
        <hr></hr>
        <FilmReleaseForm onMovieSubmit = {(movie)=> addMovie(movie)}/>
        <FilmReleaseList films = {films}/>
        <ViewMore viewMoreUrl = "https://www.imdb.com/calendar/?region=gb"/>
        </div>
        </>
   );
}

export default FilmReleaseBox;