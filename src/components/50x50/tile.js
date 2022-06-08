import React,{useState} from 'react'
import './styleTile.css'
import { useGlobalContext } from '../../context'

const Tile = (props) => {
  const {border}=useGlobalContext();
    const{color,clear}=props;
    
    console.log(border)
    const [boja,setBoja]=useState("white")

    function applycolor(){
        setBoja(color)
    }
    
  return (
    <>
    {clear ? <div className={border ? 'polje border':'polje'} style={{backgroundColor:boja}} onClick={()=>applycolor()}></div> : <></>}
    </>
  )

}
export default Tile