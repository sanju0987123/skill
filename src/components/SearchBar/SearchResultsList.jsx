import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";
import React from "react";
// import Header from "components/Header";
import { useNavigate } from "react-router-dom";
import { Img } from "components";
const SearchResultsList = ({ searchResults }) => {
 const navigate = useNavigate();
  const handleCardClick = (email) => {
    console.log('Email clicked:', email);
    navigate("/userprofileone", { state: { email } });
    // Implement your logic to use the email, such as opening a modal or sending an email
  };  
  return (

    <div className="results-list absolute bg-white-A700  overflow-scrol left-9% top-4  ">
      {searchResults.map((result) => (
        
        
        <div className=" subresult-list mb-1  " key={result.$id}>
         
          <p className="mb-1 cursor-pointer text-xl" onClick={() => handleCardClick(result.email)}>{result.username}</p>
          
          <p className="mb-1 text-xl cursor-pointer" onClick={() => handleCardClick(result.email)}>Role: {result.role}</p>
        <hr />
        </div>
        
        ))}
    </div>
    
    );
};

export default SearchResultsList;






