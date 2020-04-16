import React, { useState,useEffect } from "react";


export const FetchIt = (querie , dependencies) => {
    const [url,setUrl] = useState(`https://api.giphy.com/v1/gifs/search?api_key=PVqqjn4dsAZPecA0vgHzKuq9Ui4G4uQ5&q=${querie}&limit=25&offset=0&rating=G&lang=en`);
    const [isLoading,setIsloading] = useState(true);
    const [datas,setDatas] = useState(null);

    const fetchDatas = async () => {
        setIsloading(true);
        await fetch(url)
        .then(response => response.json())
        .then(data => {
                setDatas(data);
                setIsloading(false);
            })
    }
    
    useEffect(() =>{
        fetchDatas();

    },dependencies)

    return [isLoading, datas];
}