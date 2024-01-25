import React from 'react';
function Counter()
{
    var [c,setC]=React.useState(0)
    function inc()
    {
        setC(c+1)
    }
    function dec()
    {
        setC(c-1)
    }
    React.useEffect(()=>{console.log('useEffect with empty dep array')},[])
    React.useEffect(()=>{console.log('useEffect with no dep array')})
    React.useEffect(()=>{console.log('useEffect with d dependency')},[c])
    return(
        <div className='mybox'>
            <h1>Counter:{c}</h1>
            <button onClick={inc}>Incerement</button>
            <button onClick={dec}>Decrement</button>
        </div>
    )
}
export default Counter