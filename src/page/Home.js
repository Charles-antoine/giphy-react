import React, { useState, useEffect } from "react";
import {Gifcontainer} from "../component/Gifcontainer";
import  Alert  from "../component/Alert";


const Home = () => {
    const querieBase = 'search';
    const [search, setSearch] = useState('');
    const [querie ,setQuerie] = useState(querieBase);
    const [datas,setDatas] = useState(null);
    const [isLoading,setIsloading] = useState(true);
    const childRef = React.createRef();

    const fetchDatas = async () => {
        setIsloading(true);
        await fetch(`https://api.giphy.com/v1/gifs/search?api_key=PVqqjn4dsAZPecA0vgHzKuq9Ui4G4uQ5&q=${querie}&limit=25&offset=0&rating=G&lang=en`)
        .then(response => response.json())
        .then(data => {
            setDatas(data);
            setIsloading(false);
        })
    }

    const embedClick = () => {
        console.log('YEP');
        console.log(childRef);
        childRef.current.showPopup();
    }


    useEffect(()=>{
        if(querie === ''){setQuerie(querieBase);}
        fetchDatas();
        // console.log(querie);
    },[querie])



    return (
        <div className="container">
            <div className="form">
                    <input type="text" value={search} placeholder="Make your search" 
                    onChange={e => setSearch(e.target.value)}
                    onKeyPress={(e)=>{if(e.key === 'Enter'){setQuerie(search)}}}
                    />
                    
                    <button className="submit" onClick={(e)=>{setQuerie(search)}}>SUBMIT</button>
            </div>
            <Alert ref={childRef} />
            <div className="gif">
                {!isLoading && datas!= null && datas.data.length>=1 && datas.data.map((data,index) => (
                    <Gifcontainer key={index} triggerParentUpdate={embedClick} url={data.url} link={data.images.original.url} embed_url={data.embed_url} title={data.title}/>
                ))}
                {isLoading && <h1>Is loading !!!</h1>}
                {datas!= null && datas.data.length<1 && <h1>No result</h1>}
            </div>
        </div>
    )
}

export default Home;