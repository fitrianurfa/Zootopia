import React, {useState, useEffect} from "react"
import (useLocation, Link) from "react-router-dom";
import {db} from "../../../config/firebase/index"

const Search = () => {
  const [animal, setAnimal] =({});

  const useQuery =() => {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  let search = query.get("name");
  console.log("search", search);

  useEffect(()=> {
    searchData();
  }, [search])

  const searchData =() => {
    fireDb.child("animals").orderByChild("name").equalTo(search).on("value", (snapshot)=> {
      if(snapshot.val()) {
        const animal = snapshot.val();
        setAnimal(animal);
      }
    })
  }

  return (
    <div>
      <h2>Search</h2>
    </div>
  )
}

export default Search;