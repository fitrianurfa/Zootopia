import React, { useState } from 'react';
import {  getDocs, collection, where, query } from "firebase/firestore"; 


const Filter =()=> {
    const [results, setResults] = useState([])
    const [query, setQuery] = useState("")

    function search(e){
        e.preventDefault()
        setQuery(e.target.value)
        const firebaseConfig = {...}

    const app = initializeApp(firebaseConfig)


    const collection_ref = collection(, 'countries')
    const q = query(collection_ref, where("name", ">=", "A"), where("name", "<=", "A\uf8ff"))
    const doc_refs = await getDocs(q)

    const res = []

    doc_refs.forEach(country => {
        res.push({
            id: country.id, 
            ...country.data()
        })
    })

    setResults(res)
    }

    return (
        <div className="w-full max-w-xl flex mx-auto p-20 text-xl">
            <input
                type="text"
                className="w-full placeholder-gray-400 text-gray-900 p-4"
                placeholder="Search"
                onChange={search}
                value={query}
            />
            <button className="bg-white p-4">🔍</button>
        </div>
    );
};

export default Filter;