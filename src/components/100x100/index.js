import React,{useState} from 'react'
import { useGlobalContext } from '../../context'
import './styleMedium.css'
import Tile from './../50x50/tile'

const Medium = () => {
    const {boja,promjena}=useGlobalContext();

    const [clear,setClear]=useState(true);
 

    function board(){
        let board=[];
        for(var i=0;i<100;i++){
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
    <div className='tablaMedium'>{board()}</div>
    </>
  )
}

export default Medium