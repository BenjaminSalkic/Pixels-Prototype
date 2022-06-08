import React from 'react'
import './style.css'
import Medium from '../../components/100x100'
import TopBar from './../../components/topBar/index'
import SideBar from '../../components/sideBar'


const medimScreen = () => {
  return (
    <>
        <TopBar/>
        <SideBar/>
        <div className='Screen'>
          <Medium/>
          { /* <button href='drawSmall'><a href='/drawSmall'>a</a></button>*/ }
        </div>
    </>
  )
}

export default medimScreen