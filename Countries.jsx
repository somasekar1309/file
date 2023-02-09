import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";

function Countries(){
    
    const [Countries,setCountries]=useState([])
    
    useEffect(()=>{
        axios.get("https://restcountries.com/v2/all").then((res)=>{
            console.log(res);
            setCountries([...res.data])
        })
    },[])
    return(
        <div>
            <h1>Countries</h1>
            <div style={{display:'flex',flexWrap:'wrap'}}>
            {
                Countries.map((Country)=>{
                    return(
                        <div style={{width:'25%'}}>
                            <div style={{padding:'2px',margin:'2px',height:'280px',backgroundColor:'whitesmoke'}}>
                                <h3>{Country.name}</h3>
                                <img src={Country.flag} style={{width:'100%',height:'200px'}}  />
                            </div>
                        </div>    
                    )
                })
            }
            </div>
        </div>
    )    
}
export default Countries;