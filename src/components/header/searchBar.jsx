import React, {useState} from 'react';
import youtube, {baseParams} from '../../apis/youtube';
import '../Style.css';
import search from '../../media/search.png'

const SearchBar = props => {
    //Props
    const {
        updateResponse
    } = props;

    //Hooks for managing the state of the typed text
    const [searchTerm, setSearchTerm] = useState("");
    const searchHandler = event => {
        setSearchTerm(event.target.value);
    };

    //Submit Handler, it will search for the given query
    const submitHandler = (event, qsearch) => {
        //Prevent page change
        event.preventDefault();
    
        //Do the query and get update the response
        youtube.get('/search', {
          params: {
            ...baseParams,
            q: qsearch
          }
        }).then(response => {
            updateResponse(response)
        });
        
        //Prevent page change
        return false;
    }

    //Return
    return (
        <div className="SearchBar">
            <form className="SearchBarForm"onSubmit={(event) => submitHandler(event, searchTerm)}>
                <input className="SearchBarInput" type="text" value={searchTerm} onChange={searchHandler}/>
                <input className="SearchBarIcon selectDisable" type="image" id="image" alt="Login" src={search}/>
                <input type="submit" hidden/>
            </form>
        </div>
    );
}

export default SearchBar;