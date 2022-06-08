import React from 'react'
import './style.css'
import { useGlobalContext } from '../../context'

const SideBar = () => {
    const {withBorder,withoutBorder,refreshPage}=useGlobalContext();
  return (
    <>
    <div className='sideBar'>
        <div className='row-div'>
            <div className='button-div'>a1</div>
            <div className='button-div'>b1</div>
            <div className='button-div'>c1</div>
        </div>
        <div className='row-div'>
            <div className='button-div' onClick={()=>withBorder()}>a2</div>
            <div className='button-div' onClick={()=>withoutBorder()}>b2</div>
            <div className='button-div' onClick={()=>refreshPage()}>c2</div>
        </div>
    </div>
    </>
  )
}

export default SideBar