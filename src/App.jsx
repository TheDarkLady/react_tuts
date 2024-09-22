import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProductList from './components/products'
import FunctionalComponents
 from './components/FunctionalComponents'
import Class_based_component from './components/Class_based_component'
const dummyProductData = ['product1', 'product2', 'product3']
import User from './components/users/user'
import ContextButtonComponent from './components/context-comp/button'
import ContextTextComponent from './components/context-comp/text'
import Use_Reducer_Example from './Use_Reducer_Example'
import FormComponent from './form'
function App() {

  return (
    <>
    {/* <Use_Reducer_Example /> */}
    {/* <User /> */}
    {/* <ContextButtonComponent /> */}
    {/* <ContextTextComponent /> */}
    {/* <ProductList ListOfProducts={dummyProductData}/> */}
        {/* <FunctionalComponents/> */}
        {/* <Class_based_component/> */}
    <FormComponent />
    </>
  )
}

export default App
