import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./SearchResult.css";

export const SearchResult = ({ result, path }) => {
  const navigate = useNavigate();//initialising useNavigate

  const handleClick = () => {
    navigate(path);//calling useNavigate function
  };

  return (
    <div
      className="search-result"
      onClick={handleClick}//here we cannot use Link inside onclick,it should call a function only,hence we use useNavigate
    >
      {result}
    </div>
  );
};
