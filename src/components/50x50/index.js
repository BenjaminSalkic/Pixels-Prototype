import React,{useState} from 'react'
import { useGlobalContext } from '../../context'
import './styleSmall.css'
import Tile from "./tile"

const Small = () => {
   
    const {boja,promjena}=useGlobalContext();

    const [clear,setClear]=useState(true);

    function board(){
        let board=[];
        for(var i=0;i<49;i++){
            board.push({id:i,c:boja,x:clear});
        }
        console.log('done')
        return board.map((tile)=>{
            const{id,c,x}=tile;
            return <Tile color={c} clear={x} key={id}/>
        })
    }
  
  return (
    <>
    <div className='tablaSmall'>{board()}</div>
    </>
  )
}

export default Small