import {useState} from 'react';

const FilmReleaseForm = ({onMovieSubmit}) => {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

    const handleMovieChange = (event) => {
        //console.log(event.target.value);
        setName(event.target.value)
    }
    const handleUrlChange = (event) => {
        //console.log(event.target.value);
        setUrl(event.target.value)
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const movieToSubmit = name.trim();
        const urlToSubmit = url.trim();
        if(!movieToSubmit || !urlToSubmit){
            return
        }
    
    onMovieSubmit({
        name: movieToSubmit,
        url: urlToSubmit
    });
    console.log("function is being called");
    setName("");
    setUrl("");
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
            type="text"
            placeholder="Movie Name:"
            value = {name}
            onChange = {handleMovieChange}
            />
            <input
            type="text"
            placeholder="Url:"
            value = {url}
            onChange = {handleUrlChange}
            />
            <input
            type="submit"
            value="Add Movie"
            />
        </form>
    )
}
export default FilmReleaseForm;