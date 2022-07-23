import React,{useState} from 'react'
import {BASE_URL,PUBLIC_URL} from '../../../config';
import axios from 'axios'

/**
* @author
* @function SingleSliderItem
**/

const HeaderSingleSliderItem = ({data,setCompRender,serial}) => {
  const [deleteing, setDeleteing] = useState(false);

  const deleteHandler = () => {
    let cnfrm = window.confirm("Are you sure?")
    if (cnfrm) {
      setDeleteing(true)
      axios.delete(`${BASE_URL}header-slider/${data.id}`)
      .then(res=>{
        if (res.status === 201) {
          setCompRender()
          setDeleteing(false)
          setTimeout(() => {
            alert("Deleted Successfully.")            
          }, 10);
        }
      })
     
    }
  }
  return (
    <tr>
      <td style={{textAlign:"center"}}>{serial+1}</td>
      <td style={{textAlign:"center"}}><img style={{padding:0,width:"15rem"}}  src={PUBLIC_URL+data.image} alt={serial} /></td>
      <td style={{textAlign:"center"}}>
        <button onClick={deleteHandler}>{deleteing?"Deleteing":"Delete"}</button>
      </td>
    </tr>
  )

}

export default HeaderSingleSliderItem