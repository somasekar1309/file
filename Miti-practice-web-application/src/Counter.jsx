import React from 'react';

function Counter() {
    const[a,setA]=React.useState(100);
    const[b,setB]=React.useState(200);
    function IncA(){
        setA(a+10)
    }
    function IncB(){
        setB(b+20)
    }
        React.useEffect(()=>{
            console.log("with empty")
        },[])
        React.useEffect(()=>{
            console.log("without")
        })
        React.useEffect(()=>{
            console.log("a")
        },[a])
        React.useEffect(()=>{
            console.log("b")
        },[b])
        return (
            <div className='Counter' id='Counter'>
                <div id='comp'>
                    <h1> My Component </h1>
                    <h1> A:{a} </h1>
                    <h1> B:{b} </h1>
                    <button onClick={IncA}> Inc A</button> &nbsp;
                    <button onClick={IncB}> Inc B</button>
                </div>
            </div>
         )}
export default Counter