import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ArtistsGrid from "../components/ArtistsGrid";
import axios from "axios";


const Artist = () => {
  return (
    <>
    <SearchBar />
    <ArtistsGrid />
    </>
  )
}

export default Artist