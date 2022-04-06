import React, { useEffect, useState } from "react";

export default function Test( {universidades} ) {

    return (
        <>
            {universidades.map( item => <p>{item.name + " | " + item.country}</p>)};
        </>
    );
};
