import React from 'react'
function ButtonComponent(){
    return(
        <button>Click Here</button>
    )
}
export default function ProductItem({singleProductItem, key}) {
  return (
    <div key={key}>
      <p>{singleProductItem}</p>
      <ButtonComponent/>
    </div>
  )
}
