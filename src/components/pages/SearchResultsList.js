//this component is used to make changes to the dropdown box whenever any change happens
import "./SearchResultList.css";
import { SearchResult } from "./SearchResult.js";

export const SearchResultsList = ({ results }) => {//results is passed onto from the searchbar
  return (
    <div className="results-list">
      {results.map((result, id) => {//result's entire array is mapped and each one is given to result and they all have their own respective ids(not from and API)
        return <SearchResult result={result.text} path={result.path} key={id}/>;//ot woll return by called SearchResult and will show about its name
      })}
    </div>
  );
};