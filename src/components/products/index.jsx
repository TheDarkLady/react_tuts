import React, { useEffect } from 'react'
import { useState } from 'react'
import ProductItem from './components/ProductItem'


export default function ProductList(props) {
    // console.log(props)
    const initialState = true;
    const [flag, setFlag] = useState(initialState);
    const [count, setCount] = useState(0)
    const [changeStyle, setChangeStyle] = useState(false)
    function toggleText() {
        setFlag(!flag)
    }
    function handleCount() {
      setCount(count + 1)
    }
    useEffect(() => {
      setFlag(!flag);
    },[]) //this will run only on page load
    useEffect(()=>{
      console.log("count changed")
      if(count === 10){
        setChangeStyle(true)
      }
    }, [count])
    console.log(changeStyle)
    
    // function renderTextBlock(getFlag) {
    //     return getFlag ? <h4>Flag true</h4> : <h4>Flag false</h4>
    // }
    let renderTextBlock = flag ? <h4>Flag true</h4> : <h4>Flag false</h4>
    return (
        <div>
        
      <h3>Ecommers projects</h3>
      <button onClick={toggleText}>Toggle text </button>
      {
        flag ? <h4 style={{color:"green"}}>Flag true</h4> : <h4 style={{color:"red"}}>Flag false</h4>
      }
      <div>
        <p>Count is {count}</p>
        <button style={{backgroundColor:changeStyle ? "red" : "green", color: "#fff", padding:changeStyle? "10px" : "5px"}} onClick={handleCount}>Increase Count</button>
      </div>
          
      {
        <ul>
            {
                props.ListOfProducts.map((product, index)=>{
                    return <ProductItem key={index} singleProductItem={product}/>
                })
            }
        </ul>
      }
    </div>
  )
}
