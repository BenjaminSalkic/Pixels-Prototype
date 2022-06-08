import React,{useState,useEffect} from 'react'
import './style.css'
import { FaSquare } from 'react-icons/fa';
import { useGlobalContext } from '../../context'


const TopBar = () => {

  const {boja,promjena}=useGlobalContext();
  const [color,setColor]=useState('white');

  useEffect(() => {
    promjena(color);
  },[color]);

  return (
    <div className='TopBar'>
    <div className='Color' onClick={()=>setColor('black')}><FaSquare className='kocka'  style={{color:'black'}}/></div>
    <div className='Color' onClick={()=>setColor('red')}><FaSquare className='kocka' style={{color:'red'}}/></div>
    <div className='Color' onClick={()=>setColor('blue')}><FaSquare className='kocka' style={{color:'blue'}}/></div>
    <div className='Color' onClick={()=>setColor('yellow')}><FaSquare className='kocka' style={{color:'yellow'}}/></div>
    <div className='Color' onClick={()=>setColor('green')}><FaSquare className='kocka' style={{color:'green'}}/></div>
    <div className='Color' onClick={()=>setColor('white')}><FaSquare className='kocka' style={{color:'white'}}/></div>
    <div className='Color' onClick={()=>setColor('orange')}><FaSquare className='kocka' style={{color:'orange'}}/></div>
    <div className='Color' onClick={()=>setColor('purple')}><FaSquare className='kocka' style={{color:'purple'}}/></div>
    </div>
  )
}

export default TopBar