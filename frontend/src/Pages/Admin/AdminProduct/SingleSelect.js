import React from 'react'


const SingleSelect = ({defaultValue,val,name}) => {
let select = (defaultValue === val) ? ' selected' : ''

  if (select) {
    return (
      <option selected value={val}>{name}</option>
      )
  }else{
    return (
<option value={val}>{name}</option>    )
  }

  // return(
  //   // <option key={idx} value={item.category_id}>{item.category_name}</option>
  //   <option select value={val}>{name}</option>
  //  )

 }

export default SingleSelect