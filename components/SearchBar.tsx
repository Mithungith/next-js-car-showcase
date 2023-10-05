"use client";
import React, { useState } from 'react'
import { SearchManufacture } from '.'

const SearchBar = () => {
    const [manufacture,setManufacture]= useState("");
    function handleSearch(){

    }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacture manufacture={manufacture} setManufacture={setManufacture}/>
        </div>
    </form>
  )
}

export default SearchBar
