import React, { useEffect, useState } from "react";
import Test from "./Test";

export default function TestContainer() {

    const [universidades, setUniversidades] = useState([]);

    useEffect(() => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
            
          fetch("http://universities.hipolabs.com/search?country=Argentina", requestOptions)
            .then(response => response.json())
            .then(result => setUniversidades(result))
            .catch(error => console.log('error', error));

    }, []);
      

    return (
        <>
            <Test universidades={universidades}/>
        </>
    );
};
