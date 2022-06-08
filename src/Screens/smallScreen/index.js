import React from 'react'
import './style.css'
import Small from './../../components/50x50/index'
import TopBar from './../../components/topBar/index'


const smallScreen = () => {
  return (
    <>
        <TopBar/>
        <div className='Screen'>
            <Small/>
        </div>
    </>
  )
}

export default smallScreen