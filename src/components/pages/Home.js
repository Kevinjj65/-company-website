import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { useState } from "react";


import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";

function Home() {
  
  const [results, setResults] = useState([]);
  return (
    
    <>

     <Navbar/>  
    <div className="App">
      <div className="search-bar-container">
         <SearchBar setResults={setResults} /> {/*to Searchbar the set results is passed inorder to make changes in results*/}
         {results && results.length > 0 && <SearchResultsList results={results} />}{/*results is passed onto the SearchResykr  */}
      </div>
    </div>
      {/* <HeroSection /> */}
       <Cards />
      <Footer />
    </>
  );
}

export default Home;