import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");//creates input variable and makes it as empty
  const fetchData = (value) => { //creates a function fetchdata which passes value as an argument (value is taken from the bottom lines)
    fetch("http://localhost:3600/products")//fetches an api from the net
      .then((response) => response.json())//here response is what we get from the fetch action(the entire api),now the response.json makes the entire stuff into json format(which is retrievable)
      .then((json) => {
        const result = json.filter((user) => {//here json.filter takes one set of objects at a time and assigns it to user variable and the function returns value via results
          return (//a set of conditions inorder to return the final value
            value &&//if the value is not null
            user &&//if the user is not null
            user.text &&//if the user.name is not null
            user.text.toLowerCase().includes(value)//if the value of this is not null and if it includes the value passed on through the input statement
          );
        });
        setResults(result);//setresults function is passed from home as props and here its value is updates as results,so in the home result value will be the list containing the values of the results
      });
  };

  const handleChange = (value) => {
    console.log(value)//a function that calls setinput and fetchdata functions upon any entry on the input box
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}//here when any change happens in the input box,the function will be called
      />
    </div>
  );
};