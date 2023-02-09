import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";

function Airlines(){
    
    const [airlines,setAirlies]=useState([])
    
    useEffect(()=>{
        axios.get("https://api.instantwebtools.net/v1/airlines").then((res)=>{
            console.log(res);
            setAirlies([...res.data])
        })
    },[])
    return(
        <div>
            <h1 id="airline_heading">Airliness</h1>
            <div style={{display:'flex',flexWrap:'wrap'}}>
            {
                airlines.map((item)=>{
                    return(
                        <div style={{width:'20%'}}>
                            <div style={{padding:'2px',margin:'2px',height:'200px',backgroundColor:'whitesmoke'}}>
                                {/* <h3>{item.name}</h3> */}
                                <h3>{item.country}</h3>
                                <img src={item.logo} style={{width:'70%',height:'120px'}} />
                            </div>
                        </div>    
                    )
                })
            }
            </div>
        </div>
    )    
}
export default Airlines;